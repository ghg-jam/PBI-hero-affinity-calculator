# 💖 Máy Tính Cấp Độ Thiện Cảm Anh Hùng

[English](../../README.md) | [繁體中文](README.zh-TW.md) | [简体中文](README.zh-CN.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Español](README.es.md) | [Français](README.fr.md) | [Deutsch](README.de.md) | [Português](README.pt.md) | **Tiếng Việt** | [ไทย](README.th.md) | [Bahasa Indonesia](README.id.md) | [Русский](README.ru.md) | [Türkçe](README.tr.md) | [Italiano](README.it.md) | [Polski](README.pl.md) | [العربية](README.ar.md) | [Filipino](README.fil.md)

Công cụ tính toán web miễn phí cho **Pixel Brave Idle**: nhập số quà bạn có, chọn phần thưởng độ thân thiết muốn đạt và biết cần ít nhất bao nhiêu quà mỗi loại.

Chạy hoàn toàn trên trình duyệt. Không cần tài khoản, không cần máy chủ, không tải dữ liệu lên.

**Dùng trực tuyến:** https://ghg-jam.github.io/PBI-hero-affinity-calculator/

> Công cụ không chính thức do người hâm mộ tạo. Không liên kết hay được nhà phát triển trò chơi chứng nhận.

<p>
  <img src="../phone-gifts.png" width="240">
  <img src="../phone-results.png" width="240">
</p>

## Tính năng

- Đếm quà của ba bậc (xanh lá / tím / vàng) và đánh dấu quà yêu thích.
- Mục tiêu phần thưởng: danh sách mốc có sẵn, mục tiêu tùy chỉnh và mục tiêu cuối.
- Nhiều combo (kế hoạch), mỗi combo có quy tắc cân bằng quà riêng: màu nào nhiều hơn và chênh lệch được giữ **trong một khoảng** (có sẵn mức nhanh như 0–25, 0–200), **lớn nhất** có thể hoặc **nhỏ nhất** có thể.
- Lập kế hoạch từ độ thân thiết hiện tại: ước tính quà đã dùng và chỉ tính các mốc còn lại.
- Kết quả: số lần đạt chính xác, phần dư và phần thiếu ở mỗi mốc, quà cần cho từng giai đoạn (kèm biểu tượng quà đã dùng), biểu đồ chênh lệch và thanh tiến độ. Kết quả chỉ thay đổi khi bạn nhấn **Tính tất cả combo**, và một thanh sẽ báo khi kết quả đã cũ.
- Tùy chọn nâng cao (mặc định ẩn): điểm bắt đầu của giới hạn chênh lệch, giới hạn “điểm vượt mục tiêu tối đa”, quà không yêu thích, giới hạn tổng theo màu, giới hạn theo từng quà (xóa tất cả bằng một chạm) và thứ tự dùng tùy chỉnh.
- Điền bằng AI: sao chép prompt, gửi kèm ảnh chụp cho một cuộc trò chuyện AI **mới**, rồi dán phản hồi JSON (hoặc nhập từ tệp). AI có thể đọc sai số, hãy luôn đối chiếu với game. Ngoài ra: lưu/tải dữ liệu, 18 ngôn ngữ, chế độ sáng/tối và 11 chủ đề màu.

## Cách dùng

1. **Quà**: nhập số lượng từng loại và đánh dấu sao cho quà yêu thích.
2. **Mục tiêu**: nhập độ thân thiết hiện tại (tùy chọn) và chọn các danh sách phần thưởng.
3. **Combo**: giữ mặc định hoặc chọn quy tắc chênh lệch (khoảng, lớn nhất hoặc nhỏ nhất) và mở *Cài đặt nâng cao*.
4. **Kết quả**: nhấn **Tính tất cả combo**, rồi xem cần dùng bao nhiêu mỗi loại quà.

## Chạy trên máy

- Tải `download/combo_calculator_single.html` rồi nhấp đúp để mở.
- Hoặc tải toàn bộ kho mã, giữ các thư mục `css`, `js`, `lang` cạnh `index.html` rồi mở `index.html`.

## Triển khai lên GitHub Pages

1. Tải **toàn bộ nội dung** thư mục lên thư mục gốc của kho mã (giữ nguyên cấu trúc thư mục).
2. Vào **Settings → Pages**, chọn nhánh main và thư mục gốc.
3. Sau khi cập nhật, hãy tải lại cứng (Ctrl/Cmd + Shift + R).

## Dành cho nhà phát triển

Cấu trúc dự án, cách đóng góp bản dịch và nhật ký thay đổi có trong [README tiếng Anh](../../README.md).

## Giấy phép

Giấy phép MIT (chỉ áp dụng cho mã nguồn).
