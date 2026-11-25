/* 汉语 Từng Bước — app học tiếng Trung cho người Việt đi làm (0 → HSK3)
 * Không cần server: dữ liệu học lưu trong localStorage của trình duyệt. */
(function () {
  "use strict";
  const $ = (s, el = document) => el.querySelector(s);
  const app = $("#app");
  const UNITS = window.UNITS, B = window.BASICS;
  const LESSONS = UNITS.flatMap(u => u.lessons.map(l => Object.assign(l, { unit: u })));
  const byId = id => LESSONS.find(l => l.id === +id);
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const pick = a => a[Math.random() * a.length | 0];
  const DAY = 864e5;

  /* ---------- Lưu trữ ---------- */
  const store = {
    get(k, d) { try { const v = localStorage.getItem("hz." + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem("hz." + k, JSON.stringify(v)); } catch (e) {} }
  };
  let progress = store.get("progress", {});   // {lessonId: {score, done}}
  let srs = store.get("srs", {});             // {hanzi: {i, e, d, r}}
  let profile = store.get("profile", { reason: "", goal: 15, en: true, py: true, started: false });
  let streak = store.get("streak", { last: "", n: 0, days: 0 });
  const save = () => { store.set("progress", progress); store.set("srs", srs); store.set("profile", profile); store.set("streak", streak); };

  const today = () => new Date().toISOString().slice(0, 10);
  function touchStreak() {
    const t = today(); if (streak.last === t) return;
    const y = new Date(Date.now() - DAY).toISOString().slice(0, 10);
    streak.n = streak.last === y ? streak.n + 1 : 1; streak.last = t; streak.days = (streak.days || 0) + 1; save();
  }

  /* ---------- Từ vựng ---------- */
  const W = w => ({ h: w[0], p: w[1], hv: w[2], vi: w[3], en: w[4], m: w[5] });
  const ALLWORDS = (() => { const m = new Map(); LESSONS.forEach(l => l.words.forEach(w => { const o = W(w); o.lesson = l.id; if (!m.has(o.h)) m.set(o.h, o); })); return m; })();
  const speakText = h => h.replace(/[／/].*$/, "").replace(/…/g, "").trim();

  /* ---------- Thanh điệu & tô màu ---------- */
  const TONE = { "āēīōūǖ": 1, "áéíóúǘ": 2, "ǎěǐǒǔǚ": 3, "àèìòùǜ": 4 };
  function toneOf(syl) { for (const k in TONE) for (const c of syl) if (k.includes(c)) return TONE[k]; return 0; }
  function colorPinyin(p) { return p.split(/(\s+)/).map(s => /\s/.test(s) ? s : `<span class="t${toneOf(s)}">${esc(s)}</span>`).join(""); }
  function colorHanzi(h, p) {
    const chars = [...h], syl = p.split(/\s+/).filter(Boolean);
    if (chars.length !== syl.length) return `<span class="hz">${esc(h)}</span>`;
    return `<span class="hz">` + chars.map((c, i) => `<span class="t${toneOf(syl[i])}">${esc(c)}</span>`).join("") + `</span>`;
  }

  /* ---------- Phát âm (giọng đọc của máy) ---------- */
  let zhVoice = null;
  function loadVoices() {
    if (!("speechSynthesis" in window)) return;
    const vs = speechSynthesis.getVoices();
    zhVoice = vs.find(v => /zh[-_]CN/i.test(v.lang)) || vs.find(v => /^zh/i.test(v.lang)) || null;
  }
  if ("speechSynthesis" in window) { loadVoices(); speechSynthesis.onvoiceschanged = loadVoices; }
  function say(text, rate) {
    if (!("speechSynthesis" in window)) { toast("Trình duyệt này chưa hỗ trợ đọc tiếng Trung 😢"); return; }
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(speakText(text).replace(/\|/g, ""));
    u.lang = "zh-CN"; if (zhVoice) u.voice = zhVoice; u.rate = rate || 0.8;
    speechSynthesis.speak(u);
  }
  window.__say = say;
  const sayBtn = (t, cls = "say") => `<button class="${cls}" data-say="${esc(t)}" aria-label="Nghe">🔊</button>`;

  /* ---------- Thông báo vui ---------- */
  const PRAISE = ["太棒了！Giỏi quá!", "对了！Chuẩn không cần chỉnh!", "厉害！Đỉnh của chóp!", "很好！Sếp mà thấy chắc tăng lương!", "Não bạn vừa tạo thêm 1 nơ-ron tiếng Trung 🧠", "666！(liù liù liù = quá đỉnh)"];
  const OOPS = ["Sai là bước đầu của nhớ lâu 💪", "没关系！(Không sao!) Edison sai 1000 lần mới ra bóng đèn.", "Ối! Lần sau não sẽ nhớ kỹ hơn vì vừa bị “giật mình”.", "Nhầm tí thôi, 加油！(Cố lên!)"];
  function toast(msg, ms = 1800) {
    const t = document.createElement("div"); t.className = "toast"; t.textContent = msg; document.body.appendChild(t);
    setTimeout(() => t.remove(), ms);
  }

  /* ---------- SRS: ôn tập ngắt quãng (kiểu SM-2 rút gọn) ---------- */
  function addToSrs(words) {
    const now = Date.now();
    words.forEach(w => { if (!srs[w.h]) srs[w.h] = { i: 0, e: 2.5, d: now, r: 0 }; });
    save();
  }
  function rateCard(h, q) { // q: 0 quên, 1 khó, 2 nhớ, 3 dễ
    const c = srs[h] || { i: 0, e: 2.5, d: 0, r: 0 };
    if (q === 0) { c.i = 0; c.r = 0; c.e = Math.max(1.3, c.e - 0.2); c.d = Date.now() + 10 * 6e4; }
    else {
      if (c.r === 0) c.i = q === 3 ? 4 : q === 2 ? 1 : 0.5;
      else if (c.r === 1) c.i = q === 3 ? 7 : q === 2 ? 3 : 1.5;
      else c.i = c.i * (q === 1 ? 1.2 : q === 2 ? c.e : c.e * 1.3);
      c.e = Math.max(1.3, c.e + (q === 1 ? -0.15 : q === 3 ? 0.15 : 0));
      c.r++; c.d = Date.now() + c.i * DAY;
    }
    srs[h] = c; save();
  }
  const nextLabel = (h, q) => {
    const c = srs[h] || { i: 0, e: 2.5, r: 0 };
    if (q === 0) return "10 phút";
    let i = c.r === 0 ? (q === 3 ? 4 : q === 2 ? 1 : 0.5) : c.r === 1 ? (q === 3 ? 7 : q === 2 ? 3 : 1.5) : c.i * (q === 1 ? 1.2 : q === 2 ? c.e : c.e * 1.3);
    return i < 1 ? Math.round(i * 24) + " giờ" : Math.round(i) + " ngày";
  };
  const dueList = () => Object.keys(srs).filter(h => srs[h].d <= Date.now() && ALLWORDS.has(h));

  /* ---------- Khung trang ---------- */
  function shell(title, body, opts = {}) {
    const due = dueList().length;
    app.innerHTML = `
      <header class="top"><div class="wrap">
        ${opts.back ? `<button class="back" data-go="${opts.back}">‹</button>` : `<span style="font-size:24px">🐼</span>`}
        <h1>${title}</h1>
        <span class="pill" title="Chuỗi ngày học">🔥 ${streak.n || 0}</span>
        <span class="pill" title="Từ cần ôn">🔁 ${due}</span>
      </div></header>
      <main class="wrap">${body}</main>
      <nav class="bottom">
        ${[["#/", "🗺️", "Lộ trình"], ["#/on-tap", "🔁", "Ôn tập"], ["#/so-do", "🧠", "Sơ đồ"], ["#/tu-dien", "📖", "Từ điển"], ["#/phuong-phap", "💡", "Phương pháp"]]
          .map(([h, i, t]) => `<a href="${h}" class="${(location.hash || "#/") === h ? "on" : ""}"><span>${i}</span>${t}</a>`).join("")}
      </nav>`;
    window.scrollTo(0, 0);
  }

  /* ---------- Trang chủ: lộ trình ---------- */
  function viewHome() {
    if (!profile.started) return onboarding();
    const done = LESSONS.filter(l => progress[l.id] && progress[l.id].done).length;
    const learned = Object.keys(srs).length;
    const next = LESSONS.find(l => !(progress[l.id] && progress[l.id].done));
    const due = dueList().length;
    let html = `
      <div class="card hero">
        <div class="muted small">Mục tiêu của bạn</div>
        <div style="font-weight:600">“${esc(profile.reason || "Chinh phục HSK3")}”</div>
        <div class="stat" style="margin-top:10px">
          <div><b>${done}/26</b><span class="small muted">bài học</span></div>
          <div><b>${learned}</b><span class="small muted">từ đã học</span></div>
          <div><b>${streak.n || 0}🔥</b><span class="small muted">ngày liên tiếp</span></div>
        </div>
        <div class="bar" style="margin-top:10px"><i style="width:${Math.round(done / 26 * 100)}%"></i></div>
        <div class="row" style="margin-top:12px">
          ${due ? `<a class="btn" href="#/on-tap">🔁 Ôn ${due} từ đến hạn</a>` : ""}
          ${next ? `<a class="btn ${due ? "alt" : ""}" href="#/bai/${next.id}">▶ Học tiếp: Bài ${next.id}</a>` : `<span class="badge">🎓 Đã xong lộ trình!</span>`}
        </div>
        <div class="small muted" style="margin-top:8px">⏱️ Gợi ý cho người đi làm: ${profile.goal} phút/ngày — ôn từ đến hạn trước, rồi học bài mới.</div>
      </div>

      <a class="card unit" style="--c:#6d4c41;display:block;text-decoration:none;color:inherit" href="#/ngu-am">
        <div class="unit-head"><span class="em">🔤</span><div class="t"><b>Ngữ âm & Chữ Hán</b><br><small>Học trước tiên: thanh điệu, pinyin, nét chữ, bộ thủ</small></div><span>›</span></div>
      </a>`;
    UNITS.forEach(u => {
      const ud = u.lessons.filter(l => progress[l.id] && progress[l.id].done).length;
      html += `<div class="card unit" style="--c:${u.color}">
        <div class="unit-head"><span class="em">${u.emoji}</span>
          <div class="t"><b>Chủ đề ${u.id}: ${u.name}</b> <span class="hz muted">${u.zh}</span><br><small>${ud}/${u.lessons.length} bài · <a href="#/so-do/${u.id}">xem sơ đồ tư duy</a></small></div></div>
        <div class="lessons">${u.lessons.map(l => `
          <a class="lesson-tile ${progress[l.id] && progress[l.id].done ? "done" : ""}" href="#/bai/${l.id}">
            <span class="e">${l.emoji}</span><span><span class="n">Bài ${l.id}</span><br><b>${l.title}</b></span></a>`).join("")}
        </div></div>`;
    });
    shell("汉语 Từng Bước", html);
  }

  function onboarding() {
    shell("Chào mừng bạn! 欢迎！", `
      <div class="card hero">
        <div class="big">你好！👋</div>
        <p>App này đưa bạn từ <b>số 0 đến HSK3</b> qua 26 bài theo chủ đề đời sống & công sở. Mỗi từ có <b>chữ Hán, pinyin, Hán Việt, nghĩa tiếng Việt và tiếng Anh</b>, kèm <b>mẹo nhớ</b> (đôi khi hơi lầy 😄).</p>
        <h3>Bước 1 — Tại sao bạn học tiếng Trung?</h3>
        <p class="small muted">Adam Khoo nói: người có lý do đủ mạnh sẽ tự tìm ra cách. Viết lý do của bạn — app sẽ nhắc bạn mỗi ngày.</p>
        <textarea id="reason" rows="2" placeholder="VD: Giao tiếp với đối tác Trung Quốc, thăng chức trong năm nay"></textarea>
        <h3>Bước 2 — Cam kết mỗi ngày</h3>
        <select id="goal"><option value="10">10 phút — bận rộn</option><option value="15" selected>15 phút — vừa sức</option><option value="30">30 phút — nghiêm túc</option></select>
        <p></p>
        <button class="btn block" id="start">Bắt đầu học 🚀</button>
      </div>`);
    $("#start").onclick = () => {
      profile.reason = $("#reason").value.trim(); profile.goal = +$("#goal").value; profile.started = true; save();
      location.hash = "#/ngu-am";
    };
  }

  /* ---------- Ngữ âm & Chữ Hán ---------- */
  function viewBasics(tab) {
    tab = tab || "thanh";
    const tabs = [["thanh", "🎵 Thanh điệu"], ["pinyin", "🔤 Pinyin"], ["bien", "🔀 Biến điệu"], ["so", "🔢 Số đếm"], ["net", "✍️ Nét & thứ tự"], ["bo", "🧩 Bộ thủ"]];
    let body = `<div class="tabs">${tabs.map(([k, t]) => `<button class="${k === tab ? "on" : ""}" data-go="#/ngu-am/${k}">${t}</button>`).join("")}</div>`;
    if (tab === "thanh") {
      body += `<div class="card"><p>Tiếng Trung có <b>4 thanh + 1 thanh nhẹ</b>. Tin vui: tiếng Việt có 6 thanh nên bạn đã có “cơ bắp thanh điệu” sẵn rồi! App tô màu mỗi thanh để não ghi nhớ bằng hình ảnh:
        <span class="t1">■ thanh 1</span> <span class="t2">■ thanh 2</span> <span class="t3">■ thanh 3</span> <span class="t4">■ thanh 4</span> <span class="t0">■ nhẹ</span></p></div>`;
      B.tones.forEach(t => body += `<div class="card"><div class="row"><span class="hz ${t.color}" style="font-size:44px">${t.ex[0]}</span>
        <div style="flex:1"><b class="${t.color}">${t.name}</b> · <span class="${t.color}">${t.ex[1]}</span> (${t.ex[2]})<br><span class="small">${t.vi}</span><br><span class="small muted">${t.fun}</span></div>${sayBtn(t.ex[0])}</div></div>`);
      body += `<div class="card fun">${B.toneStory} ${sayBtn("妈妈骂马吗？", "chipbtn")}</div>`;
    } else if (tab === "pinyin") {
      body += `<div class="card"><h3>Thanh mẫu (phụ âm đầu)</h3><p class="small muted">Bấm để nghe chữ ví dụ. Cột giữa là âm gần giống trong tiếng Việt.</p><table class="table">
        ${B.initials.map(i => `<tr><td><b style="font-size:20px">${i[0]}</b></td><td class="small">${i[1]}</td><td><button class="chipbtn" data-say="${i[2].split(" ")[0]}"><span class="hz">${i[2].split(" ")[0]}</span> ${i[2].split(" ")[1]} 🔊</button></td></tr>`).join("")}</table></div>
        <div class="card"><h3>Vận mẫu (vần)</h3><div class="row">${B.finals.map(f => `<span class="chipbtn"><b>${f[0]}</b> <span class="small muted">≈ ${f[1]}</span></span>`).join("")}</div></div>
        <div class="card"><h3>⚠️ Bẫy người Việt hay gặp</h3><ul>${B.traps.map(t => `<li>${t}</li>`).join("")}</ul></div>`;
    } else if (tab === "bien") {
      body += B.sandhi.map(s => `<div class="card"><b>${s.t}</b><p>${s.e}</p><span class="badge">${s.x}</span></div>`).join("");
    } else if (tab === "so") {
      body += `<div class="card"><p>Đếm 1–10. Mẹo: số 11 = 十一 (mười một), 20 = 二十 (hai mười), 99 = 九十九 — logic y như tiếng Việt!</p></div><div class="grid">
        ${B.numbers.map(n => `<div class="card center"><div class="hz" style="font-size:44px">${n[0]}</div><b>${n[2]}</b> · ${colorPinyin(n[1])} ${sayBtn(n[0], "chipbtn")}<div class="small muted">${n[3]}</div></div>`).join("")}</div>`;
    } else if (tab === "net") {
      body += `<div class="card"><h3>8 nét cơ bản</h3><div class="grid">${B.strokes.map(s => `<div class="center"><div class="hz" style="font-size:40px">${s[0]}</div><b class="small">${s[1]}</b><div class="small muted">${s[2]}</div></div>`).join("")}</div></div>
        <div class="card"><h3>7 quy tắc bút thuận</h3><table class="table">${B.rules.map((r, i) => `<tr><td>${i + 1}</td><td>${r[0]}</td><td class="hz" style="font-size:28px">${r[1]}</td></tr>`).join("")}</table>
        <p class="small muted">Luyện viết từng chữ trong mục “✍️ Viết” của mỗi bài học.</p></div>`;
    } else if (tab === "bo") {
      body += `<div class="card"><p>Bộ thủ là “mảnh LEGO” của chữ Hán. Biết khoảng 20 bộ thủ, bạn đoán được nghĩa của hàng trăm chữ. ${B.hanviet}</p></div>`;
      body += B.radicals.map(r => `<div class="card"><div class="row"><span class="hz" style="font-size:44px;color:var(--brand)">${r[0]}</span>
        <div style="flex:1"><b>Bộ ${r[1]}</b> — ${r[2]}<br><span class="hz" style="font-size:20px">${r[3]}</span><br><span class="small muted">🖼️ ${r[4]}</span></div></div></div>`).join("");
    }
    body += `<p><a class="btn block" href="#/bai/1">Xong phần ngữ âm? Vào Bài 1 ›</a></p>`;
    shell("Ngữ âm & Chữ Hán", body, { back: "#/" });
  }

  /* ---------- Bài học ---------- */
  function viewLesson(id, tab) {
    const l = byId(id); if (!l) return viewHome();
    tab = tab || "tu";
    const tabs = [["tu", "📚 Từ vựng"], ["the", "🃏 Thẻ nhớ"], ["ngu-phap", "🧱 Ngữ pháp"], ["hoi-thoai", "💬 Hội thoại"], ["viet", "✍️ Viết"], ["kiem-tra", "🎯 Kiểm tra"]];
    const words = l.words.map(W);
    let body = `<div class="card" style="border-left:6px solid ${l.unit.color}">
      <div class="small muted">Chủ đề ${l.unit.id} · ${l.unit.name}</div>
      <h2 style="margin:4px 0">${l.emoji} Bài ${l.id}: ${l.title}</h2>
      <div class="hz" style="font-size:22px">${l.zh} ${sayBtn(l.zh, "chipbtn")}</div>
      <div class="small">🎯 ${l.goal}</div></div>
      <div class="tabs">${tabs.map(([k, t]) => `<button class="${k === tab ? "on" : ""}" data-go="#/bai/${l.id}/${k}">${t}</button>`).join("")}</div>`;

    if (tab === "tu") {
      body += `<p class="small muted">🧠 Cách học: <b>Nghe</b> 🔊 → <b>nhìn</b> chữ và màu thanh → đọc <b>Hán Việt</b> → <b>hình dung</b> câu chuyện trong mẹo nhớ (càng buồn cười, càng nhớ lâu).</p>`;
      body += words.map(w => wordCard(w)).join("");
      body += `<a class="btn block" href="#/bai/${l.id}/the">Tiếp: Luyện thẻ nhớ ›</a>`;
    } else if (tab === "the") {
      body += `<div id="flash"></div>`;
    } else if (tab === "ngu-phap") {
      body += l.grammar.map(g => `<div class="card gram"><h3>${g.t}</h3><div class="f hz">${esc(g.f)}</div><p class="small">${g.e}</p>
        ${g.x.map(x => `<div class="ex">${sayBtn(x[0].replace(/\|/g, ""))}<div><div class="zh hz">${x[0].replace(/\|/g, "")}</div><div class="small">${pinyinLine(x[1])}</div><div class="small muted">${x[2]}</div></div></div>`).join("")}</div>`).join("");
      body += `<a class="btn block" href="#/bai/${l.id}/hoi-thoai">Tiếp: Hội thoại ›</a>`;
    } else if (tab === "hoi-thoai") {
      body += `<div class="row" style="margin:8px 0"><button class="btn ghost" id="playAll">▶ Nghe cả đoạn</button><button class="btn ghost" id="hideVi">🙈 Ẩn/hiện nghĩa</button></div>`;
      body += `<div class="card">${l.dialogue.map(d => `<div class="dlg ${d[0]}"><div class="av">${d[0]}</div><div class="bub">
        <div class="zh hz">${esc(d[1])}</div><div class="small">${pinyinLine(d[2])}</div><div class="small muted vi">${esc(d[3])}</div></div>${sayBtn(d[1])}</div>`).join("")}</div>`;
      body += `<div class="card fun">${l.fun}</div>`;
      body += `<div class="card"><b>🎭 Nhập vai:</b> <span class="small">Đọc to vai B, che phần chữ Việt. Sau đó đổi vai. Tưởng tượng bạn đang ở văn phòng/cửa hàng thật — cảm xúc càng thật, nhớ càng sâu.</span></div>`;
      body += `<a class="btn block" href="#/bai/${l.id}/viet">Tiếp: Luyện viết ›</a>`;
    } else if (tab === "viet") {
      body += `<div id="write"></div>`;
    } else if (tab === "kiem-tra") {
      body += `<div id="quiz"></div>`;
    }
    shell(`Bài ${l.id}: ${l.title}`, body, { back: "#/" });

    if (tab === "the") flashcards($("#flash"), words, () => { addToSrs(words); toast("Đã thêm " + words.length + " từ vào lịch ôn tập 🔁"); location.hash = `#/bai/${l.id}/ngu-phap`; }, false);
    if (tab === "hoi-thoai") {
      $("#playAll").onclick = () => playSeq(l.dialogue.map(d => d[1]));
      $("#hideVi").onclick = () => document.querySelectorAll(".vi").forEach(e => e.style.visibility = e.style.visibility === "hidden" ? "" : "hidden");
    }
    if (tab === "viet") writer($("#write"), [...new Set(words.flatMap(w => [...w.h.replace(/[^一-鿿]/g, "")]))]);
    if (tab === "kiem-tra") quiz($("#quiz"), l);
  }
  const pinyinLine = p => p.split(/(\s+)/).map(s => /\s/.test(s) ? s : `<span class="t${toneOf(s)}">${esc(s)}</span>`).join("");

  function wordCard(w) {
    return `<div class="card word">
      <div class="h">${colorHanzi(w.h, w.p)}</div>
      <div class="meaning"><span class="p">${colorPinyin(w.p)}</span><span class="vi">${esc(w.vi)}</span>${profile.en ? `<span class="en">${esc(w.en)}</span>` : ""}<span class="hv">${esc(w.hv)}</span></div>
      ${sayBtn(w.h)}
      ${w.m ? `<div class="m">${esc(w.m)}</div>` : ""}
    </div>`;
  }

  function playSeq(list) {
    if (!("speechSynthesis" in window)) return toast("Trình duyệt chưa hỗ trợ đọc.");
    speechSynthesis.cancel();
    list.forEach(t => { const u = new SpeechSynthesisUtterance(speakText(t)); u.lang = "zh-CN"; if (zhVoice) u.voice = zhVoice; u.rate = 0.8; speechSynthesis.speak(u); });
  }

  /* ---------- Thẻ nhớ ---------- */
  function flashcards(el, words, onDone, srsMode) {
    let i = 0; const list = srsMode ? words : shuffle(words);
    function render() {
      if (i >= list.length) {
        el.innerHTML = `<div class="card center"><div style="font-size:48px">🎉</div><h3>Xong ${list.length} thẻ!</h3>
          <p class="small muted">${srsMode ? "App sẽ nhắc bạn ôn lại đúng lúc sắp quên — đó là bí quyết của trí nhớ dài hạn." : "Các từ này đã vào lịch ôn tập: sau 1 ngày, 3 ngày, 1 tuần, 2 tuần… mỗi lần nhớ được, khoảng cách lại dài hơn."}</p>
          <button class="btn" id="fdone">Tiếp tục ›</button></div>`;
        $("#fdone").onclick = onDone; return;
      }
      const w = list[i];
      el.innerHTML = `<div class="small muted center">Thẻ ${i + 1}/${list.length} · Chạm thẻ để lật</div>
        <div class="flash" id="fc"><div class="inner">
          <div class="face"><div class="h">${colorHanzi(w.h, w.p)}</div><div class="hint">Đoán nghĩa & cách đọc trước khi lật 🤔</div></div>
          <div class="face back"><div class="p">${colorPinyin(w.p)}</div><div style="font-size:20px;font-weight:700">${esc(w.vi)}</div>
            ${profile.en ? `<div class="muted">${esc(w.en)}</div>` : ""}<div class="small" style="color:#8d4b2b">Hán Việt: ${esc(w.hv)}</div>
            ${w.m ? `<div class="small" style="margin-top:8px;background:#fff6d8;border-radius:10px;padding:6px 8px">💡 ${esc(w.m)}</div>` : ""}</div>
        </div></div>
        <div class="row" style="justify-content:center;margin-bottom:10px">${sayBtn(w.h)}</div>
        <div class="rate" id="rate" style="visibility:hidden">
          ${["Quên", "Khó", "Nhớ", "Dễ"].map((t, q) => `<button class="r${q}" data-q="${q}">${t}<small>${nextLabel(w.h, q)}</small></button>`).join("")}
        </div>`;
      const fc = $("#fc");
      fc.onclick = () => { fc.classList.toggle("flip"); $("#rate").style.visibility = "visible"; if (fc.classList.contains("flip")) say(w.h); };
      el.querySelectorAll("[data-q]").forEach(b => b.onclick = () => {
        const q = +b.dataset.q; rateCard(w.h, q);
        if (q === 0) { list.push(w); toast(pick(OOPS)); }
        i++; render();
      });
    }
    render();
  }

  /* ---------- Luyện viết ---------- */
  function writer(el, chars) {
    let i = 0;
    function render() {
      const c = chars[i], w = [...ALLWORDS.values()].find(x => x.h.includes(c));
      el.innerHTML = `<div class="card center">
        <div class="small muted">Chữ ${i + 1}/${chars.length} · Tô theo chữ mờ, nhớ quy tắc: ngang trước sổ sau, trên trước dưới sau, trái trước phải sau</div>
        <div class="canvas-wrap"><div class="ghost hz" id="ghost">${c}</div><canvas id="cv" width="560" height="560" style="width:280px;height:280px"></canvas></div>
        <div class="small">${w ? `Trong từ <b class="hz">${esc(w.h)}</b> · ${colorPinyin(w.p)} · ${esc(w.vi)}` : ""}</div>
        <div class="row" style="justify-content:center;margin-top:10px">
          <button class="btn ghost" id="prev">‹</button><button class="btn ghost" id="clr">🧽 Xóa</button>
          <button class="btn ghost" id="hide">👻 Ẩn mẫu</button>${sayBtn(c, "btn ghost")}<button class="btn ghost" id="nxt">›</button>
        </div>
        <p class="small muted">✋ Viết bằng tay giúp não ghi nhớ qua vận động (học bằng cả 3 giác quan: nhìn – nghe – làm).</p></div>`;
      const cv = $("#cv"), ctx = cv.getContext("2d");
      ctx.lineWidth = 18; ctx.lineCap = "round"; ctx.lineJoin = "round"; ctx.strokeStyle = "#2b2220";
      let drawing = false;
      const pos = e => { const r = cv.getBoundingClientRect(); return [(e.clientX - r.left) * 2, (e.clientY - r.top) * 2]; };
      cv.onpointerdown = e => { drawing = true; cv.setPointerCapture(e.pointerId); ctx.beginPath(); ctx.moveTo(...pos(e)); };
      cv.onpointermove = e => { if (drawing) { ctx.lineTo(...pos(e)); ctx.stroke(); } };
      cv.onpointerup = cv.onpointercancel = () => drawing = false;
      $("#clr").onclick = () => ctx.clearRect(0, 0, cv.width, cv.height);
      $("#hide").onclick = () => { const g = $("#ghost"); g.style.visibility = g.style.visibility === "hidden" ? "" : "hidden"; };
      $("#prev").onclick = () => { i = (i - 1 + chars.length) % chars.length; render(); };
      $("#nxt").onclick = () => { i = (i + 1) % chars.length; render(); };
    }
    render();
  }

  /* ---------- Kiểm tra ---------- */
  function quiz(el, l) {
    const words = l.words.map(W);
    const pool = [...ALLWORDS.values()];
    const distract = (w, n, key) => shuffle(words.concat(shuffle(pool).slice(0, 10)).filter(x => x[key] !== w[key])).filter((x, i, a) => a.findIndex(y => y[key] === x[key]) === i).slice(0, n);
    const qs = [];
    shuffle(words).slice(0, 10).forEach((w, k) => {
      const type = ["h2vi", "vi2h", "audio", "py2h"][k % 4];
      qs.push({ type, w, opts: shuffle([w, ...distract(w, 3, type === "h2vi" ? "vi" : "h")]) });
    });
    l.grammar.flatMap(g => g.x).filter(x => x[0].split("|").length >= 3).slice(0, 3).forEach(x => qs.push({ type: "order", x }));
    let i = 0, score = 0;
    function next() {
      if (i >= qs.length) return finish();
      const q = qs[i];
      let html = `<div class="small muted">Câu ${i + 1}/${qs.length}</div><div class="bar"><i style="width:${i / qs.length * 100}%"></i></div>`;
      if (q.type === "order") {
        const toks = q.x[0].split("|");
        html += `<div class="q-prompt"><b>Sắp xếp thành câu đúng:</b><div style="font-size:18px">“${esc(q.x[2])}”</div></div>
          <div class="order"><div class="ans" id="ans"></div><div class="pool" id="pool">${shuffle(toks.map((t, k) => [t, k])).map(([t, k]) => `<button class="chip hz" data-k="${k}">${esc(t)}</button>`).join("")}</div></div>
          <button class="btn block" id="chk" style="margin-top:10px">Kiểm tra</button>`;
        el.innerHTML = html;
        el.querySelectorAll(".chip").forEach(c => c.onclick = () => { (c.parentElement.id === "pool" ? $("#ans") : $("#pool")).appendChild(c); });
        $("#chk").onclick = () => {
          const got = [...$("#ans").children].map(c => c.textContent).join("");
          const ok = got === toks.join("");
          if (ok) score++;
          $("#chk").outerHTML = `<div class="card ${ok ? "" : "fun"}" style="${ok ? "background:#e8f5e9" : ""}">${ok ? "✅ " + pick(PRAISE) : "❌ Đáp án:"} <div class="hz" style="font-size:20px">${esc(toks.join(""))}</div><div class="small">${pinyinLine(q.x[1])}</div></div><button class="btn block" id="go">Tiếp ›</button>`;
          say(toks.join("")); $("#go").onclick = () => { i++; next(); };
        };
        return;
      }
      const w = q.w;
      const prompt = {
        h2vi: `<div class="h hz">${esc(w.h)}</div><div>nghĩa là gì?</div>`,
        vi2h: `<div style="font-size:22px;font-weight:700">${esc(w.vi)}</div><div class="muted">${profile.en ? esc(w.en) : ""}</div><div>Chọn chữ Hán đúng</div>`,
        audio: `<button class="btn" id="play" style="font-size:22px">🔊 Nghe</button><div>Bạn nghe thấy chữ nào?</div>`,
        py2h: `<div style="font-size:26px;font-weight:700">${colorPinyin(w.p)}</div><div>Chữ Hán nào đọc như vậy?</div>`
      }[q.type];
      html += `<div class="q-prompt">${prompt}</div><div class="opts">${q.opts.map((o, k) => `<button data-k="${k}" class="${q.type === "h2vi" ? "" : "hzopt hz"}">${esc(q.type === "h2vi" ? o.vi : o.h)}</button>`).join("")}</div><div id="fb"></div>`;
      el.innerHTML = html;
      if (q.type === "audio") { $("#play").onclick = () => say(w.h); setTimeout(() => say(w.h), 300); }
      el.querySelectorAll(".opts button").forEach(b => b.onclick = () => {
        const o = q.opts[+b.dataset.k], ok = o.h === w.h;
        el.querySelectorAll(".opts button").forEach(x => { x.disabled = true; if (q.opts[+x.dataset.k].h === w.h) x.classList.add("ok"); });
        if (!ok) b.classList.add("bad"); else score++;
        rateCard(w.h, ok ? 2 : 0);
        $("#fb").innerHTML = `<div class="card ${ok ? "" : "fun"}" style="${ok ? "background:#e8f5e9" : ""}">${ok ? "✅ " + pick(PRAISE) : "❌ " + pick(OOPS)}
          <div><b class="hz" style="font-size:22px">${esc(w.h)}</b> ${colorPinyin(w.p)} — ${esc(w.vi)}</div>${!ok && w.m ? `<div class="small">💡 ${esc(w.m)}</div>` : ""}</div>
          <button class="btn block" id="go">Tiếp ›</button>`;
        say(w.h); $("#go").onclick = () => { i++; next(); };
      });
    }
    function finish() {
      const pct = Math.round(score / qs.length * 100), pass = pct >= 70;
      if (pass) { progress[l.id] = { done: true, score: Math.max(pct, (progress[l.id] || {}).score || 0) }; addToSrs(words); touchStreak(); save(); }
      const nxt = byId(l.id + 1);
      el.innerHTML = `<div class="card center"><div class="score">${pct}%</div>
        <h3>${pass ? "🎉 Qua bài! 恭喜你！" : "Gần được rồi! Cần 70% để qua bài."}</h3>
        <p class="small">${pass ? "Phần thưởng nhỏ cho bạn: một cốc trà sữa 🧋 (Adam Khoo khuyên: tự thưởng để não liên kết việc học với niềm vui)." : "Xem lại thẻ nhớ và mẹo nhớ rồi thử lại — lần 2 thường tăng 20–30%!"}</p>
        <div class="card" style="text-align:left"><b>👩‍🏫 Thử dạy lại:</b> <span class="small">Hãy giải thích cho đồng nghiệp/người nhà 3 từ vừa học trong 1 phút. Dạy lại là cách nhớ sâu nhất (người dạy nhớ ~90%).</span></div>
        <div class="row" style="justify-content:center">
          <button class="btn ghost" data-go="#/bai/${l.id}/kiem-tra?${Date.now()}">↻ Làm lại</button>
          ${pass && nxt ? `<a class="btn" href="#/bai/${nxt.id}">Bài ${nxt.id} ›</a>` : `<a class="btn" href="#/">Về lộ trình</a>`}
        </div></div>`;
    }
    next();
  }

  /* ---------- Ôn tập ---------- */
  function viewReview() {
    const due = dueList().map(h => ALLWORDS.get(h));
    const learned = Object.keys(srs).length;
    shell("Ôn tập ngắt quãng", `
      <div class="card hero"><b>🔁 ${due.length} từ đến hạn hôm nay</b>
        <p class="small muted">Theo “đường cong quên lãng” (Ebbinghaus), ta quên ~70% sau 1 ngày nếu không ôn. App tính đúng lúc bạn sắp quên để nhắc lại: nhớ tốt thì giãn ra, quên thì ôn sớm.</p></div>
      <div id="rv"></div>`);
    const el = $("#rv");
    if (due.length) flashcards(el, shuffle(due), () => { touchStreak(); location.hash = "#/"; }, true);
    else if (learned) el.innerHTML = `<div class="card center"><div style="font-size:48px">😎</div><b>Hôm nay không còn từ đến hạn!</b><p class="small muted">Bạn đã học ${learned} từ. Muốn ôn thêm?</p><button class="btn" id="free">Ôn ngẫu nhiên 10 từ</button></div>`;
    else el.innerHTML = `<div class="card center">Chưa có từ nào. Học <a href="#/bai/1">Bài 1</a> để bắt đầu nhé!</div>`;
    const f = $("#free"); if (f) f.onclick = () => flashcards(el, shuffle(Object.keys(srs).map(h => ALLWORDS.get(h)).filter(Boolean)).slice(0, 10), () => location.hash = "#/", true);
  }

  /* ---------- Sơ đồ tư duy ---------- */
  function viewMindmap(uid) {
    const u = UNITS.find(x => x.id === +uid) || UNITS[0];
    const W0 = 1100, H0 = 1100, cx = W0 / 2, cy = H0 / 2;
    const n = u.lessons.length;
    let svg = "";
    const R1 = n === 1 ? 0 : 210;
    const per = n === 1 ? 14 : Math.min(8, Math.floor(28 / n));
    u.lessons.forEach((l, k) => {
      const a = (k / n) * Math.PI * 2 - Math.PI / 2;
      const lx = cx + R1 * Math.cos(a), ly = cy + R1 * Math.sin(a);
      const ws = l.words.slice(0, per).map(W);
      const spread = Math.PI * 2 / n * (n === 1 ? 1 : 0.92);
      ws.forEach((w, j) => {
        const b = a - spread / 2 + spread * (j + 0.5) / ws.length;
        const R2 = (n === 1 ? 300 : 400) + (j % 2 ? 80 : 0);
        const wx = cx + R2 * Math.cos(b), wy = cy + R2 * Math.sin(b);
        svg += `<path d="M${lx},${ly} L${wx},${wy}" stroke="${u.color}" stroke-opacity=".3" stroke-width="3" fill="none"/>`;
        svg += `<g data-say="${esc(w.h)}" style="cursor:pointer"><rect x="${wx - 58}" y="${wy - 30}" width="116" height="60" rx="14" fill="#fff" stroke="${u.color}" stroke-width="2" stroke-opacity=".6"/>
          <text x="${wx}" y="${wy - 2}" text-anchor="middle" font-size="26" class="hz">${esc(w.h.length > 4 ? w.h.slice(0, 4) : w.h)}</text>
          <text x="${wx}" y="${wy + 21}" text-anchor="middle" font-size="14" fill="#7a6a64">${esc(w.vi.split(/[,(;]/)[0].slice(0, 14))}</text></g>`;
      });
      if (n > 1) svg += `<line x1="${cx}" y1="${cy}" x2="${lx}" y2="${ly}" stroke="${u.color}" stroke-width="10" stroke-linecap="round"/>
        <circle cx="${lx}" cy="${ly}" r="62" fill="${u.color}" stroke="#fff" stroke-width="4"/><text x="${lx}" y="${ly - 6}" text-anchor="middle" font-size="32">${l.emoji}</text>
        <text x="${lx}" y="${ly + 26}" text-anchor="middle" font-size="17" fill="#fff" font-weight="700">Bài ${l.id}</text>`;
    });
    svg += `<circle cx="${cx}" cy="${cy}" r="88" fill="${u.color}" stroke="#fff" stroke-width="6"/><text x="${cx}" y="${cy - 8}" text-anchor="middle" font-size="40">${u.emoji}</text>
      <text x="${cx}" y="${cy + 34}" text-anchor="middle" font-size="26" fill="#fff" font-weight="700" class="hz">${u.zh}</text>`;
    shell("Sơ đồ tư duy", `
      <div class="tabs">${UNITS.map(x => `<button class="${x.id === u.id ? "on" : ""}" data-go="#/so-do/${x.id}">${x.emoji} ${x.name}</button>`).join("")}</div>
      <div class="card"><p class="small muted">🧠 Sơ đồ tư duy (Mind Map) — kỹ thuật Adam Khoo yêu thích: não nhớ theo <b>mạng liên kết</b> chứ không theo danh sách. Chạm vào từ để nghe. Mẹo: chụp màn hình làm hình nền điện thoại!</p>
      <svg class="mm" viewBox="0 0 ${W0} ${H0}">${svg}</svg></div>`, { back: "#/" });
  }

  /* ---------- Từ điển ---------- */
  function viewDict() {
    shell("Từ điển của khóa học", `<input type="text" id="q" placeholder="Tìm: chữ Hán, pinyin, tiếng Việt, English, Hán Việt…"><div id="res"></div>`);
    const norm = s => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d").replace(/\s+/g, "");
    const all = [...ALLWORDS.values()];
    const run = () => {
      const q = norm($("#q").value);
      const list = q ? all.filter(w => [w.h, w.p, w.vi, w.en, w.hv].some(f => norm(f).includes(q))) : all;
      $("#res").innerHTML = `<p class="small muted">${list.length} từ</p>` + list.slice(0, 80).map(w => `<div class="small muted" style="margin:10px 0 -8px"><a href="#/bai/${w.lesson}">Bài ${w.lesson}</a></div>` + wordCard(w)).join("") + (list.length > 80 ? `<p class="small muted">… gõ để lọc thêm</p>` : "");
    };
    $("#q").oninput = run; run();
  }

  /* ---------- Phương pháp & cài đặt ---------- */
  function viewMethod() {
    shell("Phương pháp học", `
      <div class="card hero"><h3>App này được thiết kế thế nào?</h3>
      <p class="small">Kết hợp những gì nghiên cứu về trí nhớ đã chứng minh hiệu quả với các kỹ thuật trong sách <i>Tôi Tài Giỏi, Bạn Cũng Thế!</i> (Adam Khoo), cắt gọn cho người đi làm bận rộn.</p></div>
      <div class="card method"><ol>
        <li><b>🎯 Mục tiêu & lý do (Adam Khoo)</b> — bạn viết lý do học ngay khi mở app; nó hiện trên trang chủ mỗi ngày để giữ động lực.</li>
        <li><b>🔗 Liên tưởng + Hán Việt</b> — mỗi từ có âm Hán Việt (学生 = học sinh) để nối từ mới vào thứ não đã biết. Đây là “tuyệt chiêu” riêng của người Việt.</li>
        <li><b>🖼️ Hình dung & câu chuyện hài hước</b> — mẹo nhớ tách chữ thành bộ thủ rồi kể chuyện (好 = phụ nữ + con = tốt). Adam Khoo: hình ảnh càng phi lý, phóng đại, buồn cười thì càng khó quên.</li>
        <li><b>🎨 Tô màu thanh điệu</b> — mỗi thanh một màu để mắt nhớ giúp tai.</li>
        <li><b>🧠 Sơ đồ tư duy</b> — mỗi chủ đề là một mind map: chủ đề → bài → từ.</li>
        <li><b>👀👂✋ Học bằng 3 giác quan (V-A-K)</b> — nhìn chữ, nghe giọng đọc, tự tay viết.</li>
        <li><b>🔁 Ôn tập ngắt quãng (SRS)</b> — thẻ nhớ tự lên lịch ôn sau 1 → 3 → 7 → 14 → 30+ ngày. Nghiên cứu cho thấy ôn giãn cách + tự kiểm tra (gợi nhớ chủ động) hiệu quả hơn nhiều so với đọc đi đọc lại.</li>
        <li><b>🎯 Kiểm tra ngay</b> — mỗi bài kết thúc bằng bài kiểm tra 4 dạng (nhìn chữ, nghe, pinyin, sắp xếp câu). Đạt 70% mới mở “đã xong”.</li>
        <li><b>👩‍🏫 Dạy lại người khác</b> — cuối bài gợi ý giảng lại 3 từ cho ai đó.</li>
        <li><b>🎁 Tự thưởng & chuỗi ngày 🔥</b> — liên kết việc học với cảm xúc vui, giữ thói quen 10–15 phút mỗi ngày.</li>
      </ol>
      <p class="small muted">Lộ trình: Ngữ âm & Chữ Hán → 7 chủ đề / 26 bài (Trường học & công sở, Mua sắm, Gia đình, Thời tiết, Kỳ nghỉ, Sức khỏe, Sống & học ở Trung Quốc). Ngữ pháp bám theo các điểm HSK1–3: 是, 吗, 的, 在, 有, lượng từ, 了, 过, 比, 得, 把… Bản này có ~${ALLWORDS.size} từ cốt lõi; có thể mở rộng lên khung ~800 từ.</p></div>
      <div class="card"><h3>⚙️ Cài đặt</h3>
        <div class="switch"><span>Hiện nghĩa tiếng Anh</span><input type="checkbox" id="en" ${profile.en ? "checked" : ""}></div>
        <div class="switch"><span>Mục tiêu mỗi ngày</span><select id="goal" style="width:auto">${[10, 15, 30].map(g => `<option ${profile.goal === g ? "selected" : ""} value="${g}">${g} phút</option>`).join("")}</select></div>
        <p class="small">Lý do học của bạn:</p><textarea id="reason" rows="2">${esc(profile.reason)}</textarea>
        <div class="row" style="margin-top:10px"><button class="btn" id="sv">Lưu</button><button class="btn ghost" id="test">🔊 Thử giọng đọc</button><button class="btn ghost" id="rs">Xóa tiến độ</button></div>
        <p class="small muted">Giọng đọc dùng sẵn trong máy. Nếu không nghe được, hãy cài giọng “Chinese (China)” trong cài đặt Ngôn ngữ / Text-to-speech của điện thoại. Dữ liệu học lưu ngay trên máy này.</p>
      </div>`);
    $("#sv").onclick = () => { profile.en = $("#en").checked; profile.goal = +$("#goal").value; profile.reason = $("#reason").value.trim(); save(); toast("Đã lưu ✔"); };
    $("#test").onclick = () => say("你好！欢迎学习汉语。");
    $("#rs").onclick = e => {
      const b = e.currentTarget;
      if (!b.dataset.sure) { b.dataset.sure = 1; b.textContent = "Bấm lần nữa để xóa hết"; b.style.background = "#ffcdd2"; return; }
      progress = {}; srs = {}; streak = { last: "", n: 0, days: 0 }; save(); toast("Đã xóa tiến độ."); viewMethod();
    };
  }

  /* ---------- Điều hướng ---------- */
  function route() {
    const parts = (location.hash.replace(/^#\/?/, "").split("?")[0] || "").split("/");
    switch (parts[0]) {
      case "": return viewHome();
      case "ngu-am": return viewBasics(parts[1]);
      case "bai": return viewLesson(parts[1], parts[2]);
      case "on-tap": return viewReview();
      case "so-do": return viewMindmap(parts[1]);
      case "tu-dien": return viewDict();
      case "phuong-phap": return viewMethod();
      default: return viewHome();
    }
  }
  document.addEventListener("click", e => {
    const s = e.target.closest("[data-say]"); if (s) { e.stopPropagation(); say(s.dataset.say); return; }
    const g = e.target.closest("[data-go]"); if (g) { location.hash = g.dataset.go; }
  }, true);
  window.addEventListener("hashchange", route);
  route();

  if ("serviceWorker" in navigator && location.protocol === "https:") {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
})();
