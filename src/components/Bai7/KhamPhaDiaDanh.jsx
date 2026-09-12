import { useState } from 'react';
import { DS_DIA_DANH } from '../../data/diaDanhHue';
import TheDiaDanhMoRong from './TheDiaDanhMoRong';

export default function KhamPhaDiaDanh() {
  const [idDangMo, setIdDangMo] = useState(null);
  const [dsYeuThich, setDsYeuThich] = useState([]);
  const [soTuongTac, setSoTuongTac] = useState(0);

  // Toggle mở / đóng chi tiết thẻ địa danh
  function handleXem(id) {
    setIdDangMo((truoc) => (truoc === id ? null : id));
  }

  function handleYeuThich(id) {
    setDsYeuThich((truoc) =>
      truoc.includes(id) ? truoc.filter((x) => x !== id) : [...truoc, id]
    );
  }

  return (
    /* 
      onClickCapture chạy ở pha bắt (Capture phase), bắt sự kiện từ ngoài vào trong 
      nên sẽ đếm được TẤT CẢ tương tác ngay cả khi nút con gọi e.stopPropagation()
    */
    <section className="lab" onClickCapture={() => setSoTuongTac((t) => t + 1)}>
      <h2>Lab 3 — Khám phá địa danh</h2>
      <p className="thong-ke">
        Số lượt tương tác: {soTuongTac} · Yêu thích: {dsYeuThich.length}
      </p>
      <div className="luoi-the">
        {DS_DIA_DANH.map((dd) => (
          <TheDiaDanhMoRong
            key={dd.id}
            diaDanh={dd}
            dangMo={dd.id === idDangMo}
            laYeuThich={dsYeuThich.includes(dd.id)}
            onXem={handleXem}
            onYeuThich={handleYeuThich}
          />
        ))}
      </div>
    </section>
  );
}