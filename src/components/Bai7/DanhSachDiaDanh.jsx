import { useState } from 'react';
import { DS_DIA_DANH } from '../../data/diaDanhHue';
import TheDiaDanh from './TheDiaDanh';

const TAT_CA = 'Tất cả';
const CAC_LOAI = [TAT_CA, ...new Set(DS_DIA_DANH.map((dd) => dd.loai))];

export default function DanhSachDiaDanh() {
  const [dsDaChon, setDsDaChon] = useState([]); // Mảng lưu danh sách ID theo thứ tự người dùng chọn
  const [loaiDangLoc, setLoaiDangLoc] = useState(TAT_CA);

  // Giá trị suy ra (Derived State) — Tính toán trực tiếp khi render, không cần tạo state riêng
  const dsHienThi = loaiDangLoc === TAT_CA
    ? DS_DIA_DANH
    : DS_DIA_DANH.filter((dd) => dd.loai === loaiDangLoc);

  // Hàm xử lý chọn/bỏ chọn từng địa danh (truyền xuống component con qua prop onChon)
  function handleChon(id) {
    setDsDaChon((truoc) =>
      truoc.includes(id) ? truoc.filter((x) => x !== id) : [...truoc, id]
    );
  }

  // Đọc giá trị từ thuộc tính data-loai thông qua e.currentTarget.dataset
  function handleLocLoai(e) {
    setLoaiDangLoc(e.currentTarget.dataset.loai);
  }

  // Chọn tất cả các địa danh đang được hiển thị theo bộ lọc, tránh trùng lặp ID
  function handleChonTatCa() {
    setDsDaChon((truoc) => {
      const moi = dsHienThi
        .map((dd) => dd.id)
        .filter((id) => !truoc.includes(id));
      return [...truoc, ...moi];
    });
  }

  const lichTrinh = dsDaChon
    .map((id) => DS_DIA_DANH.find((dd) => dd.id === id)?.ten)
    .filter(Boolean)
    .join(' → ');

  return (
    <section className="lab">
      <h2>Lab 2 — Lịch trình của bạn ({dsDaChon.length}/{DS_DIA_DANH.length})</h2>

      <div className="thanh-loc">
        {CAC_LOAI.map((loai) => (
          <button
            key={loai}
            data-loai={loai}
            className={loai === loaiDangLoc ? 'dang-loc' : ''}
            onClick={handleLocLoai}
          >
            {loai}
          </button>
        ))}
      </div>

      <div className="thanh-cong-cu">
        <button onClick={handleChonTatCa}>Chọn tất cả đang hiển thị</button>
        <button onClick={() => setDsDaChon([])} disabled={dsDaChon.length === 0}>
          Bỏ chọn
        </button>
      </div>

      <ul className="ds-dia-danh">
        {dsHienThi.map((dd) => (
          <TheDiaDanh
            key={dd.id}
            diaDanh={dd}
            dangChon={dsDaChon.includes(dd.id)}
            onChon={handleChon}
          />
        ))}
      </ul>

      <p className="lich-trinh">
        {lichTrinh ? 'Lộ trình: ' + lichTrinh : 'Chưa chọn địa danh nào.'}
      </p>
    </section>
  );
}