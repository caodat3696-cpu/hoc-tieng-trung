# 汉语 Từng Bước — App học tiếng Trung cho người Việt đi làm (0 → HSK3)

Web app chạy trên máy tính và điện thoại (PWA: "Thêm vào màn hình chính" là dùng như app, học offline được).
Không cần server, không cần đăng nhập; tiến độ lưu ngay trên máy.

## Chạy thử
Mở `index.html` bằng trình duyệt, hoặc đưa cả thư mục lên bất kỳ hosting tĩnh nào (GitHub Pages, Netlify, Vercel…).

## Cấu trúc
- `index.html`, `styles.css`, `app.js` — giao diện và logic
- `data/basics.js` — Ngữ âm & Chữ Hán (thanh điệu, pinyin, biến điệu, số đếm, nét, bộ thủ)
- `data/lessons.js` — 7 chủ đề / 26 bài: từ vựng (chữ Hán, pinyin, Hán Việt, nghĩa Việt, nghĩa Anh, mẹo nhớ), ngữ pháp, hội thoại, góc vui
- `manifest.webmanifest`, `sw.js`, `icon.svg` — để cài như app và học offline

## Mỗi bài học
Từ vựng → Thẻ nhớ (tự đưa vào lịch ôn) → Ngữ pháp → Hội thoại (nghe, ẩn nghĩa, nhập vai) → Luyện viết (tô chữ) → Kiểm tra (4 dạng + sắp xếp câu, đạt 70% để qua bài).

## Phương pháp
1. Mục tiêu & lý do học (Adam Khoo) hiện mỗi ngày trên trang chủ.
2. Liên tưởng qua âm Hán Việt — lợi thế riêng của người Việt.
3. Hình dung + câu chuyện hài hước tách chữ thành bộ thủ.
4. Tô màu thanh điệu (thanh 1 đỏ, 2 cam, 3 xanh lá, 4 xanh dương).
5. Sơ đồ tư duy cho từng chủ đề.
6. Học bằng 3 giác quan: nhìn – nghe (giọng đọc của máy) – viết.
7. Ôn tập ngắt quãng (SRS kiểu SM-2: 1 → 3 → 7 → 14 → 30+ ngày).
8. Tự kiểm tra (gợi nhớ chủ động), dạy lại người khác, tự thưởng, chuỗi ngày học 🔥.

## Thêm nội dung
Thêm từ vào mảng `words` của bài trong `data/lessons.js`:
`["汉字", "hàn zì", "Hán tự", "chữ Hán", "Chinese character", "mẹo nhớ"]` (pinyin tách theo âm tiết để tô màu đúng).
