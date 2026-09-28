import { useState } from 'react';
import { DS_MON_AN } from '../../data/monAnHue';

// Hàm thuần (Pure function): Trả về MẢNG MỚI với phần tử di chuyển từ vị trí tu -> den
function diChuyen(mang, tu, den) {
  const moi = [...mang];
  const [phanTu] = moi.splice(tu, 1);
  moi.splice(den, 0, phanTu);
  return moi;
}

export default function MonAnYeuThich() {
  const [dsMon, setDsMon] = useState(DS_MON_AN.slice(0, 5));
  const [idDangKeo, setIdDangKeo] = useState(null);
  const [idViTriTha, setIdViTriTha] = useState(null);
  const [thongBao, setThongBao] = useState('');

  function baoViTri(ds, id) {
    const viTri = ds.findIndex((m) => m.id === id);
    setThongBao('Đã chuyển ' + ds[viTri].ten + ' đến vị trí ' + (viTri + 1));
  }

  function handleDragStart(e, id) {
    setIdDangKeo(id);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', id); // Cần thiết để tương thích trên Firefox
  }

  function handleDragOver(e, id) {
    e.preventDefault(); // Cho phép thả phần tử
    if (id !== idViTriTha) setIdViTriTha(id);
  }

  function handleDrop(e, idDich) {
    e.preventDefault();
    if (idDangKeo === null || idDangKeo === idDich) return;
    const tu = dsMon.findIndex((m) => m.id === idDangKeo);
    const den = dsMon.findIndex((m) => m.id === idDich);
    const moi = diChuyen(dsMon, tu, den);
    setDsMon(moi);
    baoViTri(moi, idDangKeo);
  }

  function handleDragEnd() {
    setIdDangKeo(null);
    setIdViTriTha(null);
  }

  function handleKeyDown(e, viTri) {
    if (!e.altKey) return;
    const buoc = e.key === 'ArrowUp' ? -1 : e.key === 'ArrowDown' ? 1 : 0;
    if (buoc === 0) return;
    e.preventDefault(); // Chặn hành vi cuộn trang mặc định của phím mũi tên
    const den = viTri + buoc;
    if (den < 0 || den >= dsMon.length) return;
    const moi = diChuyen(dsMon, viTri, den);
    setDsMon(moi);
    baoViTri(moi, dsMon[viTri].id);
  }

  function handleXoa(id) {
    const mon = dsMon.find((m) => m.id === id);
    setDsMon((truoc) => truoc.filter((m) => m.id !== id));
    setThongBao('Đã xoá ' + mon.ten + ' khỏi danh sách');
  }

  return (
    <section className="lab">
      <h2>Lab 5 — Món Huế yêu thích của tôi</h2>
      <p className="goi-y-thao-tac">
        Kéo thả để sắp xếp, hoặc chọn một món rồi nhấn Alt + mũi tên lên/xuống.
      </p>

      <ol className="ds-mon-yeu-thich">
        {dsMon.map((mon, viTri) => (
          <li
            key={mon.id}
            draggable
            tabIndex={0}
            onDragStart={(e) => handleDragStart(e, mon.id)}
            onDragOver={(e) => handleDragOver(e, mon.id)}
            onDrop={(e) => handleDrop(e, mon.id)}
            onDragEnd={handleDragEnd}
            onKeyDown={(e) => handleKeyDown(e, viTri)}
            className={
              (mon.id === idDangKeo ? 'dang-keo ' : '') +
              (mon.id === idViTriTha && mon.id !== idDangKeo ? 'vi-tri-tha' : '')
            }
          >
            <span>{mon.ten}</span>
            <button
              aria-label={'Xoá ' + mon.ten}
              onClick={() => handleXoa(mon.id)}
              onKeyDown={(e) => e.stopPropagation()} // Chặn nổi bọt lên <li> để tránh kích hoạt phím tắt sắp xếp
            >
              Xoá
            </button>
          </li>
        ))}
      </ol>

      {/* Vùng thông báo hỗ trợ Accessibility / Trình đọc màn hình */}
      <p className="thong-bao" aria-live="polite">{thongBao}</p>
    </section>
  );
}