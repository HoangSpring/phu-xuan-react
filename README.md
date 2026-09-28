# Bài 7: Quản lý sự kiện trong React (Event Handling)

Dự án thực hành môn React JS — Báo cáo kết quả triển khai các Lab thực hành quản lý sự kiện, tối ưu trải nghiệm người dùng (UX) và hỗ trợ truy cập (Accessibility - A11y).

---

## 📸 Demo kết quả thực hiện Lab

### 1. Lab 1 & Lab 2 — Thử nghiệm sự kiện & Danh sách địa danh
* Phân biệt `e.target` và `e.currentTarget`.
* Xử lý chọn địa danh bằng bàn phím (Space/Enter) và lọc dữ liệu bằng `data-*`.
* Ngăn chặn nổi bọt sự kiện với `e.stopPropagation()` và ứng dụng pha bắt (`onClickCapture`).

![Demo Lab 1 & Lab 2](./lab12(bai7).jpg)

---

### 2. Lab 3 & Lab 4 — Lượt thích & Tìm kiếm món ăn Huế
* Cập nhật State dạng hàm callback `setX((prev) => ...)` tránh stale state.
* Xử lý form tìm kiếm với `e.preventDefault()`, không làm reload trang.
* Hỗ trợ phím tắt `Esc` để xóa nhanh từ khóa và tích hợp `e.nativeEvent.isComposing` hỗ trợ bộ gõ tiếng Việt (Telex/VNI).

![Demo Lab 3 & Lab 4](./lab34(bai7).jpg)

---

### 3. Lab 5 — Sắp xếp món ăn Huế yêu thích (Kéo thả & Phím tắt)
* Tính năng kéo thả danh sách bằng HTML5 Drag and Drop (`onDragStart`, `onDragOver`, `onDrop`, `onDragEnd`).
* Hỗ trợ thay đổi thứ tự bằng phím tắt `Alt + Mũi tên lên/xuống`.
* Tích hợp `aria-live="polite"` thông báo vị trí cho trình đọc màn hình.

![Demo Lab 5](./lab5(bai7).jpg)

---

## 🛠️ Công nghệ sử dụng
* **Core:** React JS (Vite)
* **Language:** JavaScript (ES6+)
* **Styling:** CSS3
* **Accessibility:** ARIA attributes, Keyboard Navigation

---

## 🚀 Hướng dẫn chạy dự án

1. **Cài đặt thư viện:**
   ```bash
   npm install