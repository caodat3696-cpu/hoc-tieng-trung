/* Nội dung khóa học: 7 chủ đề, 26 bài.
 * Từ vựng: [chữ Hán, pinyin (cách nhau theo âm tiết), Hán Việt, nghĩa Việt, nghĩa Anh, mẹo nhớ]
 * Ngữ pháp: { t: tên, f: công thức, e: giải thích, x: [[câu (| tách từ), pinyin, nghĩa]] }
 * Hội thoại: [[người nói, câu, pinyin, nghĩa]]
 */
window.UNITS = [
{
  id: 1, name: "Trường học & Công sở", zh: "学校", color: "#e53935", emoji: "🏫",
  lessons: [
  {
    id: 1, title: "Chào hỏi (1)", zh: "你好！", emoji: "👋",
    goal: "Chào hỏi, nói mình là ai, hỏi câu có/không với 吗.",
    words: [
      ["你", "nǐ", "nhĩ", "bạn, anh, chị", "you", "亻(người) + 尔: “người đứng trước mặt tôi” chính là BẠN."],
      ["好", "hǎo", "hảo", "tốt, khỏe, hay", "good", "女 (phụ nữ) + 子 (con): mẹ ôm con = quá TỐT rồi! Hảo hảo!"],
      ["您", "nín", "nâm", "ngài, ông, bà (lịch sự)", "you (polite)", "你 + 心 (trái tim) ở dưới: gọi “bạn” bằng cả trái tim = kính trọng. Dùng với sếp!"],
      ["我", "wǒ", "ngã", "tôi", "I, me", "Hán Việt “ngã” như “bản ngã”: cái TÔI to đùng, tay (手) cầm giáo (戈) để bảo vệ cái tôi."],
      ["是", "shì", "thị", "là", "to be", "日 mặt trời trên đầu + 正 ngay thẳng: giữa ban ngày ban mặt thì cái gì cũng phải nói thật “LÀ”."],
      ["老师", "lǎo shī", "lão sư", "thầy, cô giáo", "teacher", "“Lão sư”: giáo viên 22 tuổi cũng bị gọi là “lão”. Nghề giáo già nhanh vậy đó 😅"],
      ["学生", "xué sheng", "học sinh", "học sinh, sinh viên", "student", "Hán Việt y chang: HỌC SINH. Tiếng Trung tặng người Việt điểm cộng miễn phí!"],
      ["谢谢", "xiè xie", "tạ", "cảm ơn", "thank you", "Đọc “xia xia” chứ đừng “xì xì” như bánh xe xì hơi. “Tạ ơn” → 谢."],
      ["再见", "zài jiàn", "tái kiến", "tạm biệt", "goodbye", "TÁI KIẾN = gặp lại lần nữa. Nói “zài jiàn” rồi vẫy tay như diễn viên phim chưởng."],
      ["不", "bù", "bất", "không", "not, no", "BẤT như “bất ngờ”, “bất ổn”. Một nét ngang chặn trên đầu: KHÔNG cho mọc lên!"],
      ["吗", "ma", "ma", "… không? (trợ từ hỏi)", "question particle", "口 (cái miệng) + 马 (con ngựa): miệng hỏi con ngựa “Mày ăn cỏ chưa MA?”"]
    ],
    grammar: [
      { t: "Câu chữ 是", f: "A + 是 + B", e: "Dùng để nói A LÀ B. Phủ định: thêm 不 trước 是 (不是). Tiếng Trung KHÔNG chia động từ, không thì, không số nhiều — dễ hơn tiếng Anh nhiều!",
        x: [["我|是|学生。", "Wǒ shì xuésheng.", "Tôi là học sinh."], ["他|不|是|老师。", "Tā bú shì lǎoshī.", "Anh ấy không phải giáo viên."]] },
      { t: "Câu hỏi với 吗", f: "Câu trần thuật + 吗？", e: "Muốn hỏi có/không, chỉ cần gắn 吗 vào cuối câu. Không đảo trật tự từ như tiếng Anh.",
        x: [["你|是|老师|吗？", "Nǐ shì lǎoshī ma?", "Bạn là giáo viên à?"], ["你|好|吗？", "Nǐ hǎo ma?", "Bạn khỏe không?"]] },
      { t: "Câu hỏi chính phản", f: "V/Adj + 不 + V/Adj", e: "Một cách hỏi khác: ghép khẳng định và phủ định. 是不是 = phải không.",
        x: [["你|是不是|学生？", "Nǐ shì bu shì xuésheng?", "Bạn có phải học sinh không?"]] }
    ],
    dialogue: [
      ["A", "你好！", "Nǐ hǎo!", "Chào bạn!"],
      ["B", "您好！您是老师吗？", "Nín hǎo! Nín shì lǎoshī ma?", "Chào thầy! Thầy là giáo viên ạ?"],
      ["A", "是，我是老师。你是学生吗？", "Shì, wǒ shì lǎoshī. Nǐ shì xuésheng ma?", "Đúng, tôi là giáo viên. Em là học sinh à?"],
      ["B", "是。谢谢老师！再见！", "Shì. Xièxie lǎoshī! Zàijiàn!", "Vâng. Cảm ơn thầy! Tạm biệt!"]
    ],
    fun: "Mẹo đi làm: gặp sếp người Trung, nói 您好 (nín hǎo) thay vì 你好 — điểm lịch sự +100, lương chưa chắc tăng nhưng thiện cảm thì chắc chắn."
  },
  {
    id: 2, title: "Chào hỏi (2)", zh: "你叫什么名字？", emoji: "🌏",
    goal: "Hỏi tên, quốc tịch; dùng 什么, 也, 呢, 们.",
    words: [
      ["叫", "jiào", "khiếu", "gọi, tên là", "to be called", "口 cái miệng đang KÊU gọi tên ai đó. “Khiếu” như “kêu”."],
      ["名字", "míng zi", "danh tự", "tên", "name", "DANH TỰ = chữ của danh tính. 名 có 口: tối trời (夕) phải dùng miệng gọi TÊN mới biết ai."],
      ["什么", "shén me", "thập ma", "cái gì", "what", "Đọc nhanh như “sẩn mơ”: “Sẩn mơ? Cái gì cơ?” — ngơ ngác như vừa ngủ dậy."],
      ["国", "guó", "quốc", "nước, quốc gia", "country", "Khung 囗 là biên giới, bên trong có 玉 ngọc: một QUỐC GIA giữ ngọc quý trong biên giới."],
      ["人", "rén", "nhân", "người", "person", "Hình người đang dạng chân bước đi. Hai nét — đơn giản như cuộc đời người đi làm: đi và về."],
      ["中国", "Zhōng guó", "Trung Quốc", "Trung Quốc", "China", "中 = mũi tên xuyên giữa tâm: “nước ở TRUNG tâm”."],
      ["越南", "Yuè nán", "Việt Nam", "Việt Nam", "Vietnam", "Hán Việt chính là VIỆT NAM. 越 còn nghĩa là “vượt qua” — người Việt vượt mọi khó khăn!"],
      ["美国", "Měi guó", "Mỹ quốc", "nước Mỹ", "USA", "美 = đẹp. Người Trung gọi Mỹ là “nước đẹp”."],
      ["也", "yě", "dã", "cũng", "also, too", "Đọc “dể”: “Tôi CŨNG dể thương” 😄"],
      ["呢", "ne", "nê", "… thì sao? (hỏi ngược)", "and you? (particle)", "Như “nè?” trong tiếng Việt: “Tôi khỏe, còn bạn NÈ?”"],
      ["他 / 她", "tā", "tha", "anh ấy / cô ấy", "he / she", "Cùng đọc tā. 亻 = đàn ông, 女 = phụ nữ. Nói thì khỏi lo giới tính, viết mới phải chọn!"],
      ["们", "men", "môn", "các, những (số nhiều)", "plural suffix", "亻+ 门 (cửa): người đứng chật cửa = NHIỀU người. 我们 chúng tôi, 你们 các bạn."]
    ],
    grammar: [
      { t: "Đại từ nghi vấn 什么", f: "S + V + 什么？", e: "什么 đứng đúng vị trí của thứ bạn muốn hỏi. Không đưa lên đầu câu như “What” trong tiếng Anh.",
        x: [["你|叫|什么|名字？", "Nǐ jiào shénme míngzi?", "Bạn tên là gì?"], ["这|是|什么？", "Zhè shì shénme?", "Đây là cái gì?"]] },
      { t: "Phó từ 也", f: "S + 也 + V", e: "也 (cũng) luôn đứng SAU chủ ngữ, TRƯỚC động từ. Không bao giờ đứng cuối câu như “too”.",
        x: [["我|也|是|越南人。", "Wǒ yě shì Yuènánrén.", "Tôi cũng là người Việt Nam."]] },
      { t: "Trợ từ 呢 hỏi ngược", f: "Danh từ/đại từ + 呢？", e: "Hỏi lại cùng câu hỏi trước đó, rất ngắn gọn.",
        x: [["我|很|好，|你|呢？", "Wǒ hěn hǎo, nǐ ne?", "Tôi khỏe, còn bạn?"]] }
    ],
    dialogue: [
      ["A", "你叫什么名字？", "Nǐ jiào shénme míngzi?", "Bạn tên là gì?"],
      ["B", "我叫阿明。你呢？", "Wǒ jiào Ā Míng. Nǐ ne?", "Tôi tên A Minh. Còn bạn?"],
      ["A", "我叫王兰。你是哪国人？", "Wǒ jiào Wáng Lán. Nǐ shì nǎ guó rén?", "Tôi tên Vương Lan. Bạn là người nước nào?"],
      ["B", "我是越南人。", "Wǒ shì Yuènánrén.", "Tôi là người Việt Nam."],
      ["A", "我也是越南人！", "Wǒ yě shì Yuènánrén!", "Tôi cũng là người Việt Nam!"]
    ],
    fun: "Tên tiếng Trung cho bạn: thêm 阿 (Ā) trước tên là xong — 阿明, 阿兰, 阿Hùng... nghe thân thiện như “anh Minh, chị Lan”."
  },
  {
    id: 3, title: "Kết bạn", zh: "认识你很高兴", emoji: "🤝",
    goal: "Giới thiệu bạn bè, đồng nghiệp; dùng 这/那, 谁, 的.",
    words: [
      ["这", "zhè", "giá", "này, đây", "this", "Đọc “chưa”: “Cái NÀY chưa?”. Gần mình thì dùng 这."],
      ["那", "nà", "na", "kia, đó", "that", "Đọc “na”: “Quả na đằng KIA”. Xa mình thì dùng 那."],
      ["谁", "shéi", "thùy", "ai", "who", "Đọc “sấy”: “AI sấy tóc trong phòng họp đấy?!”"],
      ["的", "de", "đích", "của", "'s (possessive)", "Như dấu ’s trong tiếng Anh: 我的 = my, 你的 = your. Xuất hiện nhiều nhất tiếng Trung!"],
      ["朋友", "péng you", "bằng hữu", "bạn bè", "friend", "BẰNG HỮU. 朋 = hai mặt trăng 月 đứng cạnh nhau: hai người sáng cùng nhau là bạn."],
      ["同事", "tóng shì", "đồng sự", "đồng nghiệp", "colleague", "ĐỒNG SỰ = cùng làm việc. Cũng là người cùng bạn chờ thang máy lúc 8h59."],
      ["书", "shū", "thư", "sách", "book", "Đọc “su”: cuốn SÁCH su su bìa mềm. Hán Việt “thư” như “thư viện”."],
      ["认识", "rèn shi", "nhận thức", "quen biết", "to know (someone)", "NHẬN THỨC được ai đó = quen biết họ."],
      ["很", "hěn", "ngận", "rất", "very", "Trước tính từ gần như luôn có 很, kể cả khi chẳng “rất” lắm: 我很好 = tôi ổn."],
      ["高兴", "gāo xìng", "cao hứng", "vui vẻ", "happy", "CAO HỨNG = hứng khởi cao. Hán Việt giúp nhớ ngay!"],
      ["公司", "gōng sī", "công ty", "công ty", "company", "Hán Việt: CÔNG TY (公司 = công tư). Gần như giống hệt!"]
    ],
    grammar: [
      { t: "Trợ từ 的 (sở hữu)", f: "Người/vật + 的 + Danh từ", e: "Ngược tiếng Việt: “sách CỦA tôi” → 我的书 (tôi-của-sách). Với người thân, bạn bè thân có thể bỏ 的: 我朋友, 我妈妈.",
        x: [["这|是|我|的|书。", "Zhè shì wǒ de shū.", "Đây là sách của tôi."], ["那|是|我|朋友。", "Nà shì wǒ péngyou.", "Kia là bạn tôi."]] },
      { t: "Đại từ nghi vấn 谁", f: "… 是 谁？", e: "Hỏi người. Giống 什么, đặt đúng vị trí cần hỏi.",
        x: [["他|是|谁？", "Tā shì shéi?", "Anh ấy là ai?"], ["这|是|谁|的|书？", "Zhè shì shéi de shū?", "Đây là sách của ai?"]] }
    ],
    dialogue: [
      ["A", "这是谁？", "Zhè shì shéi?", "Đây là ai?"],
      ["B", "这是我的同事，他叫大卫。", "Zhè shì wǒ de tóngshì, tā jiào Dàwèi.", "Đây là đồng nghiệp tôi, anh ấy tên David."],
      ["C", "你好！认识你很高兴。", "Nǐ hǎo! Rènshi nǐ hěn gāoxìng.", "Chào bạn! Rất vui được quen bạn."],
      ["A", "认识你我也很高兴！", "Rènshi nǐ wǒ yě hěn gāoxìng!", "Quen bạn tôi cũng rất vui!"]
    ],
    fun: "Mẹo thần thánh cho người Việt: khoảng 60–70% từ vựng có âm Hán Việt. Thấy từ mới, đoán Hán Việt trước — 公司 công ty, 同事 đồng sự, 认识 nhận thức."
  },
  {
    id: 4, title: "Địa điểm", zh: "你在哪儿？", emoji: "📍",
    goal: "Hỏi và nói vị trí: 在, 哪儿, từ chỉ phương hướng.",
    words: [
      ["在", "zài", "tại", "ở, tại", "at, in", "TẠI = ở. “Tôi TẠI văn phòng” = 我在办公室."],
      ["哪儿", "nǎr", "na nhi", "ở đâu", "where", "哪 có 口 = miệng hỏi “NA-R? Đâu rồi?” — âm “r” cuốn lưỡi kiểu Bắc Kinh."],
      ["这儿", "zhèr", "giá nhi", "ở đây", "here", "这 (này) + 儿 = chỗ này."],
      ["那儿", "nàr", "na nhi", "ở đó", "there", "那 (kia) + 儿 = chỗ kia."],
      ["家", "jiā", "gia", "nhà", "home, family", "宀 mái nhà + 豕 con lợn: thời xưa, có lợn dưới mái = có NHÀ. Nhà ai cũng có “ông heo đất” 🐷"],
      ["办公室", "bàn gōng shì", "biện công thất", "văn phòng", "office", "BIỆN CÔNG THẤT = phòng làm việc công. Nơi máy lạnh luôn quá lạnh."],
      ["图书馆", "tú shū guǎn", "đồ thư quán", "thư viện", "library", "图 tranh + 书 sách + 馆 quán = quán của sách và tranh."],
      ["前边", "qián bian", "tiền biên", "phía trước", "in front", "TIỀN = trước (như “tiền đạo”)."],
      ["后边", "hòu bian", "hậu biên", "phía sau", "behind", "HẬU = sau (như “hậu vệ”)."],
      ["旁边", "páng biān", "bàng biên", "bên cạnh", "beside", "BÀNG như “bàng quan” — đứng bên cạnh nhìn."],
      ["里", "lǐ", "lý", "trong", "inside", "Hình ô ruộng 田 trên đất 土: ở TRONG làng."],
      ["去", "qù", "khứ", "đi (đến)", "to go", "QUÁ KHỨ = đã ĐI qua. Đọc “chuy”: “Chuy! Đi thôi!”"]
    ],
    grammar: [
      { t: "在 + nơi chốn", f: "S + 在 + Nơi chốn", e: "在 đóng vai động từ “ở”. Hỏi: S + 在 + 哪儿？",
        x: [["你|在|哪儿？", "Nǐ zài nǎr?", "Bạn ở đâu?"], ["我|在|办公室。", "Wǒ zài bàngōngshì.", "Tôi ở văn phòng."]] },
      { t: "Từ phương vị", f: "Nơi chốn + 前边 / 后边 / 旁边 / 里", e: "Ngược tiếng Việt: “phía trước công ty” → 公司前边 (công ty - phía trước).",
        x: [["图书馆|在|公司|旁边。", "Túshūguǎn zài gōngsī pángbiān.", "Thư viện ở bên cạnh công ty."]] }
    ],
    dialogue: [
      ["A", "喂，你在哪儿？", "Wéi, nǐ zài nǎr?", "Alo, bạn ở đâu đấy?"],
      ["B", "我在公司。你呢？", "Wǒ zài gōngsī. Nǐ ne?", "Tôi ở công ty. Còn bạn?"],
      ["A", "我在公司前边的咖啡店。", "Wǒ zài gōngsī qiánbian de kāfēidiàn.", "Tôi ở quán cà phê trước công ty."],
      ["B", "好，我去那儿！", "Hǎo, wǒ qù nàr!", "Được, tôi tới đó!"]
    ],
    fun: "Người đi làm nào cũng cần câu này: 我在路上 (wǒ zài lùshang) = “Em đang trên đường rồi!” — dù thực ra vẫn đang đánh răng."
  },
  {
    id: 5, title: "Thời gian", zh: "现在几点？", emoji: "⏰",
    goal: "Hỏi giờ, nói lịch làm việc; trạng ngữ thời gian đứng trước động từ.",
    words: [
      ["现在", "xiàn zài", "hiện tại", "bây giờ", "now", "HIỆN TẠI. Dễ như ăn kẹo."],
      ["点", "diǎn", "điểm", "giờ", "o'clock", "Điểm trên mặt đồng hồ. 八点 = 8 giờ."],
      ["分", "fēn", "phân", "phút", "minute", "Phân chia giờ thành PHÚT. 刀 con dao cắt 八 làm đôi."],
      ["半", "bàn", "bán", "rưỡi, một nửa", "half", "BÁN như “bán cầu”, “bán kết” = một nửa."],
      ["几", "jǐ", "kỉ", "mấy", "how many (small)", "Hỏi số nhỏ (dưới 10). Như cái ghế đẩu nhỏ: “Mấy cái ghế?”"],
      ["今天", "jīn tiān", "kim thiên", "hôm nay", "today", "KIM = nay (như “kim cổ”), THIÊN = ngày/trời."],
      ["明天", "míng tiān", "minh thiên", "ngày mai", "tomorrow", "明 = 日 + 月: mặt trời và mặt trăng → sáng mai sẽ tới."],
      ["昨天", "zuó tiān", "tạc thiên", "hôm qua", "yesterday", "Đọc “chúa thiên”: hôm qua chúa nhật? 😄"],
      ["上班", "shàng bān", "thượng ban", "đi làm", "go to work", "上 = lên: LÊN ca làm việc."],
      ["下班", "xià bān", "hạ ban", "tan làm", "get off work", "下 = xuống: XUỐNG ca. Từ được yêu thích nhất của dân văn phòng!"],
      ["早上", "zǎo shang", "tảo thượng", "buổi sáng", "morning", "早 = mặt trời 日 mọc trên ngọn cây 十. Đọc “chảo”: sáng sớm chiên trứng bằng chảo."],
      ["晚上", "wǎn shang", "vãn thượng", "buổi tối", "evening", "VÃN như “vãn hội” = cuối, muộn."]
    ],
    grammar: [
      { t: "Hỏi giờ", f: "现在 + 几点？", e: "Trả lời: số + 点 + số + 分. 8:30 = 八点半 hoặc 八点三十分.",
        x: [["现在|几点？", "Xiànzài jǐ diǎn?", "Bây giờ mấy giờ?"], ["现在|八点|半。", "Xiànzài bā diǎn bàn.", "Bây giờ 8 giờ rưỡi."]] },
      { t: "Vị trí trạng ngữ thời gian", f: "S + Thời gian + V  /  Thời gian + S + V", e: "Thời gian luôn đứng TRƯỚC động từ. KHÔNG được đặt cuối câu như tiếng Việt “Tôi đi làm lúc 8 giờ”.",
        x: [["我|早上|八点|上班。", "Wǒ zǎoshang bā diǎn shàngbān.", "Tôi đi làm lúc 8 giờ sáng."], ["明天|你|几点|下班？", "Míngtiān nǐ jǐ diǎn xiàbān?", "Mai mấy giờ bạn tan làm?"]] }
    ],
    dialogue: [
      ["A", "现在几点？", "Xiànzài jǐ diǎn?", "Bây giờ mấy giờ?"],
      ["B", "五点五十分。", "Wǔ diǎn wǔshí fēn.", "5 giờ 50."],
      ["A", "太好了！我六点下班。", "Tài hǎo le! Wǒ liù diǎn xiàbān.", "Tuyệt! Tôi 6 giờ tan làm."],
      ["B", "我晚上九点下班……", "Wǒ wǎnshang jiǔ diǎn xiàbān……", "Tôi 9 giờ tối mới tan làm…"]
    ],
    fun: "Số đếm 1–10 bằng tay kiểu Trung Quốc: 6 là 🤙, 8 là 👆 kèm ngón cái (hình súng), 10 là bắt chéo hai ngón trỏ ✝️. Đi chợ Trung Quốc rất hay gặp!"
  },
  {
    id: 6, title: "Hỏi đường", zh: "怎么走？", emoji: "🧭",
    goal: "Hỏi đường, chỉ đường: 怎么走, 往…走, 离…远/近.",
    words: [
      ["怎么", "zěn me", "chẩm ma", "thế nào, làm sao", "how", "Đọc “chẩn mơ”: “Làm SAO đây?”"],
      ["走", "zǒu", "tẩu", "đi (bộ)", "to walk, go", "TẨU thoát = chạy đi. Đọc “chẩu”: chẩu thôi!"],
      ["远", "yuǎn", "viễn", "xa", "far", "VIỄN như “viễn thông”, “viễn cảnh” = xa."],
      ["近", "jìn", "cận", "gần", "near", "CẬN như “cận thị” — nhìn gần mới thấy."],
      ["左", "zuǒ", "tả", "trái", "left", "TẢ = trái (“tả hữu”). Có chữ 工 (công) — tay trái cầm thước kẻ."],
      ["右", "yòu", "hữu", "phải", "right", "HỮU = phải. Có 口 (miệng) — tay phải cầm đũa đưa vào miệng."],
      ["往", "wǎng", "vãng", "về phía, hướng", "towards", "Như “vãng lai” = đi về hướng."],
      ["一直", "yì zhí", "nhất trực", "thẳng một mạch", "straight on", "TRỰC = thẳng. Như “trực tiếp”."],
      ["路口", "lù kǒu", "lộ khẩu", "ngã tư, giao lộ", "intersection", "LỘ = đường, KHẨU = cửa: cửa của con đường."],
      ["地铁站", "dì tiě zhàn", "địa thiết trạm", "ga tàu điện ngầm", "subway station", "ĐỊA (đất) + THIẾT (sắt) = đường sắt dưới đất + TRẠM."],
      ["离", "lí", "ly", "cách (khoảng cách)", "away from", "LY như “cự ly”, “ly biệt”."],
      ["到", "dào", "đáo", "đến", "to arrive", "Như “chu đáo”, “đáo hạn”."]
    ],
    grammar: [
      { t: "Hỏi đường", f: "Nơi chốn + 怎么走？", e: "Câu sống còn khi đi du lịch.",
        x: [["地铁站|怎么|走？", "Dìtiězhàn zěnme zǒu?", "Ga tàu điện đi thế nào?"]] },
      { t: "Chỉ hướng", f: "往 + 左/右/前 + 走", e: "Đi về hướng nào. 一直往前走 = cứ đi thẳng.",
        x: [["一直|往前|走，|到|路口|往|左|走。", "Yìzhí wǎng qián zǒu, dào lùkǒu wǎng zuǒ zǒu.", "Đi thẳng, đến ngã tư rẽ trái."]] },
      { t: "Khoảng cách 离", f: "A + 离 + B + (很) 远/近", e: "A cách B xa/gần.",
        x: [["我家|离|公司|很|近。", "Wǒ jiā lí gōngsī hěn jìn.", "Nhà tôi cách công ty rất gần."]] }
    ],
    dialogue: [
      ["A", "请问，地铁站怎么走？", "Qǐngwèn, dìtiězhàn zěnme zǒu?", "Xin hỏi, ga tàu điện đi thế nào?"],
      ["B", "一直往前走，到路口往右走。", "Yìzhí wǎng qián zǒu, dào lùkǒu wǎng yòu zǒu.", "Đi thẳng, đến ngã tư rẽ phải."],
      ["A", "离这儿远吗？", "Lí zhèr yuǎn ma?", "Cách đây có xa không?"],
      ["B", "不远，走五分钟。", "Bù yuǎn, zǒu wǔ fēnzhōng.", "Không xa, đi bộ 5 phút."]
    ],
    fun: "Cảnh báo: người Trung nói “不远” (không xa) có thể là 5 phút… hoặc 50 phút. Hãy hỏi thêm 走几分钟？ (đi bộ mấy phút?)."
  },
  {
    id: 7, title: "Đồ dùng văn phòng", zh: "你有笔吗？", emoji: "✏️",
    goal: "Nói có/không có đồ vật; lượng từ 个, 本, 支; phân biệt 两 và 二.",
    words: [
      ["有", "yǒu", "hữu", "có", "to have", "HỮU như “sở hữu”. Tay 𠂇 cầm miếng thịt 月 = CÓ đồ ăn rồi!"],
      ["没有", "méi yǒu", "một hữu", "không có", "not have", "Phủ định của 有 là 没有, KHÔNG dùng 不有. Nhớ: “có” bị “một” (chìm mất) = không có."],
      ["笔", "bǐ", "bút", "bút", "pen", "⺮ tre + 毛 lông: bút lông làm từ cán tre. Hán Việt BÚT."],
      ["本子", "běn zi", "bản tử", "quyển vở", "notebook", "本 = cây 木 có gạch ở gốc = gốc rễ, cũng là lượng từ cho sách vở."],
      ["电脑", "diàn nǎo", "điện não", "máy tính", "computer", "ĐIỆN NÃO = bộ não chạy bằng điện. Người Trung đặt tên quá hợp lý!"],
      ["手机", "shǒu jī", "thủ cơ", "điện thoại di động", "mobile phone", "THỦ (tay) + CƠ (máy) = máy cầm tay. Thứ bạn đang cầm đọc bài này 📱"],
      ["桌子", "zhuō zi", "trác tử", "cái bàn", "table, desk", "Đọc “chuô chự”. 木 (gỗ) ở dưới: bàn làm bằng gỗ."],
      ["个", "gè", "cá", "cái, chiếc (lượng từ chung)", "general measure word", "Lượng từ “vạn năng”. Không nhớ lượng từ nào thì dùng 个 — đúng 70%!"],
      ["本", "běn", "bản", "quyển (lượng từ)", "measure word for books", "一本书 = một quyển sách."],
      ["支", "zhī", "chi", "cây (lượng từ cho bút)", "measure word for pens", "Cây bút dài như cành cây (chi)."],
      ["两", "liǎng", "lưỡng", "hai (khi đếm cái)", "two (of something)", "LƯỠNG như “lưỡng lự”, “lưỡng tính”. Đếm đồ vật dùng 两, không dùng 二."],
      ["用", "yòng", "dụng", "dùng", "to use", "SỬ DỤNG. Đọc “dung”."]
    ],
    grammar: [
      { t: "Câu chữ 有", f: "S + 有 / 没有 + N", e: "Phủ định của 有 chỉ có MỘT cách: 没有.",
        x: [["你|有|笔|吗？", "Nǐ yǒu bǐ ma?", "Bạn có bút không?"], ["我|没有|电脑。", "Wǒ méiyǒu diànnǎo.", "Tôi không có máy tính."]] },
      { t: "Lượng từ", f: "Số + Lượng từ + Danh từ", e: "Giống tiếng Việt: một CÁI bàn, một QUYỂN sách. Không được nói 一书, phải nói 一本书.",
        x: [["我|有|两|支|笔。", "Wǒ yǒu liǎng zhī bǐ.", "Tôi có hai cây bút."], ["一|个|手机", "yí ge shǒujī", "một chiếc điện thoại"]] }
    ],
    dialogue: [
      ["A", "你有笔吗？", "Nǐ yǒu bǐ ma?", "Bạn có bút không?"],
      ["B", "有，我有两支。", "Yǒu, wǒ yǒu liǎng zhī.", "Có, tôi có hai cây."],
      ["A", "我用一下，可以吗？", "Wǒ yòng yíxià, kěyǐ ma?", "Tôi dùng một chút được không?"],
      ["B", "可以。别忘了还我！", "Kěyǐ. Bié wàng le huán wǒ!", "Được. Đừng quên trả tôi nhé!"]
    ],
    fun: "Văn phòng nào cũng có “hố đen nuốt bút”. Bây giờ bạn đã biết hỏi 我的笔呢？(Bút của tôi đâu rồi?)"
  }
  ]
},
{
  id: 2, name: "Mua sắm", zh: "购物", color: "#d81b60", emoji: "🛍️",
  lessons: [
  {
    id: 8, title: "Mua hoa quả", zh: "多少钱？", emoji: "🍎",
    goal: "Hỏi giá, mặc cả: 多少钱, 太…了, 要.",
    words: [
      ["买", "mǎi", "mãi", "mua", "to buy", "Thanh 3 (xuống-lên). MUA thì tiền đi xuống rồi đồ đi lên tay bạn."],
      ["卖", "mài", "mại", "bán", "to sell", "Như “mua” nhưng có thêm 十 trên đầu: phải có NHIỀU (十) đồ mới đem BÁN. Thanh 4 dứt khoát như rao hàng!"],
      ["水果", "shuǐ guǒ", "thủy quả", "hoa quả", "fruit", "THỦY (nước) + QUẢ = quả mọng nước."],
      ["苹果", "píng guǒ", "bình quả", "táo", "apple", "Cũng là tên hãng điện thoại. Mua 苹果 ở chợ rẻ hơn ở cửa hàng nhiều 😄"],
      ["香蕉", "xiāng jiāo", "hương tiêu", "chuối", "banana", "HƯƠNG = thơm. Quả chuối thơm."],
      ["多少", "duō shao", "đa thiểu", "bao nhiêu", "how many/much", "ĐA (nhiều) + THIỂU (ít) = nhiều hay ít? → bao nhiêu."],
      ["钱", "qián", "tiền", "tiền", "money", "Hán Việt TIỀN! Có bộ 钅(kim loại) — tiền xưa là đồng xu."],
      ["块", "kuài", "khối", "đồng (tệ, khẩu ngữ)", "yuan (colloquial)", "Đọc “khoai”: một đồng = một củ khoai 🍠"],
      ["斤", "jīn", "cân", "cân (= 0,5 kg)", "jin (500g)", "CÂN! Nhưng chú ý: 1 cân Trung = nửa ký thôi."],
      ["贵", "guì", "quý", "đắt", "expensive", "QUÝ = đắt giá. Có 贝 (vỏ sò = tiền xưa)."],
      ["便宜", "pián yi", "tiện nghi", "rẻ", "cheap", "Chữ giống TIỆN NGHI, nhưng đọc pián yi và nghĩa là RẺ. Rẻ thì tiện cho túi tiền!"],
      ["要", "yào", "yếu", "muốn, cần", "to want", "Như “yếu tố”, “quan trọng”. Mua hàng nói 我要… = tôi lấy…"]
    ],
    grammar: [
      { t: "Hỏi giá", f: "N + 多少钱？ / 多少钱 + 一 + lượng từ？", e: "多少钱一斤？ = bao nhiêu tiền một cân?",
        x: [["苹果|多少钱|一斤？", "Píngguǒ duōshao qián yì jīn?", "Táo bao nhiêu tiền một cân?"]] },
      { t: "Cảm thán 太…了", f: "太 + Adj + 了", e: "Quá… rồi! Dùng khi mặc cả cực kỳ hiệu quả.",
        x: [["太|贵|了！", "Tài guì le!", "Đắt quá!"], ["太|好|了！", "Tài hǎo le!", "Tuyệt quá!"]] }
    ],
    dialogue: [
      ["A", "老板，苹果多少钱一斤？", "Lǎobǎn, píngguǒ duōshao qián yì jīn?", "Ông chủ ơi, táo bao nhiêu một cân?"],
      ["B", "十块。", "Shí kuài.", "10 đồng."],
      ["A", "太贵了！八块，可以吗？", "Tài guì le! Bā kuài, kěyǐ ma?", "Đắt quá! 8 đồng được không?"],
      ["B", "好吧。你要几斤？", "Hǎo ba. Nǐ yào jǐ jīn?", "Thôi được. Bạn lấy mấy cân?"],
      ["A", "我要两斤。", "Wǒ yào liǎng jīn.", "Tôi lấy hai cân."]
    ],
    fun: "Ở Trung Quốc, gọi người bán hàng là 老板 (lǎobǎn - ông chủ) để họ vui, dễ bớt giá hơn. Mua 买 thanh 3, bán 卖 thanh 4 — nhầm thanh là từ khách thành chủ đó!"
  },
  {
    id: 9, title: "Mua quần áo", zh: "我可以试试吗？", emoji: "👕",
    goal: "Màu sắc, kích cỡ; 有点儿 vs 一点儿; câu hỏi lựa chọn 还是.",
    words: [
      ["衣服", "yī fu", "y phục", "quần áo", "clothes", "Y PHỤC. Hán Việt lại cứu bạn!"],
      ["件", "jiàn", "kiện", "chiếc (lượng từ áo)", "measure word for clothes", "一件衣服 = một chiếc áo. Như “kiện hàng”."],
      ["颜色", "yán sè", "nhan sắc", "màu sắc", "color", "NHAN SẮC! Ở tiếng Trung nghĩa là màu sắc. Chọn màu đẹp = tăng nhan sắc 💅"],
      ["红色", "hóng sè", "hồng sắc", "màu đỏ", "red", "Chú ý: 红 = ĐỎ, không phải hồng! Màu hồng là 粉色."],
      ["黑色", "hēi sè", "hắc sắc", "màu đen", "black", "HẮC như “hắc ám”."],
      ["白色", "bái sè", "bạch sắc", "màu trắng", "white", "BẠCH như “bạch tuyết”."],
      ["大", "dà", "đại", "to, lớn", "big", "Người dang rộng tay: “Toooo cỡ này!”"],
      ["小", "xiǎo", "tiểu", "nhỏ", "small", "TIỂU. Cũng là size S."],
      ["试", "shì", "thí", "thử", "to try", "THÍ như “thí nghiệm”, “khảo thí”."],
      ["有点儿", "yǒu diǎnr", "hữu điểm nhi", "hơi… (không hài lòng)", "a bit (negative)", "Có một chút… điều không vừa ý."],
      ["一点儿", "yì diǎnr", "nhất điểm nhi", "một chút", "a little", "Một điểm nhỏ = một chút."],
      ["还是", "hái shi", "hoàn thị", "hay là (câu hỏi)", "or (question)", "Hỏi lựa chọn: A hay là B?"]
    ],
    grammar: [
      { t: "有点儿 và 一点儿", f: "有点儿 + Adj  /  Adj + 一点儿", e: "有点儿 đứng TRƯỚC tính từ, than phiền (hơi đắt). 一点儿 đứng SAU tính từ, yêu cầu so sánh (rẻ hơn chút).",
        x: [["这|件|有点儿|大。", "Zhè jiàn yǒudiǎnr dà.", "Chiếc này hơi to."], ["有|小|一点儿|的|吗？", "Yǒu xiǎo yìdiǎnr de ma?", "Có cái nhỏ hơn chút không?"]] },
      { t: "Câu hỏi lựa chọn", f: "A + 还是 + B？", e: "Hỏi A hay B. Trong câu hỏi dùng 还是, không dùng 或者.",
        x: [["你|要|红色|的|还是|黑色|的？", "Nǐ yào hóngsè de háishi hēisè de?", "Bạn lấy cái đỏ hay cái đen?"]] },
      { t: "Lặp động từ", f: "V + V", e: "Làm thử, làm một chút. 试试 = thử xem.",
        x: [["我|可以|试试|吗？", "Wǒ kěyǐ shìshi ma?", "Tôi thử được không?"]] }
    ],
    dialogue: [
      ["A", "这件衣服我可以试试吗？", "Zhè jiàn yīfu wǒ kěyǐ shìshi ma?", "Tôi thử chiếc áo này được không?"],
      ["B", "可以。你要红色的还是黑色的？", "Kěyǐ. Nǐ yào hóngsè de háishi hēisè de?", "Được. Bạn lấy màu đỏ hay đen?"],
      ["A", "黑色的。……有点儿大，有小一点儿的吗？", "Hēisè de. …… Yǒudiǎnr dà, yǒu xiǎo yìdiǎnr de ma?", "Màu đen. …Hơi to, có cái nhỏ hơn không?"],
      ["B", "有，你试试这件。", "Yǒu, nǐ shìshi zhè jiàn.", "Có, bạn thử chiếc này."]
    ],
    fun: "Mẹo nhớ 有点儿 vs 一点儿: “CÓ chút vấn đề” (有点儿) đứng trước để than; “thêm MỘT chút” (一点儿) đứng sau để xin."
  },
  {
    id: 10, title: "Mua hàng online", zh: "我在网上买的", emoji: "📦",
    goal: "Mua sắm online, giao hàng; 了 hoàn thành, 已经…了, 想.",
    words: [
      ["网上", "wǎng shàng", "võng thượng", "trên mạng", "online", "网 = cái lưới (võng). Internet là cái lưới khổng lồ."],
      ["网购", "wǎng gòu", "võng cấu", "mua sắm online", "online shopping", "网 mạng + 购 mua = chốt đơn lúc 2h sáng."],
      ["快递", "kuài dì", "khoái đệ", "chuyển phát nhanh, shipper", "express delivery", "快 nhanh + 递 chuyển. “Khoái đệ” — đệ tử chạy nhanh nhất."],
      ["送", "sòng", "tống", "giao, tặng, tiễn", "to deliver, give", "TỐNG như “tống tiễn”, “tống đi”."],
      ["东西", "dōng xi", "đông tây", "đồ vật", "thing, stuff", "ĐÔNG + TÂY = đồ đạc từ khắp nơi. Đọc “tung xi”."],
      ["付钱", "fù qián", "phó tiền", "trả tiền", "to pay", "PHÓ = giao cho. Giao tiền đi."],
      ["收到", "shōu dào", "thu đáo", "nhận được", "to receive", "THU như “thu hoạch”. Nhận được hàng!"],
      ["已经", "yǐ jīng", "dĩ kinh", "đã… rồi", "already", "DĨ như “dĩ vãng” = chuyện đã qua."],
      ["了", "le", "liễu", "rồi (hoàn thành)", "completed action", "Chữ nhỏ mà có võ! Đặt sau động từ: việc đã xong."],
      ["想", "xiǎng", "tưởng", "muốn; nhớ; nghĩ", "to want; to miss", "TƯỞNG như “tư tưởng”. 相 + 心 trái tim: trong tim nghĩ tới = muốn/nhớ."],
      ["便宜", "pián yi", "tiện nghi", "rẻ", "cheap", "Ôn lại bài 8 — mua online thường 便宜 hơn!"],
      ["手机", "shǒu jī", "thủ cơ", "điện thoại", "mobile phone", "Ôn lại: máy cầm tay."]
    ],
    grammar: [
      { t: "了 sau động từ (hoàn thành)", f: "S + V + 了 + (số lượng) + O", e: "Hành động đã hoàn thành. Phủ định: 没 + V (bỏ 了).",
        x: [["我|买|了|两|件|衣服。", "Wǒ mǎi le liǎng jiàn yīfu.", "Tôi đã mua hai chiếc áo."], ["我|没|收到。", "Wǒ méi shōudào.", "Tôi chưa nhận được."]] },
      { t: "已经…了", f: "S + 已经 + V + 了", e: "Nhấn mạnh việc ĐÃ xảy ra rồi.",
        x: [["快递|已经|到|了。", "Kuàidì yǐjīng dào le.", "Hàng đã đến rồi."]] },
      { t: "想 + V (muốn)", f: "S + 想 + V", e: "Muốn làm gì đó (nhẹ nhàng hơn 要).",
        x: [["我|想|在|网上|买|手机。", "Wǒ xiǎng zài wǎngshàng mǎi shǒujī.", "Tôi muốn mua điện thoại trên mạng."]] }
    ],
    dialogue: [
      ["A", "你的衣服真好看！在哪儿买的？", "Nǐ de yīfu zhēn hǎokàn! Zài nǎr mǎi de?", "Áo bạn đẹp thật! Mua ở đâu thế?"],
      ["B", "在网上买的，很便宜。", "Zài wǎngshàng mǎi de, hěn piányi.", "Mua trên mạng, rẻ lắm."],
      ["A", "我也想网购，可是我的快递还没到……", "Wǒ yě xiǎng wǎnggòu, kěshì wǒ de kuàidì hái méi dào……", "Tôi cũng muốn mua online, nhưng đơn của tôi vẫn chưa tới…"],
      ["B", "别着急，明天就送到了。", "Bié zháojí, míngtiān jiù sòngdào le.", "Đừng sốt ruột, mai là giao tới rồi."]
    ],
    fun: "Câu cửa miệng của dân nghiện mua sắm: 买买买！(mǎi mǎi mǎi - mua mua mua!) và câu tỉnh ngộ cuối tháng: 我没钱了 (wǒ méi qián le - tôi hết tiền rồi)."
  }
  ]
},
{
  id: 3, name: "Gia đình", zh: "家庭", color: "#fb8c00", emoji: "👨‍👩‍👧",
  lessons: [
  {
    id: 11, title: "Thành viên gia đình", zh: "你家有几口人？", emoji: "👪",
    goal: "Giới thiệu gia đình; 几口人, 和.",
    words: [
      ["爸爸", "bà ba", "bá", "bố", "dad", "Đọc “ba ba” — giống tiếng Việt gọi “ba”!"],
      ["妈妈", "mā ma", "ma", "mẹ", "mom", "“Ma ma” — gần như “má” trong tiếng Việt. 女 (phụ nữ) + 马 âm “ma”."],
      ["哥哥", "gē ge", "ca", "anh trai", "older brother", "Đọc “cưa cưa”. Anh trai suốt ngày “cưa” em gái 😄"],
      ["姐姐", "jiě jie", "thư", "chị gái", "older sister", "Đọc “chiẻ chie”. Có 女 bộ nữ."],
      ["弟弟", "dì di", "đệ", "em trai", "younger brother", "ĐỆ như “huynh đệ”, “đệ tử”."],
      ["妹妹", "mèi mei", "muội", "em gái", "younger sister", "MUỘI như trong phim kiếm hiệp “tiểu muội”."],
      ["儿子", "ér zi", "nhi tử", "con trai", "son", "NHI = trẻ con (nhi đồng)."],
      ["女儿", "nǚ ér", "nữ nhi", "con gái", "daughter", "NỮ NHI — như phim cổ trang!"],
      ["爷爷", "yé ye", "gia", "ông nội", "grandpa (paternal)", "Đọc “dế dế”: ông nội nuôi dế 🦗"],
      ["奶奶", "nǎi nai", "nãi", "bà nội", "grandma (paternal)", "Đọc “nải nai”: bà nội cho cả nải chuối."],
      ["口", "kǒu", "khẩu", "miệng; người (lượng từ gia đình)", "mouth; measure word for family members", "Nhà có mấy MIỆNG ăn = mấy người. Rất thực tế!"],
      ["和", "hé", "hòa", "và", "and", "HÒA như “hòa hợp”. Chỉ nối danh từ, không nối câu."]
    ],
    grammar: [
      { t: "Hỏi số người trong nhà", f: "你家有几口人？", e: "Trả lời: 我家有 + số + 口人. Liệt kê bằng 和 ở cuối.",
        x: [["我家|有|四|口|人。", "Wǒ jiā yǒu sì kǒu rén.", "Nhà tôi có 4 người."], ["爸爸、|妈妈、|姐姐|和|我。", "Bàba, māma, jiějie hé wǒ.", "Bố, mẹ, chị gái và tôi."]] },
      { t: "Liên từ 和", f: "N1 + 和 + N2", e: "和 chỉ nối danh từ/đại từ. KHÔNG dùng 和 để nối hai câu (khác “and” trong tiếng Anh).",
        x: [["我|和|我|妹妹|都|是|老师。", "Wǒ hé wǒ mèimei dōu shì lǎoshī.", "Tôi và em gái đều là giáo viên."]] }
    ],
    dialogue: [
      ["A", "你家有几口人？", "Nǐ jiā yǒu jǐ kǒu rén?", "Nhà bạn có mấy người?"],
      ["B", "五口人：爸爸、妈妈、哥哥、妹妹和我。", "Wǔ kǒu rén: bàba, māma, gēge, mèimei hé wǒ.", "5 người: bố, mẹ, anh trai, em gái và tôi."],
      ["A", "你有孩子吗？", "Nǐ yǒu háizi ma?", "Bạn có con chưa?"],
      ["B", "有，我有一个女儿。", "Yǒu, wǒ yǒu yí ge nǚ'ér.", "Có, tôi có một cô con gái."]
    ],
    fun: "Tết mà họ hàng hỏi 你有对象吗？(Có người yêu chưa?) — bài 17 sẽ dạy bạn cách lảng sang chuyện khác 😆"
  },
  {
    id: 12, title: "Tiếp đãi khách", zh: "请进，请坐！", emoji: "🍵",
    goal: "Mời khách, lịch sự: 请 + V, 别客气, 或者.",
    words: [
      ["请", "qǐng", "thỉnh", "mời; xin vui lòng", "please; to invite", "THỈNH như “thỉnh cầu”. 讠(lời nói) + 青: lời nói trong xanh = lời mời lịch sự."],
      ["进", "jìn", "tiến", "vào", "to enter", "TIẾN vào!"],
      ["坐", "zuò", "tọa", "ngồi", "to sit", "Hai người 人 ngồi trên đất 土. TỌA như “tọa đàm”."],
      ["喝", "hē", "hát", "uống", "to drink", "Có 口 cái miệng. Đọc “hưa”: uống xong “hưa~” sảng khoái."],
      ["茶", "chá", "trà", "trà", "tea", "TRÀ! Cỏ 艹 + người 人 + cây 木: người ngồi giữa cỏ cây uống trà."],
      ["咖啡", "kā fēi", "già phi", "cà phê", "coffee", "Phiên âm từ “coffee” — “ca phây” 😄 Dân văn phòng không thể thiếu."],
      ["客气", "kè qi", "khách khí", "khách sáo", "polite, courteous", "KHÁCH KHÍ = giữ ý như khách. 别客气 = đừng khách sáo."],
      ["欢迎", "huān yíng", "hoan nghênh", "chào mừng", "welcome", "HOAN NGHÊNH! Giống y Hán Việt."],
      ["吃", "chī", "cật", "ăn", "to eat", "口 miệng + 乞: miệng đi xin = ĂN. Đọc “chư”."],
      ["菜", "cài", "thái", "món ăn; rau", "dish; vegetable", "Cỏ 艹 trên đầu: vốn là rau, giờ là món ăn nói chung."],
      ["好吃", "hǎo chī", "hảo cật", "ngon", "delicious", "TỐT + ĂN = ngon. 好 + V = V-dễ chịu: 好看 đẹp, 好听 hay."],
      ["或者", "huò zhě", "hoặc giả", "hoặc", "or (statement)", "HOẶC GIẢ = hoặc là."]
    ],
    grammar: [
      { t: "Câu mời lịch sự", f: "请 + V", e: "请进 (mời vào), 请坐 (mời ngồi), 请喝茶 (mời uống trà).",
        x: [["请|进，|请|坐！", "Qǐng jìn, qǐng zuò!", "Mời vào, mời ngồi!"]] },
      { t: "或者 (câu trần thuật)", f: "A + 或者 + B", e: "Dùng trong câu trần thuật. Câu hỏi thì dùng 还是 (bài 9).",
        x: [["喝|茶|或者|咖啡|都|可以。", "Hē chá huòzhě kāfēi dōu kěyǐ.", "Uống trà hoặc cà phê đều được."]] }
    ],
    dialogue: [
      ["A", "欢迎欢迎！请进，请坐！", "Huānyíng huānyíng! Qǐng jìn, qǐng zuò!", "Chào mừng! Mời vào, mời ngồi!"],
      ["B", "谢谢！你家真漂亮。", "Xièxie! Nǐ jiā zhēn piàoliang.", "Cảm ơn! Nhà bạn đẹp quá."],
      ["A", "你喝茶还是喝咖啡？", "Nǐ hē chá háishi hē kāfēi?", "Bạn uống trà hay cà phê?"],
      ["B", "喝茶吧。别客气！", "Hē chá ba. Bié kèqi!", "Trà đi. Đừng khách sáo!"]
    ],
    fun: "Văn hóa Trung: chủ nhà rót trà, khách gõ nhẹ 2 ngón tay lên bàn để cảm ơn — kiểu “cúi chào bằng ngón tay” 🙇"
  },
  {
    id: 13, title: "Sinh nhật", zh: "生日快乐！", emoji: "🎂",
    goal: "Ngày tháng, tuổi, chúc mừng: 年月日, 多大, 祝, 给.",
    words: [
      ["生日", "shēng rì", "sinh nhật", "sinh nhật", "birthday", "SINH NHẬT — giống 100%!"],
      ["快乐", "kuài lè", "khoái lạc", "vui vẻ", "happy", "KHOÁI LẠC (nghĩa tốt nhé!) = vui vẻ."],
      ["岁", "suì", "tuế", "tuổi", "years old", "TUẾ như “vạn tuế”. Chúc ai đó sống đến 万岁!"],
      ["多大", "duō dà", "đa đại", "bao nhiêu tuổi", "how old", "Lớn (大) chừng nào (多)? Hỏi người ngang tuổi. Hỏi trẻ con dùng 几岁."],
      ["年", "nián", "niên", "năm", "year", "NIÊN như “thanh niên”, “niên khóa”."],
      ["月", "yuè", "nguyệt", "tháng; mặt trăng", "month; moon", "NGUYỆT = trăng. Trăng tròn một lần = một tháng."],
      ["号", "hào", "hiệu", "ngày (trong tháng)", "day of month", "Số hiệu ngày. 五月一号 = ngày 1/5."],
      ["礼物", "lǐ wù", "lễ vật", "quà tặng", "gift", "LỄ VẬT — ai mà không thích!"],
      ["蛋糕", "dàn gāo", "đản cao", "bánh kem", "cake", "蛋 trứng + 糕 bánh = bánh làm từ trứng."],
      ["祝", "zhù", "chúc", "chúc", "to wish", "CHÚC! Hán Việt hoàn hảo."],
      ["给", "gěi", "cấp", "cho, đưa", "to give; for", "CẤP như “cung cấp”. Đọc “cẩy”."],
      ["今年", "jīn nián", "kim niên", "năm nay", "this year", "KIM (nay) + NIÊN (năm)."]
    ],
    grammar: [
      { t: "Ngày tháng", f: "Năm + 年 + Tháng + 月 + Ngày + 号", e: "Ngược tiếng Việt: từ LỚN đến NHỎ. 2025年5月20号.",
        x: [["我|的|生日|是|五月|二十|号。", "Wǒ de shēngrì shì wǔ yuè èrshí hào.", "Sinh nhật tôi là ngày 20 tháng 5."]] },
      { t: "Chúc mừng", f: "祝 + 你 + lời chúc", e: "祝你生日快乐！ = Chúc bạn sinh nhật vui vẻ!",
        x: [["祝|你|生日|快乐！", "Zhù nǐ shēngrì kuàilè!", "Chúc mừng sinh nhật!"]] },
      { t: "给 + người + V", f: "S + 给 + Người + V + O", e: "Làm gì CHO ai đó.",
        x: [["我|给|你|买|了|一个|蛋糕。", "Wǒ gěi nǐ mǎi le yí ge dàngāo.", "Tôi mua cho bạn một cái bánh kem."]] }
    ],
    dialogue: [
      ["A", "今天是你的生日吗？", "Jīntiān shì nǐ de shēngrì ma?", "Hôm nay là sinh nhật bạn à?"],
      ["B", "是啊！", "Shì a!", "Đúng vậy!"],
      ["A", "祝你生日快乐！这是给你的礼物。", "Zhù nǐ shēngrì kuàilè! Zhè shì gěi nǐ de lǐwù.", "Chúc mừng sinh nhật! Đây là quà cho bạn."],
      ["B", "谢谢！", "Xièxie!", "Cảm ơn!"],
      ["A", "你今年多大？", "Nǐ jīnnián duō dà?", "Năm nay bạn bao nhiêu tuổi?"],
      ["B", "十八岁……的第十年。", "Shíbā suì…… de dì shí nián.", "18 tuổi… năm thứ mười. 😄"]
    ],
    fun: "Ngày 520 (wǔ èr líng) nghe giống 我爱你 (wǒ ài nǐ - anh yêu em), nên 20/5 là “Valentine” của Trung Quốc! Còn 1314 (yī sān yī sì) ≈ 一生一世 (trọn đời)."
  },
  {
    id: 14, title: "Sở thích", zh: "你喜欢做什么？", emoji: "⭐",
    goal: "Nói sở thích: 喜欢 + V, 最, 对…感兴趣.",
    words: [
      ["喜欢", "xǐ huan", "hỉ hoan", "thích", "to like", "HỈ HOAN = vui mừng. Thích thì vui!"],
      ["爱好", "ài hào", "ái hảo", "sở thích", "hobby", "ÁI (yêu) + HẢO (thích)."],
      ["看", "kàn", "khán", "xem, nhìn", "to watch, look", "Tay 手 che trên mắt 目 nhìn xa. KHÁN như “khán giả”."],
      ["电影", "diàn yǐng", "điện ảnh", "phim", "movie", "ĐIỆN ẢNH! Hoàn toàn giống."],
      ["听", "tīng", "thính", "nghe", "to listen", "THÍNH như “thính giác”. Có 口."],
      ["音乐", "yīn yuè", "âm nhạc", "âm nhạc", "music", "ÂM NHẠC — đọc là yuè nhé, không phải lè."],
      ["唱歌", "chàng gē", "xướng ca", "hát", "to sing", "XƯỚNG CA. Karaoke sau giờ làm = 去唱歌!"],
      ["跑步", "pǎo bù", "bào bộ", "chạy bộ", "to run, jog", "跑 có 足 (chân) + 包: chân bọc giày đi chạy."],
      ["做饭", "zuò fàn", "tố phạn", "nấu cơm", "to cook", "做 làm + 饭 cơm."],
      ["旅游", "lǚ yóu", "lữ du", "du lịch", "to travel", "LỮ (lữ khách) + DU (du lịch)."],
      ["最", "zuì", "tối", "nhất", "most", "TỐI như “tối đa”, “tối ưu”."],
      ["感兴趣", "gǎn xìng qù", "cảm hứng thú", "có hứng thú", "interested", "CẢM HỨNG THÚ — cảm thấy hứng thú."]
    ],
    grammar: [
      { t: "喜欢 + V", f: "S + 喜欢 + V + O", e: "Thích làm gì.",
        x: [["我|喜欢|看|电影。", "Wǒ xǐhuan kàn diànyǐng.", "Tôi thích xem phim."]] },
      { t: "最 (nhất)", f: "S + 最 + 喜欢/Adj", e: "最 đứng TRƯỚC động từ/tính từ (khác tiếng Việt: “thích nhất”).",
        x: [["我|最|喜欢|唱歌。", "Wǒ zuì xǐhuan chànggē.", "Tôi thích hát nhất."]] },
      { t: "对…感兴趣", f: "S + 对 + N + 感兴趣", e: "Có hứng thú với cái gì.",
        x: [["我|对|中国|音乐|很|感兴趣。", "Wǒ duì Zhōngguó yīnyuè hěn gǎn xìngqù.", "Tôi rất hứng thú với nhạc Trung Quốc."]] }
    ],
    dialogue: [
      ["A", "你的爱好是什么？", "Nǐ de àihào shì shénme?", "Sở thích của bạn là gì?"],
      ["B", "我喜欢跑步和旅游。你呢？", "Wǒ xǐhuan pǎobù hé lǚyóu. Nǐ ne?", "Tôi thích chạy bộ và du lịch. Còn bạn?"],
      ["A", "我最喜欢睡觉。", "Wǒ zuì xǐhuan shuìjiào.", "Tôi thích nhất là ngủ."],
      ["B", "哈哈，这也是我的爱好！", "Hāha, zhè yě shì wǒ de àihào!", "Haha, đó cũng là sở thích của tôi!"]
    ],
    fun: "Người đi làm khai sở thích trong CV: 旅游 (du lịch). Sở thích thật: 睡觉 (ngủ) và 刷手机 (lướt điện thoại)."
  }
  ]
},
{
  id: 4, name: "Thời tiết", zh: "天气", color: "#43a047", emoji: "🌦️",
  lessons: [
  {
    id: 15, title: "Thời tiết ở Bắc Kinh", zh: "北京的冬天比较冷", emoji: "❄️",
    goal: "Nói về thời tiết, mùa; 怎么样, so sánh 比, 不A不B.",
    words: [
      ["天气", "tiān qì", "thiên khí", "thời tiết", "weather", "THIÊN (trời) + KHÍ = khí trời."],
      ["冷", "lěng", "lãnh", "lạnh", "cold", "LÃNH = lạnh. Bộ 冫 (2 giọt băng) — lạnh đóng băng."],
      ["热", "rè", "nhiệt", "nóng", "hot", "NHIỆT. 4 chấm dưới 灬 là ngọn lửa."],
      ["下雨", "xià yǔ", "hạ vũ", "mưa", "to rain", "Mưa (雨 vũ) rơi xuống (下). Chữ 雨 có 4 giọt mưa trong cửa sổ."],
      ["下雪", "xià xuě", "hạ tuyết", "tuyết rơi", "to snow", "TUYẾT rơi xuống."],
      ["刮风", "guā fēng", "quát phong", "gió thổi", "windy", "PHONG = gió (phong ba)."],
      ["晴", "qíng", "tình", "nắng, quang đãng", "sunny", "日 mặt trời + 青 xanh = trời xanh có nắng."],
      ["度", "dù", "độ", "độ (nhiệt độ)", "degree", "NHIỆT ĐỘ. 三十度 = 30 độ."],
      ["春天", "chūn tiān", "xuân thiên", "mùa xuân", "spring", "XUÂN!"],
      ["夏天", "xià tiān", "hạ thiên", "mùa hè", "summer", "HẠ như “mùa hạ”."],
      ["秋天", "qiū tiān", "thu thiên", "mùa thu", "autumn", "THU. 禾 lúa + 火 lửa: mùa thu hoạch, đốt rơm."],
      ["冬天", "dōng tiān", "đông thiên", "mùa đông", "winter", "ĐÔNG. Hai chấm dưới như hai giọt băng."],
      ["比", "bǐ", "bỉ", "so với, hơn", "compared to", "Như “so bì”, “tỉ lệ”: hai người đứng cạnh nhau so chiều cao."],
      ["怎么样", "zěn me yàng", "chẩm ma dạng", "thế nào", "how about", "Hỏi ý kiến/tình trạng."]
    ],
    grammar: [
      { t: "怎么样", f: "N + 怎么样？", e: "Hỏi tình hình, đánh giá.",
        x: [["今天|天气|怎么样？", "Jīntiān tiānqì zěnmeyàng?", "Thời tiết hôm nay thế nào?"]] },
      { t: "So sánh 比", f: "A + 比 + B + Adj", e: "A hơn B. Chú ý: KHÔNG thêm 很 trước tính từ. Muốn nói hơn nhiều: Adj + 多了.",
        x: [["北京|比|河内|冷。", "Běijīng bǐ Hénèi lěng.", "Bắc Kinh lạnh hơn Hà Nội."], ["今天|比|昨天|热|多了。", "Jīntiān bǐ zuótiān rè duō le.", "Hôm nay nóng hơn hôm qua nhiều."]] },
      { t: "不A不B (vừa phải)", f: "不 + Adj1 + 不 + Adj2", e: "Hai tính từ trái nghĩa → vừa phải.",
        x: [["秋天|不|冷|不|热。", "Qiūtiān bù lěng bú rè.", "Mùa thu không lạnh không nóng."]] }
    ],
    dialogue: [
      ["A", "北京的天气怎么样？", "Běijīng de tiānqì zěnmeyàng?", "Thời tiết Bắc Kinh thế nào?"],
      ["B", "冬天比较冷，常常零下十度。", "Dōngtiān bǐjiào lěng, chángcháng língxià shí dù.", "Mùa đông khá lạnh, thường âm 10 độ."],
      ["A", "比河内冷多了！", "Bǐ Hénèi lěng duō le!", "Lạnh hơn Hà Nội nhiều!"],
      ["B", "对。秋天最好，不冷不热。", "Duì. Qiūtiān zuì hǎo, bù lěng bú rè.", "Đúng. Mùa thu đẹp nhất, không lạnh không nóng."]
    ],
    fun: "Người Trung hay đùa: Bắc Kinh chỉ có 2 mùa — 冬天 và 夏天, mùa xuân thu ngắn như kỳ nghỉ phép của bạn vậy 😅"
  }
  ]
},
{
  id: 5, name: "Kỳ nghỉ", zh: "假期", color: "#1e88e5", emoji: "🏖️",
  lessons: [
  {
    id: 16, title: "Cuối tuần", zh: "周末你做什么？", emoji: "🛋️",
    goal: "Lên kế hoạch cuối tuần; 可以, 吧, lặp động từ, 在 + nơi + V.",
    words: [
      ["周末", "zhōu mò", "chu mạt", "cuối tuần", "weekend", "CHU (tuần) + MẠT (cuối, như “mạt vận”)."],
      ["休息", "xiū xi", "hưu tức", "nghỉ ngơi", "to rest", "HƯU như “nghỉ hưu”. 休 = người 亻 dựa vào cây 木 nghỉ mát."],
      ["睡觉", "shuì jiào", "thụy giác", "ngủ", "to sleep", "THỤY = ngủ. Hoạt động cuối tuần số 1 😴"],
      ["起床", "qǐ chuáng", "khởi sàng", "thức dậy", "to get up", "KHỞI (dậy) + SÀNG (giường)."],
      ["逛街", "guàng jiē", "cuống nhai", "đi dạo phố", "to go shopping/stroll", "Đi lang thang (逛) ngoài phố (街)."],
      ["一起", "yì qǐ", "nhất khởi", "cùng nhau", "together", "Cùng (一) khởi hành (起)."],
      ["可以", "kě yǐ", "khả dĩ", "có thể, được", "can, may", "KHẢ DĨ = có thể."],
      ["吧", "ba", "ba", "nhé, đi (gợi ý)", "suggestion particle", "Cuối câu như “nhé!”: 我们走吧 = mình đi thôi nhé."],
      ["打算", "dǎ suan", "đả toán", "dự định", "to plan", "ĐẢ TOÁN = tính toán. Dự định."],
      ["有空", "yǒu kòng", "hữu không", "rảnh", "to be free", "Có (有) khoảng trống (空) trong lịch."],
      ["时间", "shí jiān", "thời gian", "thời gian", "time", "THỜI GIAN — y hệt!"],
      ["看书", "kàn shū", "khán thư", "đọc sách", "to read", "Xem (看) sách (书)."]
    ],
    grammar: [
      { t: "Gợi ý với 吧", f: "Câu + 吧", e: "Đề nghị, rủ rê nhẹ nhàng.",
        x: [["我们|一起|去|逛街|吧！", "Wǒmen yìqǐ qù guàngjiē ba!", "Chúng mình cùng đi dạo phố nhé!"]] },
      { t: "Lặp động từ", f: "V + V / AB + AB", e: "Làm thử, làm một chút cho thoải mái. 休息休息 = nghỉ ngơi chút.",
        x: [["周末|我|想|休息|休息。", "Zhōumò wǒ xiǎng xiūxi xiūxi.", "Cuối tuần tôi muốn nghỉ ngơi chút."]] },
      { t: "在 + nơi + V", f: "S + 在 + Nơi chốn + V", e: "Nơi chốn đứng TRƯỚC động từ (khác tiếng Việt).",
        x: [["我|在|家|看书。", "Wǒ zài jiā kàn shū.", "Tôi đọc sách ở nhà."]] }
    ],
    dialogue: [
      ["A", "这个周末你有空吗？", "Zhège zhōumò nǐ yǒu kòng ma?", "Cuối tuần này bạn rảnh không?"],
      ["B", "有空。你有什么打算？", "Yǒu kòng. Nǐ yǒu shénme dǎsuan?", "Rảnh. Bạn có dự định gì?"],
      ["A", "我们一起去逛街吧！", "Wǒmen yìqǐ qù guàngjiē ba!", "Mình cùng đi dạo phố nhé!"],
      ["B", "好啊！不过……我十一点才起床。", "Hǎo a! Búguò…… wǒ shíyī diǎn cái qǐchuáng.", "Được! Nhưng mà… 11 giờ tôi mới dậy."]
    ],
    fun: "Kế hoạch cuối tuần lý tưởng: 运动、看书、学汉语. Thực tế: 睡觉、睡觉、再睡觉 (ngủ, ngủ, rồi ngủ tiếp)."
  },
  {
    id: 17, title: "Tết", zh: "新年快乐！", emoji: "🧧",
    goal: "Nói về Tết, lời chúc; 快要…了, 先…然后….",
    words: [
      ["春节", "Chūn jié", "Xuân tiết", "Tết Nguyên đán", "Spring Festival", "Tiết XUÂN = Tết."],
      ["新年", "xīn nián", "tân niên", "năm mới", "new year", "TÂN NIÊN = năm mới."],
      ["过年", "guò nián", "quá niên", "ăn Tết", "to celebrate New Year", "Vượt qua (过) một năm."],
      ["红包", "hóng bāo", "hồng bao", "lì xì", "red envelope", "Bao (包) màu đỏ (红). Từ được trẻ con yêu thích nhất!"],
      ["饺子", "jiǎo zi", "giảo tử", "sủi cảo", "dumpling", "Người miền Bắc Trung Quốc ăn sủi cảo đêm giao thừa, như mình ăn bánh chưng."],
      ["放假", "fàng jià", "phóng giả", "được nghỉ (lễ)", "to have a holiday", "PHÓNG (thả) + GIẢ (nghỉ): được thả ra khỏi văn phòng!"],
      ["回家", "huí jiā", "hồi gia", "về nhà", "to go home", "HỒI GIA = về nhà. Hai chữ 口 lồng nhau = vòng quay trở về."],
      ["热闹", "rè nao", "nhiệt náo", "náo nhiệt", "lively", "NHIỆT NÁO = náo nhiệt (đảo lại)."],
      ["恭喜发财", "gōng xǐ fā cái", "cung hỷ phát tài", "chúc phát tài", "wishing prosperity", "CUNG HỶ PHÁT TÀI — câu chúc kinh điển!"],
      ["快要…了", "kuài yào…le", "khoái yếu…liễu", "sắp… rồi", "about to", "Sắp sửa đến rồi!"],
      ["先", "xiān", "tiên", "trước tiên", "first", "TIÊN như “tiên phong”."],
      ["然后", "rán hòu", "nhiên hậu", "sau đó", "then", "HẬU = sau."]
    ],
    grammar: [
      { t: "快要…了", f: "快要 / 快 / 要 + V/N + 了", e: "Sắp sửa xảy ra. Nếu có mốc thời gian cụ thể thì dùng 要…了, không dùng 快要.",
        x: [["快要|过年|了！", "Kuàiyào guònián le!", "Sắp Tết rồi!"], ["明天|就|要|放假|了。", "Míngtiān jiù yào fàngjià le.", "Mai là được nghỉ rồi."]] },
      { t: "先…然后…", f: "先 + V1，然后 + V2", e: "Trình tự: trước… sau đó….",
        x: [["我|先|回家，|然后|去|买|东西。", "Wǒ xiān huíjiā, ránhòu qù mǎi dōngxi.", "Tôi về nhà trước, sau đó đi mua đồ."]] }
    ],
    dialogue: [
      ["A", "快要过年了！你什么时候放假？", "Kuàiyào guònián le! Nǐ shénme shíhou fàngjià?", "Sắp Tết rồi! Khi nào bạn được nghỉ?"],
      ["B", "下个星期。我先回家，然后去旅游。", "Xià ge xīngqī. Wǒ xiān huíjiā, ránhòu qù lǚyóu.", "Tuần sau. Tôi về nhà trước, sau đó đi du lịch."],
      ["A", "新年快乐！恭喜发财！", "Xīnnián kuàilè! Gōngxǐ fācái!", "Chúc mừng năm mới! Phát tài nhé!"],
      ["B", "红包拿来！", "Hóngbāo ná lái!", "Lì xì đưa đây!"]
    ],
    fun: "Câu đùa kinh điển: 恭喜发财，红包拿来！(Cung hỷ phát tài, lì xì mang ra!) — trẻ con Trung Quốc nói câu này mỗi Tết."
  },
  {
    id: 18, title: "Du lịch", zh: "你去过中国吗？", emoji: "✈️",
    goal: "Kể kinh nghiệm du lịch; V + 过, 坐 + phương tiện.",
    words: [
      ["飞机", "fēi jī", "phi cơ", "máy bay", "airplane", "PHI CƠ — máy bay."],
      ["火车", "huǒ chē", "hỏa xa", "tàu hỏa", "train", "HỎA XA = xe lửa. Y nghĩa đen!"],
      ["酒店", "jiǔ diàn", "tửu điếm", "khách sạn", "hotel", "Nghĩa đen là quán rượu, nhưng giờ là KHÁCH SẠN. Đừng nhầm nhé!"],
      ["护照", "hù zhào", "hộ chiếu", "hộ chiếu", "passport", "HỘ CHIẾU — giống hệt."],
      ["票", "piào", "phiếu", "vé", "ticket", "PHIẾU = vé."],
      ["地方", "dì fang", "địa phương", "nơi, chỗ", "place", "ĐỊA PHƯƠNG, nhưng nghĩa là “chỗ, nơi”."],
      ["照片", "zhào piàn", "chiếu phiến", "ảnh", "photo", "Tấm (片) chụp chiếu (照)."],
      ["拍", "pāi", "phách", "chụp (ảnh); vỗ", "to take (photo)", "Có bộ 扌(tay): tay bấm nút chụp."],
      ["过", "guo", "quá", "đã từng", "experience marker", "Sau động từ = đã từng trải QUA."],
      ["风景", "fēng jǐng", "phong cảnh", "phong cảnh", "scenery", "PHONG CẢNH — giống hệt!"],
      ["漂亮", "piào liang", "phiêu lượng", "đẹp", "beautiful", "Đọc “peo leng” — xinh đẹp."],
      ["坐", "zuò", "tọa", "ngồi; đi (xe, tàu, máy bay)", "to sit; to take (transport)", "Ngồi trên phương tiện = đi bằng."]
    ],
    grammar: [
      { t: "Trợ từ kinh nghiệm 过", f: "S + V + 过 + O  /  没 + V + 过", e: "Đã từng làm gì (kinh nghiệm). Phủ định: 没 + V + 过.",
        x: [["我|去|过|北京。", "Wǒ qù guo Běijīng.", "Tôi đã từng đến Bắc Kinh."], ["我|没|坐|过|火车。", "Wǒ méi zuò guo huǒchē.", "Tôi chưa từng đi tàu hỏa."]] },
      { t: "Phương tiện", f: "S + 坐 + phương tiện + 去 + nơi", e: "Đi đâu bằng gì.",
        x: [["我们|坐|飞机|去|上海。", "Wǒmen zuò fēijī qù Shànghǎi.", "Chúng tôi đi máy bay đến Thượng Hải."]] }
    ],
    dialogue: [
      ["A", "你去过中国吗？", "Nǐ qù guo Zhōngguó ma?", "Bạn đã từng đến Trung Quốc chưa?"],
      ["B", "去过。我坐飞机去了上海。", "Qù guo. Wǒ zuò fēijī qù le Shànghǎi.", "Từng rồi. Tôi đi máy bay đến Thượng Hải."],
      ["A", "那儿风景漂亮吗？", "Nàr fēngjǐng piàoliang ma?", "Phong cảnh ở đó đẹp không?"],
      ["B", "很漂亮！我拍了很多照片。", "Hěn piàoliang! Wǒ pāi le hěn duō zhàopiàn.", "Rất đẹp! Tôi chụp rất nhiều ảnh."]
    ],
    fun: "酒店 (tửu điếm) là khách sạn — đừng hoảng nếu đồng nghiệp Trung nói “我住酒店” nhé, họ không ở quán rượu đâu 🍺"
  }
  ]
},
{
  id: 6, name: "Sức khỏe", zh: "健康", color: "#5e35b1", emoji: "💪",
  lessons: [
  {
    id: 19, title: "Bị ốm", zh: "我感冒了", emoji: "🤒",
    goal: "Mô tả triệu chứng, xin nghỉ; 了 (thay đổi), 应该, 能.",
    words: [
      ["生病", "shēng bìng", "sinh bệnh", "bị ốm", "to get sick", "SINH BỆNH = phát bệnh."],
      ["感冒", "gǎn mào", "cảm mạo", "cảm cúm", "to have a cold", "CẢM MẠO — y như thuốc “cảm mạo” ngày xưa."],
      ["发烧", "fā shāo", "phát thiêu", "sốt", "to have a fever", "PHÁT (bốc) + THIÊU (đốt) = người nóng như lửa."],
      ["头疼", "tóu téng", "đầu đông", "đau đầu", "headache", "头 đầu + 疼 đau. Hay xảy ra sau họp 3 tiếng."],
      ["咳嗽", "ké sou", "khái thấu", "ho", "to cough", "Đọc “khứa sâu” — nghe như tiếng ho “khụ khụ”."],
      ["舒服", "shū fu", "thư phục", "dễ chịu, khỏe", "comfortable", "不舒服 = không khỏe, khó chịu."],
      ["医院", "yī yuàn", "y viện", "bệnh viện", "hospital", "Y VIỆN = viện y tế."],
      ["医生", "yī shēng", "y sinh", "bác sĩ", "doctor", "Y SINH. Cũng giống 学生 nhưng học y."],
      ["药", "yào", "dược", "thuốc", "medicine", "DƯỢC như “dược phẩm”. Có 艹 (cỏ): thuốc từ thảo dược."],
      ["身体", "shēn tǐ", "thân thể", "cơ thể, sức khỏe", "body, health", "THÂN THỂ."],
      ["应该", "yīng gāi", "ưng cai", "nên", "should", "Nên làm gì."],
      ["能", "néng", "năng", "có thể (khả năng/điều kiện)", "can, be able to", "NĂNG như “năng lực”."]
    ],
    grammar: [
      { t: "了 thay đổi trạng thái", f: "Câu + 了", e: "了 cuối câu báo hiệu tình huống mới, thay đổi: trước khỏe, giờ ốm rồi.",
        x: [["我|感冒|了。", "Wǒ gǎnmào le.", "Tôi bị cảm rồi."]] },
      { t: "应该 (nên)", f: "S + 应该 + V", e: "Khuyên nhủ.",
        x: [["你|应该|去|医院。", "Nǐ yīnggāi qù yīyuàn.", "Bạn nên đi bệnh viện."]] },
      { t: "能 (có thể)", f: "S + (不) 能 + V", e: "Có/không có khả năng, điều kiện làm gì.",
        x: [["今天|我|不能|上班。", "Jīntiān wǒ bù néng shàngbān.", "Hôm nay tôi không thể đi làm."]] }
    ],
    dialogue: [
      ["A", "经理，我不舒服，发烧了。", "Jīnglǐ, wǒ bù shūfu, fāshāo le.", "Sếp ơi, em không khỏe, bị sốt rồi."],
      ["B", "你应该去医院看看。", "Nǐ yīnggāi qù yīyuàn kànkan.", "Em nên đi bệnh viện khám đi."],
      ["A", "今天我不能上班了。", "Jīntiān wǒ bù néng shàngbān le.", "Hôm nay em không đi làm được."],
      ["B", "好，多喝水，好好休息。", "Hǎo, duō hē shuǐ, hǎohǎo xiūxi.", "Được, uống nhiều nước, nghỉ ngơi cho tốt."]
    ],
    fun: "Đơn thuốc vạn năng của mọi người mẹ Trung Quốc: 多喝热水 (uống nhiều nước nóng). Đau đầu? 多喝热水. Thất tình? Cũng 多喝热水 🫖"
  },
  {
    id: 20, title: "Tập thể dục", zh: "你每天运动吗？", emoji: "🏃",
    goal: "Nói thói quen tập luyện; 每…都, thời lượng, bổ ngữ trạng thái 得.",
    words: [
      ["运动", "yùn dòng", "vận động", "thể thao, vận động", "sport, exercise", "VẬN ĐỘNG — giống hệt!"],
      ["锻炼", "duàn liàn", "đoán luyện", "rèn luyện", "to work out", "Rèn (锻) và luyện (炼) như rèn sắt. Bộ 钅 kim loại + 火 lửa."],
      ["健身房", "jiàn shēn fáng", "kiện thân phòng", "phòng gym", "gym", "KIỆN (khỏe) + THÂN + PHÒNG. Nơi bạn đóng tiền cả năm, đi 3 buổi 😅"],
      ["游泳", "yóu yǒng", "du vịnh", "bơi", "to swim", "Cả hai chữ có 氵(nước)."],
      ["每天", "měi tiān", "mỗi thiên", "mỗi ngày", "every day", "MỖI = mỗi! Đọc “mẩy”."],
      ["小时", "xiǎo shí", "tiểu thời", "giờ (tiếng đồng hồ)", "hour", "Một tiếng đồng hồ. Khác 点 (mấy giờ)."],
      ["分钟", "fēn zhōng", "phân chung", "phút (khoảng thời gian)", "minute(s)", "Phân + chuông đồng hồ."],
      ["胖", "pàng", "bàng", "béo", "fat", "月 (thịt) + 半 (một nửa): nửa người toàn thịt."],
      ["瘦", "shòu", "sấu", "gầy", "thin", "Có bộ 疒 (bệnh): gầy như người ốm."],
      ["减肥", "jiǎn féi", "giảm phì", "giảm cân", "to lose weight", "GIẢM PHÌ = giảm béo. Bắt đầu từ thứ Hai… tuần sau."],
      ["坚持", "jiān chí", "kiên trì", "kiên trì", "to persist", "KIÊN TRÌ! Chìa khóa học tiếng Trung."],
      ["得", "de", "đắc", "(trợ từ bổ ngữ)", "complement particle", "V + 得 + Adj: làm gì đó như thế nào."]
    ],
    grammar: [
      { t: "每…都", f: "每 + (lượng từ) + N + 都 + V", e: "Mỗi… đều. 每 và 都 thường đi cặp.",
        x: [["我|每天|都|跑步。", "Wǒ měitiān dōu pǎobù.", "Ngày nào tôi cũng chạy bộ."]] },
      { t: "Thời lượng", f: "S + V + thời lượng", e: "Khoảng thời gian làm việc gì đặt SAU động từ (khác với thời điểm đặt trước).",
        x: [["我|每天|锻炼|一|个|小时。", "Wǒ měitiān duànliàn yí ge xiǎoshí.", "Mỗi ngày tôi tập một tiếng."]] },
      { t: "Bổ ngữ trạng thái 得", f: "S + V + 得 + (很) Adj", e: "Đánh giá cách làm.",
        x: [["他|跑|得|很|快。", "Tā pǎo de hěn kuài.", "Anh ấy chạy rất nhanh."]] }
    ],
    dialogue: [
      ["A", "你每天都运动吗？", "Nǐ měitiān dōu yùndòng ma?", "Ngày nào bạn cũng tập à?"],
      ["B", "对，我每天跑步半个小时。", "Duì, wǒ měitiān pǎobù bàn ge xiǎoshí.", "Ừ, mỗi ngày tôi chạy nửa tiếng."],
      ["A", "我也想减肥，可是没时间。", "Wǒ yě xiǎng jiǎnféi, kěshì méi shíjiān.", "Tôi cũng muốn giảm cân, nhưng không có thời gian."],
      ["B", "坚持就是胜利！", "Jiānchí jiù shì shènglì!", "Kiên trì là chiến thắng!"]
    ],
    fun: "坚持就是胜利 (kiên trì là thắng lợi) — câu này áp dụng cho cả giảm cân lẫn học tiếng Trung. Chuỗi ngày học (🔥) trong app chính là để giúp bạn 坚持!"
  },
  {
    id: 21, title: "Kiểm tra sức khỏe", zh: "体检结果怎么样？", emoji: "🩺",
    goal: "Khám sức khỏe, lời khuyên bác sĩ; 别 + V, 如果…就….",
    words: [
      ["体检", "tǐ jiǎn", "thể kiểm", "khám sức khỏe", "physical exam", "Kiểm tra (检) thân thể (体). Công ty bắt khám mỗi năm."],
      ["检查", "jiǎn chá", "kiểm tra", "kiểm tra", "to check", "KIỂM TRA — giống hệt!"],
      ["健康", "jiàn kāng", "kiện khang", "khỏe mạnh", "healthy", "KIỆN KHANG — như “kiện khang” trong lời chúc."],
      ["结果", "jié guǒ", "kết quả", "kết quả", "result", "KẾT QUẢ!"],
      ["血压", "xuè yā", "huyết áp", "huyết áp", "blood pressure", "HUYẾT ÁP — y chang!"],
      ["高", "gāo", "cao", "cao", "high, tall", "Hình tòa tháp cao."],
      ["低", "dī", "đê", "thấp", "low", "Đọc “ti”."],
      ["注意", "zhù yì", "chú ý", "chú ý", "to pay attention", "CHÚ Ý!"],
      ["抽烟", "chōu yān", "trừu yên", "hút thuốc", "to smoke", "Rút (抽) khói (烟)."],
      ["喝酒", "hē jiǔ", "hát tửu", "uống rượu", "to drink alcohol", "Uống TỬU. Dân văn phòng: 干杯！(cạn ly)."],
      ["别", "bié", "biệt", "đừng", "don't", "Đừng! 别 + V."],
      ["如果", "rú guǒ", "như quả", "nếu", "if", "NHƯ QUẢ = nếu như. 如果…就… = nếu… thì…"]
    ],
    grammar: [
      { t: "Câu cấm/khuyên 别", f: "别 + V (+ 了)", e: "Đừng làm gì.",
        x: [["别|抽烟|了！", "Bié chōuyān le!", "Đừng hút thuốc nữa!"]] },
      { t: "Câu điều kiện", f: "如果 + điều kiện，(S) + 就 + kết quả", e: "Nếu… thì…",
        x: [["如果|你|每天|运动，|身体|就|会|很|健康。", "Rúguǒ nǐ měitiān yùndòng, shēntǐ jiù huì hěn jiànkāng.", "Nếu bạn vận động mỗi ngày, cơ thể sẽ rất khỏe."]] }
    ],
    dialogue: [
      ["A", "医生，我的体检结果怎么样？", "Yīshēng, wǒ de tǐjiǎn jiéguǒ zěnmeyàng?", "Bác sĩ, kết quả khám của tôi thế nào?"],
      ["B", "血压有点儿高。你抽烟吗？", "Xuèyā yǒudiǎnr gāo. Nǐ chōuyān ma?", "Huyết áp hơi cao. Anh có hút thuốc không?"],
      ["A", "不抽，可是常常喝酒。", "Bù chōu, kěshì chángcháng hē jiǔ.", "Không, nhưng hay uống rượu."],
      ["B", "别喝了！如果少喝酒，血压就会好。", "Bié hē le! Rúguǒ shǎo hē jiǔ, xuèyā jiù huì hǎo.", "Đừng uống nữa! Nếu uống ít rượu, huyết áp sẽ ổn."]
    ],
    fun: "Bài này đầy từ Hán Việt: 检查 kiểm tra, 健康 kiện khang, 结果 kết quả, 血压 huyết áp, 注意 chú ý. Bạn gần như đã biết hết rồi!"
  }
  ]
},
{
  id: 7, name: "Sống & học ở Trung Quốc", zh: "留学中国", color: "#8e24aa", emoji: "🎓",
  lessons: [
  {
    id: 22, title: "Thích nghi", zh: "现在已经习惯了", emoji: "🧩",
    goal: "Nói về việc làm quen môi trường mới; 觉得, 越来越, 还/刚.",
    words: [
      ["习惯", "xí guàn", "tập quán", "thói quen; quen với", "habit; to get used to", "TẬP QUÁN = thói quen."],
      ["留学", "liú xué", "lưu học", "du học", "to study abroad", "LƯU HỌC = lưu lại nước ngoài để học."],
      ["生活", "shēng huó", "sinh hoạt", "cuộc sống", "life", "SINH HOẠT — nhưng nghĩa là cuộc sống."],
      ["适应", "shì yìng", "thích ứng", "thích nghi", "to adapt", "THÍCH ỨNG!"],
      ["开始", "kāi shǐ", "khai thủy", "bắt đầu", "to begin", "KHAI (mở) + THỦY (ban đầu)."],
      ["刚", "gāng", "cương", "vừa mới", "just", "Vừa mới xảy ra."],
      ["还", "hái", "hoàn", "vẫn, còn", "still", "Vẫn còn."],
      ["觉得", "jué de", "giác đắc", "cảm thấy", "to feel, think", "Cảm GIÁC được."],
      ["难", "nán", "nan", "khó", "difficult", "NAN như “nan giải”."],
      ["容易", "róng yì", "dung dị", "dễ", "easy", "DUNG DỊ = dễ dàng."],
      ["越来越", "yuè lái yuè", "việt lai việt", "càng ngày càng", "more and more", "越 (vượt) lặp lại = càng ngày càng."],
      ["慢慢", "màn màn", "mạn mạn", "từ từ", "slowly", "MẠN = chậm. Từ từ rồi sẽ quen."]
    ],
    grammar: [
      { t: "觉得 (cảm thấy)", f: "S + 觉得 + nhận xét", e: "Nêu cảm nhận, ý kiến.",
        x: [["我|觉得|汉语|不|太|难。", "Wǒ juéde Hànyǔ bú tài nán.", "Tôi thấy tiếng Trung không khó lắm."]] },
      { t: "越来越", f: "S + 越来越 + Adj", e: "Càng ngày càng…",
        x: [["我|的|汉语|越来越|好|了。", "Wǒ de Hànyǔ yuèláiyuè hǎo le.", "Tiếng Trung của tôi ngày càng tốt."]] },
      { t: "了 (đã quen rồi)", f: "已经 + V/Adj + 了", e: "Diễn tả thay đổi: trước chưa quen, giờ đã quen.",
        x: [["现在|已经|习惯|了。", "Xiànzài yǐjīng xíguàn le.", "Bây giờ đã quen rồi."]] }
    ],
    dialogue: [
      ["A", "你刚来中国的时候，习惯吗？", "Nǐ gāng lái Zhōngguó de shíhou, xíguàn ma?", "Lúc mới đến Trung Quốc, bạn có quen không?"],
      ["B", "开始不习惯，觉得很难。", "Kāishǐ bù xíguàn, juéde hěn nán.", "Ban đầu không quen, thấy rất khó."],
      ["A", "现在呢？", "Xiànzài ne?", "Còn bây giờ?"],
      ["B", "现在已经习惯了，越来越喜欢这儿的生活。", "Xiànzài yǐjīng xíguàn le, yuèláiyuè xǐhuan zhèr de shēnghuó.", "Bây giờ quen rồi, ngày càng thích cuộc sống ở đây."]
    ],
    fun: "Ba giai đoạn học tiếng Trung: 1) 好难！(khó quá!) 2) 还可以 (cũng được) 3) 越来越有意思 (ngày càng thú vị). Bạn đang ở giai đoạn mấy?"
  },
  {
    id: 23, title: "Ăn uống", zh: "服务员，点菜！", emoji: "🍜",
    goal: "Gọi món, nhận xét món ăn, tính tiền; lượng từ 碗, V完.",
    words: [
      ["饭馆", "fàn guǎn", "phạn quán", "nhà hàng", "restaurant", "PHẠN (cơm) + QUÁN = quán cơm."],
      ["服务员", "fú wù yuán", "phục vụ viên", "phục vụ, bồi bàn", "waiter", "PHỤC VỤ VIÊN — giống hệt!"],
      ["菜单", "cài dān", "thái đơn", "thực đơn", "menu", "Đơn (单) các món (菜)."],
      ["点菜", "diǎn cài", "điểm thái", "gọi món", "to order food", "Chấm (点) vào món ăn."],
      ["米饭", "mǐ fàn", "mễ phạn", "cơm", "rice", "米 = gạo. Hình hạt gạo văng ra 4 phía."],
      ["面条", "miàn tiáo", "miến điều", "mì sợi", "noodles", "MIẾN + ĐIỀU (sợi dài)."],
      ["碗", "wǎn", "oản", "bát (lượng từ)", "bowl", "Bát cơm. Có bộ 石 (đá): bát làm bằng sứ/đá."],
      ["辣", "là", "lạt", "cay", "spicy", "Đọc “la”: ăn cay quá phải LA lên! 🌶️"],
      ["甜", "tián", "điềm", "ngọt", "sweet", "舌 (lưỡi) + 甘 (ngọt): lưỡi nếm thấy ngọt."],
      ["饿", "è", "ngạ", "đói", "hungry", "NGẠ như “ngạ quỷ” = quỷ đói 👻"],
      ["饱", "bǎo", "bão", "no", "full", "Đọc “bảo”: ăn no rồi, đừng bảo ăn thêm!"],
      ["买单", "mǎi dān", "mãi đơn", "tính tiền", "check, please", "Mua (买) hóa đơn (单). Gọi phục vụ: 服务员，买单！"]
    ],
    grammar: [
      { t: "Lượng từ đồ ăn", f: "一 + 碗/杯/盘 + món", e: "一碗米饭 (một bát cơm), 一杯茶 (một cốc trà).",
        x: [["我|要|一|碗|面条。", "Wǒ yào yì wǎn miàntiáo.", "Tôi lấy một bát mì."]] },
      { t: "Bổ ngữ kết quả 完", f: "V + 完 (+ 了)", e: "Làm xong việc gì. 吃完 = ăn xong.",
        x: [["我|吃|完|了，|很|饱！", "Wǒ chī wán le, hěn bǎo!", "Tôi ăn xong rồi, no lắm!"]] }
    ],
    dialogue: [
      ["A", "服务员，点菜！", "Fúwùyuán, diǎn cài!", "Phục vụ ơi, gọi món!"],
      ["B", "好的，你们要什么？", "Hǎo de, nǐmen yào shénme?", "Vâng, các bạn dùng gì ạ?"],
      ["A", "两碗面条，不要太辣。", "Liǎng wǎn miàntiáo, bú yào tài là.", "Hai bát mì, đừng cay quá."],
      ["A", "……吃完了，好饱！服务员，买单！", "…… Chī wán le, hǎo bǎo! Fúwùyuán, mǎidān!", "…Ăn xong rồi, no quá! Phục vụ, tính tiền!"]
    ],
    fun: "Ở Tứ Xuyên, “不要太辣” (đừng cay quá) vẫn cay đến chảy nước mắt. Hãy nói 不要辣 (không cay) cho chắc ăn 🔥"
  },
  {
    id: 24, title: "Giao thông", zh: "路上堵车了", emoji: "🚦",
    goal: "Phương tiện, kẹt xe, đi muộn; 坐/骑/开, 因为…所以….",
    words: [
      ["交通", "jiāo tōng", "giao thông", "giao thông", "traffic", "GIAO THÔNG — giống hệt!"],
      ["打车", "dǎ chē", "đả xa", "bắt taxi", "to take a taxi", "“Đánh” (打) xe = gọi taxi/Grab."],
      ["公交车", "gōng jiāo chē", "công giao xa", "xe buýt", "bus", "Xe (车) giao thông công cộng."],
      ["自行车", "zì xíng chē", "tự hành xa", "xe đạp", "bicycle", "TỰ HÀNH XA = xe tự đi (bằng sức bạn!)."],
      ["开车", "kāi chē", "khai xa", "lái xe", "to drive", "KHAI = mở. Mở xe ra lái."],
      ["骑", "qí", "kỵ", "cưỡi, đi (xe đạp, xe máy)", "to ride", "KỴ như “kỵ binh”. Có bộ 马 (ngựa): cưỡi ngựa → cưỡi xe."],
      ["堵车", "dǔ chē", "đổ xa", "kẹt xe", "traffic jam", "Xe bị chặn (堵). Đặc sản 8h sáng."],
      ["红绿灯", "hóng lǜ dēng", "hồng lục đăng", "đèn giao thông", "traffic light", "Đèn đỏ (红) xanh (绿)."],
      ["迟到", "chí dào", "trì đáo", "đến muộn", "to be late", "TRÌ (chậm) + ĐÁO (đến)."],
      ["快", "kuài", "khoái", "nhanh", "fast", "Đọc “khoai”: nhanh như ăn khoai nóng."],
      ["慢", "màn", "mạn", "chậm", "slow", "MẠN = chậm."],
      ["因为…所以", "yīn wèi…suǒ yǐ", "nhân vị…sở dĩ", "vì… nên…", "because… so…", "NHÂN (nguyên nhân) … SỞ DĨ…"]
    ],
    grammar: [
      { t: "Động từ đi phương tiện", f: "坐 (ngồi trên) / 骑 (cưỡi) / 开 (lái)", e: "坐: xe buýt, tàu, máy bay, taxi. 骑: xe đạp, xe máy, ngựa. 开: tự lái ô tô.",
        x: [["我|骑|自行车|上班。", "Wǒ qí zìxíngchē shàngbān.", "Tôi đạp xe đi làm."], ["他|坐|公交车|去|公司。", "Tā zuò gōngjiāochē qù gōngsī.", "Anh ấy đi xe buýt tới công ty."]] },
      { t: "因为…所以…", f: "因为 + nguyên nhân，所以 + kết quả", e: "Khác tiếng Anh, tiếng Trung DÙNG CẢ HAI từ trong một câu.",
        x: [["因为|堵车，|所以|我|迟到|了。", "Yīnwèi dǔchē, suǒyǐ wǒ chídào le.", "Vì kẹt xe nên tôi đến muộn."]] }
    ],
    dialogue: [
      ["A", "你怎么迟到了？", "Nǐ zěnme chídào le?", "Sao bạn đến muộn?"],
      ["B", "对不起！因为路上堵车，所以来晚了。", "Duìbuqǐ! Yīnwèi lùshang dǔchē, suǒyǐ lái wǎn le.", "Xin lỗi! Vì đường kẹt xe nên đến muộn."],
      ["A", "你怎么来的？", "Nǐ zěnme lái de?", "Bạn đến bằng gì?"],
      ["B", "打车。下次我骑自行车！", "Dǎchē. Xià cì wǒ qí zìxíngchē!", "Taxi. Lần sau tôi đạp xe!"]
    ],
    fun: "Lý do đi muộn quốc dân: 堵车 (kẹt xe). Câu này hiệu quả ở cả Hà Nội, Sài Gòn lẫn Bắc Kinh 🚗🚗🚗"
  },
  {
    id: 25, title: "Giao tiếp", zh: "请再说一遍", emoji: "💬",
    goal: "Cứu nguy khi không hiểu: 听懂, 再说一遍, 慢一点儿.",
    words: [
      ["聊天", "liáo tiān", "liêu thiên", "tán gẫu", "to chat", "Nói chuyện trên trời (天) dưới đất."],
      ["介绍", "jiè shào", "giới thiệu", "giới thiệu", "to introduce", "GIỚI THIỆU — giống hệt!"],
      ["汉语", "Hàn yǔ", "Hán ngữ", "tiếng Trung", "Chinese language", "HÁN NGỮ."],
      ["说", "shuō", "thuyết", "nói", "to speak", "THUYẾT như “thuyết trình”. Bộ 讠 lời nói."],
      ["懂", "dǒng", "đổng", "hiểu", "to understand", "Có 忄(trái tim): hiểu bằng cả trái tim."],
      ["明白", "míng bai", "minh bạch", "hiểu rõ", "to understand clearly", "MINH BẠCH = rõ ràng."],
      ["意思", "yì si", "ý tư", "ý nghĩa", "meaning", "Ý TƯ = ý nghĩa. 什么意思？ = nghĩa là gì?"],
      ["问题", "wèn tí", "vấn đề", "câu hỏi, vấn đề", "question, problem", "VẤN ĐỀ. 没问题！= không vấn đề!"],
      ["一遍", "yí biàn", "nhất biến", "một lần (từ đầu đến cuối)", "once (whole)", "Một lượt từ đầu tới cuối."],
      ["帮", "bāng", "bang", "giúp", "to help", "Bang trợ = giúp đỡ."],
      ["方便", "fāng biàn", "phương tiện", "tiện lợi", "convenient", "Chữ giống PHƯƠNG TIỆN nhưng nghĩa là TIỆN LỢI."],
      ["对不起", "duì bu qǐ", "đối bất khởi", "xin lỗi", "sorry", "Không (不) dám ngẩng lên (起) đối mặt = xin lỗi."]
    ],
    grammar: [
      { t: "Bổ ngữ kết quả 懂", f: "听/看 + 懂", e: "Nghe hiểu / đọc hiểu. Phủ định: 听不懂 (nghe không hiểu) hoặc 没听懂 (đã không nghe hiểu).",
        x: [["对不起，|我|听|不|懂。", "Duìbuqǐ, wǒ tīng bu dǒng.", "Xin lỗi, tôi nghe không hiểu."]] },
      { t: "Nhờ nói lại", f: "请 + (你) + 再说一遍 / 说慢一点儿", e: "Hai câu “cứu mạng” khi giao tiếp.",
        x: [["请|再|说|一遍。", "Qǐng zài shuō yí biàn.", "Xin nói lại một lần nữa."], ["请|说|慢|一点儿。", "Qǐng shuō màn yìdiǎnr.", "Xin nói chậm một chút."]] },
      { t: "Hỏi nghĩa", f: "… 是什么意思？", e: "Hỏi một từ nghĩa là gì.",
        x: [["“加油”|是|什么|意思？", "“Jiāyóu” shì shénme yìsi?", "“加油” nghĩa là gì?"]] }
    ],
    dialogue: [
      ["A", "你好！我叫李明，……（说得很快）", "Nǐ hǎo! Wǒ jiào Lǐ Míng, …… (shuō de hěn kuài)", "Chào bạn! Tôi là Lý Minh… (nói rất nhanh)"],
      ["B", "对不起，我没听懂。请说慢一点儿。", "Duìbuqǐ, wǒ méi tīngdǒng. Qǐng shuō màn yìdiǎnr.", "Xin lỗi, tôi chưa nghe hiểu. Xin nói chậm chút."],
      ["A", "没问题！我—叫—李—明。", "Méi wèntí! Wǒ — jiào — Lǐ — Míng.", "Không vấn đề! Tôi — tên — là — Lý — Minh."],
      ["B", "明白了！谢谢！", "Míngbai le! Xièxie!", "Hiểu rồi! Cảm ơn!"]
    ],
    fun: "加油 (jiāyóu) nghĩa đen là “đổ thêm dầu” nhưng dùng để cổ vũ “Cố lên!”. 学汉语，加油！💪"
  },
  {
    id: 26, title: "Sau khi tốt nghiệp", zh: "毕业以后你打算做什么？", emoji: "🎓",
    goal: "Nói về công việc, phỏng vấn, kế hoạch tương lai; 以后, 希望, 一边…一边….",
    words: [
      ["毕业", "bì yè", "tất nghiệp", "tốt nghiệp", "to graduate", "TẤT (hoàn tất) + NGHIỆP (việc học)."],
      ["工作", "gōng zuò", "công tác", "công việc; làm việc", "work; job", "CÔNG TÁC."],
      ["找", "zhǎo", "trảo", "tìm", "to look for", "Có 扌 (tay): tay lục lọi đi tìm."],
      ["面试", "miàn shì", "diện thí", "phỏng vấn", "job interview", "DIỆN (mặt đối mặt) + THÍ (thi)."],
      ["经验", "jīng yàn", "kinh nghiệm", "kinh nghiệm", "experience", "KINH NGHIỆM!"],
      ["经理", "jīng lǐ", "kinh lý", "giám đốc, quản lý", "manager", "KINH LÝ = người quản lý."],
      ["机会", "jī huì", "cơ hội", "cơ hội", "opportunity", "CƠ HỘI!"],
      ["希望", "xī wàng", "hy vọng", "hy vọng", "to hope", "HY VỌNG!"],
      ["努力", "nǔ lì", "nỗ lực", "cố gắng", "to work hard", "NỖ LỰC!"],
      ["成功", "chéng gōng", "thành công", "thành công", "success", "THÀNH CÔNG!"],
      ["准备", "zhǔn bèi", "chuẩn bị", "chuẩn bị", "to prepare", "CHUẨN BỊ!"],
      ["以后", "yǐ hòu", "dĩ hậu", "sau này, sau khi", "after, later", "HẬU = sau."]
    ],
    grammar: [
      { t: "以后 (sau khi)", f: "V/Sự kiện + 以后，…", e: "Ngược tiếng Việt: “sau khi tốt nghiệp” → 毕业以后.",
        x: [["毕业|以后，|我|想|去|中国|工作。", "Bìyè yǐhòu, wǒ xiǎng qù Zhōngguó gōngzuò.", "Sau khi tốt nghiệp, tôi muốn sang Trung Quốc làm việc."]] },
      { t: "一边…一边…", f: "S + 一边 + V1 + 一边 + V2", e: "Vừa… vừa… (hai việc cùng lúc).",
        x: [["我|一边|工作，|一边|学|汉语。", "Wǒ yìbiān gōngzuò, yìbiān xué Hànyǔ.", "Tôi vừa đi làm vừa học tiếng Trung."]] },
      { t: "希望 (hy vọng)", f: "S + 希望 + mệnh đề", e: "Bày tỏ mong muốn.",
        x: [["我|希望|面试|成功！", "Wǒ xīwàng miànshì chénggōng!", "Tôi hy vọng phỏng vấn thành công!"]] }
    ],
    dialogue: [
      ["A", "你在找工作吗？", "Nǐ zài zhǎo gōngzuò ma?", "Bạn đang tìm việc à?"],
      ["B", "对，明天有一个面试，是中国公司。", "Duì, míngtiān yǒu yí ge miànshì, shì Zhōngguó gōngsī.", "Ừ, mai có buổi phỏng vấn, là công ty Trung Quốc."],
      ["A", "你准备好了吗？", "Nǐ zhǔnbèi hǎo le ma?", "Bạn chuẩn bị xong chưa?"],
      ["B", "准备好了！我一边工作一边学了一年汉语。", "Zhǔnbèi hǎo le! Wǒ yìbiān gōngzuò yìbiān xué le yì nián Hànyǔ.", "Xong rồi! Tôi vừa làm vừa học tiếng Trung một năm."],
      ["A", "太棒了！祝你成功！", "Tài bàng le! Zhù nǐ chénggōng!", "Tuyệt quá! Chúc bạn thành công!"]
    ],
    fun: "Bạn đã đi hết 26 bài! Giờ có thể tự tin nói: 我会说汉语 (Tôi biết nói tiếng Trung). Phần thưởng của Adam Khoo: hãy tự thưởng cho mình một bữa 火锅 (lẩu) 🍲"
  }
  ]
}
];
