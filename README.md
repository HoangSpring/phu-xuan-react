
---

## 1. Hình ảnh giao diện thực tế

### Trang Tour Huế
![Giao diện Tour Huế](./1790306504150_187145961479478437_7299097511803627638_58828947e04efe7ee75d01458bd9f7b2.jpg)

### Trang Di tích Huế (Module mới Lab 4)
![Giao diện Di tích Huế](./1790306515118_187145961479478437_7299097511803627638_09ac823b61772983888bb7341497ddb2.jpg)

---

## 2. Sơ đồ cây thành phần (Component Tree)

```text
App
├── Navigation (Tab selector: 'tour' | 'ditich')
├── TourListContainer (khi chọn tab 'tour')
└── DiTichListView (khi chọn tab 'ditich' - gọi custom hook `useDiTichList`)
    └── PageLayout (Named Slots Pattern)
        ├── SearchBox (slot: header)
        ├── DiTichFilter (slot: sidebar)
        └── DiTichCard × N (slot: main)