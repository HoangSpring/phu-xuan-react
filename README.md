📸 Ảnh chụp giao diện
![image](/anh-chup/Screenshot 2026-09-25 144401.png)
🧩 Các thành phần đã xây dựng (Components)
1. TheDiaDanh (src/components/TheDiaDanh.jsx)
Thành phần hiển thị thẻ địa danh tái sử dụng qua props (anh, ten, moTa).

Đã cấu hình các giá trị mặc định cho props khi không được truyền vào.

2. The (src/components/The.jsx)
Khung hiển thị linh hoạt sử dụng children.

Hỗ trợ thanh tiêu đề tùy chọn (tieuDe).

3. BoCucTrang (src/components/BoCucTrang.jsx)
Quản lý bố cục trang tổng thể với 3 khe JSX riêng biệt:

thanhDieuHuong: Header/Thanh điều hướng trên cùng.

noiDungChinh: Phần nội dung trung tâm của trang.

chanTrang: Footer ở cuối trang.

4. HopThongBao & HopThongBaoThanhCong (src/components/HopThongBao.jsx)
HopThongBao: Thành phần tổng quát nhận mauNen qua prop và nội dung qua children (Composition).

HopThongBaoThanhCong: Biến thể chuyên biệt hóa (Specialization) được xây dựng từ HopThongBao với màu nền và tiền tố định dạng sẵn.

5. HuyHieu (src/components/HuyHieu.jsx) (Lab 5 - Thử thách)
Thành phần nhãn huy hiệu linh hoạt phối hợp cả props và children.

6. TrangDanhMuc (src/pages/TrangDanhMuc.jsx)
Trang danh mục hoàn chỉnh kết hợp tất cả các thành phần trên, render danh sách địa danh từ dữ liệu mẫu DANH_SACH_DIA_DANH.

💡 Giải thích thiết kế Lab 5 (Thành phần HuyHieu)
Trong bài tập nâng cao Lab 5, thành phần HuyHieu được thiết kế dựa trên sơ đồ quyết định props vs children:

Sử dụng Prop (mau): Dùng để cấu hình giao diện/kiểu dáng (primary, success, danger, warning, info). Vì tập hợp các biến thể màu sắc là cố định, việc truyền qua prop giúp kiểm soát thiết kế đồng nhất và dễ dàng mở rộng.

Sử dụng children: Dùng cho phần nội dung hiển thị bên trong nhãn (ví dụ: "Cập nhật 2026", "Di sản", "Sẵn sàng"). Việc dùng children cho phép linh hoạt chèn thêm văn bản, biểu tượng (icon) hoặc các phần tử JSX khác mà không bị giới hạn bởi kiểu chuỗi thuần túy.

