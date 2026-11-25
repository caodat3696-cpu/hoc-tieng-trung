/* Phần Ngữ âm & Chữ Hán (học trước Unit 1) */
window.BASICS = {
  tones: [
    { n: 1, mark: "ā", name: "Thanh 1 – ngang cao", vi: "Giống thanh NGANG của tiếng Việt nhưng giọng cao và kéo dài, như bác sĩ bảo “Há miệng ra, nói Aaaa”.", ex: ["妈", "mā", "mẹ"], color: "t1", fun: "🎵 Hát nốt cao rồi giữ hơi." },
    { n: 2, mark: "á", name: "Thanh 2 – đi lên", vi: "Giống thanh SẮC: giọng đi lên như khi hỏi lại ngạc nhiên “Hả?!”.", ex: ["麻", "má", "cây gai"], color: "t2", fun: "🤨 Như khi nghe sếp bảo “Tối nay tăng ca nhé” – “Há?”" },
    { n: 3, mark: "ǎ", name: "Thanh 3 – xuống rồi lên", vi: "Gần thanh HỎI: hạ giọng xuống thấp rồi nâng nhẹ lên. Khi nói nhanh, thường chỉ đọc nửa đầu (xuống thấp).", ex: ["马", "mǎ", "ngựa"], color: "t3", fun: "🤔 Như khi nghi ngờ “Ừ… hửm?”" },
    { n: 4, mark: "à", name: "Thanh 4 – rơi mạnh", vi: "Giống thanh HUYỀN nhưng dứt khoát, mạnh như ra lệnh “Đi!”, “Không!”.", ex: ["骂", "mà", "mắng"], color: "t4", fun: "😠 Như khi quát con mèo ăn vụng: “Mà!”" },
    { n: 0, mark: "a", name: "Thanh nhẹ", vi: "Đọc nhẹ và ngắn, không dấu. Thường ở chữ thứ hai: 妈妈 māma, 吗 ma.", ex: ["吗", "ma", "(trợ từ hỏi)"], color: "t0", fun: "🪶 Nhẹ như lông hồng." }
  ],
  toneStory: "Câu thần chú luyện thanh: 妈妈骂马吗？(Māma mà mǎ ma? – Mẹ mắng con ngựa à?). Đọc to 10 lần mỗi sáng trước khi đi làm!",
  initials: [
    ["b", "p (không bật hơi), như “b” nhẹ", "爸 bà"], ["p", "p bật hơi mạnh (đặt tờ giấy trước miệng, giấy phải bay)", "跑 pǎo"],
    ["m", "m", "妈 mā"], ["f", "ph", "饭 fàn"],
    ["d", "t (không bật hơi)", "大 dà"], ["t", "th bật hơi", "他 tā"],
    ["n", "n", "你 nǐ"], ["l", "l", "老 lǎo"],
    ["g", "c/k (không bật hơi)", "哥 gē"], ["k", "kh bật hơi", "看 kàn"], ["h", "h, hơi khàn như “kh”", "好 hǎo"],
    ["j", "ch (lưỡi phẳng, miệng cười)", "家 jiā"], ["q", "ch bật hơi", "去 qù"], ["x", "x (miệng cười)", "谢 xiè"],
    ["zh", "tr (uốn lưỡi)", "中 zhōng"], ["ch", "tr bật hơi, uốn lưỡi", "茶 chá"], ["sh", "s uốn lưỡi", "是 shì"], ["r", "r uốn lưỡi, gần “gi”", "人 rén"],
    ["z", "ch đầu lưỡi thẳng (giống “ts”)", "再 zài"], ["c", "ts bật hơi mạnh", "菜 cài"], ["s", "x", "三 sān"],
    ["y", "d/gi nhẹ", "也 yě"], ["w", "u", "我 wǒ"]
  ],
  finals: [
    ["a", "a"], ["o", "ua (môi tròn)"], ["e", "ưa (lưỡi lùi sau)"], ["i", "i (sau z/c/s/zh/ch/sh/r đọc như “ư”)"], ["u", "u"], ["ü", "uy (môi tròn, lưỡi như “i”)"],
    ["ai", "ai"], ["ei", "ây"], ["ao", "ao"], ["ou", "âu"],
    ["an", "an"], ["en", "ân"], ["ang", "ang"], ["eng", "âng"], ["ong", "ung"],
    ["ia", "i-a"], ["ie", "i-ê"], ["iao", "i-ao"], ["iu", "i-âu"], ["ian", "i-en"], ["in", "in"], ["iang", "i-ang"], ["ing", "inh"],
    ["ua", "oa"], ["uo", "ua"], ["uai", "oai"], ["ui", "uây"], ["uan", "oan"], ["un", "uân"], ["uang", "oang"],
    ["üe", "uy-ê"], ["üan", "uy-en"], ["ün", "uyn"]
  ],
  traps: [
    "j, q, x đi với u thì u thực chất là ü: 去 qù đọc “chuy” chứ không phải “chu”.",
    "zi, ci, si, zhi, chi, shi, ri: chữ i đọc như “ư”. 是 shì ≈ “sư”, 字 zì ≈ “chư”.",
    "p, t, k, q, ch, c là phụ âm BẬT HƠI. Luyện bằng cách đặt tay trước miệng: phải cảm thấy luồng hơi.",
    "e đọc là “ưa”, không phải “e”: 喝 hē ≈ “hưa”, 哥 gē ≈ “cưa”."
  ],
  sandhi: [
    { t: "Hai thanh 3 đứng liền nhau", e: "Thanh 3 đầu tiên đọc thành thanh 2.", x: "你好 nǐ hǎo → đọc ní hǎo" },
    { t: "不 bù", e: "Trước thanh 4 thì 不 đọc thành bú.", x: "不是 bù shì → bú shì" },
    { t: "一 yī", e: "Trước thanh 4 đọc yí; trước thanh 1, 2, 3 đọc yì.", x: "一个 yí ge · 一天 yì tiān" }
  ],
  numbers: [
    ["一", "yī", "1", "Một nét ngang"], ["二", "èr", "2", "Hai nét"], ["三", "sān", "3", "Ba nét"], ["四", "sì", "4", "Đồng âm với 死 (chết) — số kiêng của người Trung!"],
    ["五", "wǔ", "5", "Đọc “ủ”"], ["六", "liù", "6", "Đọc “liêu” — số may mắn (顺利, thuận lợi)"], ["七", "qī", "7", "Đọc “chi”"],
    ["八", "bā", "8", "Gần âm 发 (phát tài) — số đẹp nhất!"], ["九", "jiǔ", "9", "Đồng âm 久 (lâu dài)"], ["十", "shí", "10", "Hình dấu cộng +"]
  ],
  strokes: [
    ["一", "Ngang (横 héng)", "Từ trái sang phải"], ["丨", "Sổ (竖 shù)", "Từ trên xuống dưới"], ["丿", "Phẩy (撇 piě)", "Cong sang trái xuống"],
    ["㇏", "Mác (捺 nà)", "Kéo xuống phải"], ["丶", "Chấm (点 diǎn)", "Chấm nhỏ"], ["㇀", "Hất (提 tí)", "Hất lên phải"],
    ["𠃌", "Gập (折 zhé)", "Ngang rồi gập xuống"], ["亅", "Móc (钩 gōu)", "Sổ rồi móc"]
  ],
  rules: [
    ["Ngang trước, sổ sau", "十"], ["Phẩy trước, mác sau", "人"], ["Trên trước, dưới sau", "三"], ["Trái trước, phải sau", "你"],
    ["Ngoài trước, trong sau", "月"], ["Vào nhà trước, đóng cửa sau", "国"], ["Giữa trước, hai bên sau", "小"]
  ],
  radicals: [
    ["亻", "nhân đứng", "người", "你 他 们 休", "Thấy 亻là biết chữ liên quan đến con người."],
    ["女", "nữ", "phụ nữ", "好 妈 她 姐", "Người phụ nữ khoanh tay ngồi."],
    ["口", "khẩu", "miệng", "吃 喝 叫 吗", "Cái miệng hình vuông — ăn, uống, nói, hỏi."],
    ["氵", "ba chấm thủy", "nước", "没 游 泳 酒", "Ba giọt nước nhỏ."],
    ["扌", "tài gảy", "tay", "打 找 拍 抽", "Bàn tay làm việc."],
    ["讠", "ngôn", "lời nói", "说 谢 请 认", "Liên quan đến nói năng."],
    ["木", "mộc", "cây, gỗ", "桌 本 休 果", "Cái cây có cành và rễ."],
    ["日", "nhật", "mặt trời, ngày", "明 早 晴 是", "Mặt trời vuông (vì xưa khắc trên xương khó khắc tròn)."],
    ["月", "nguyệt / nhục", "trăng; thịt", "朋 胖 脑 有", "Bên trái chữ thường là “thịt” (bộ phận cơ thể)."],
    ["心 / 忄", "tâm", "trái tim", "想 您 懂 慢", "Cảm xúc, suy nghĩ."],
    ["艹", "thảo", "cỏ", "茶 菜 药 苹", "Hai cây cỏ mọc trên đầu."],
    ["钅", "kim", "kim loại", "钱 锻 铁", "Tiền và đồ kim loại."],
    ["饣", "thực", "ăn", "饭 饿 饱 馆", "Liên quan đến ăn uống."],
    ["宀", "miên", "mái nhà", "家 室 字", "Cái mái nhà che trên đầu."],
    ["辶", "sước", "bước đi", "这 进 送 远 近", "Con đường uốn lượn — chuyển động."],
    ["疒", "nạch", "bệnh", "病 疼 瘦", "Cái giường bệnh dựa vào tường."]
  ],
  hanviet: "Lợi thế lớn của người Việt: rất nhiều từ tiếng Trung có âm Hán Việt quen thuộc — 学生 học sinh, 公司 công ty, 电影 điện ảnh, 检查 kiểm tra. Trong app, mỗi từ đều có dòng “Hán Việt” để bạn nối từ mới vào từ đã biết."
};
