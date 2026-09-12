import { useRef, useState } from 'react';

export default function ThuSuKien() {
  const [soLanBam, setSoLanBam] = useState(0);
  const [nhatKy, setNhatKy] = useState([]);
  const demId = useRef(0); // Bộ đếm ID duy nhất cho từng dòng log (kế thừa Bài 6)

  // Hàm tiện ích: thêm một dòng lên đầu nhật ký, giữ tối đa 5 dòng
  function ghiNhatKy(noiDung) {
    demId.current += 1;
    const dong = { id: demId.current, noiDung };
    setNhatKy((truoc) => [dong, ...truoc].slice(0, 5));
  }

  function handleBamNut() {
    setSoLanBam((so) => so + 1);
    ghiNhatKy('Bấm nút "Bắt đầu hành trình"');
  }

  function handleBamThe(e) {
    ghiNhatKy(
      'type=' + e.type +
      ' | target=' + e.target.tagName +
      ' | currentTarget=' + e.currentTarget.tagName
    );
  }

  return (
    <section className="lab">
      <h2>Lab 1 — Sự kiện đầu tiên</h2>

      <button onClick={handleBamNut}>Bắt đầu hành trình ({soLanBam})</button>

      <div className="the-thu" onClick={handleBamThe}>
        <span className="ten">Lăng Tự Đức</span>
        <span className="loai">Lăng tẩm</span>
      </div>

      <h3>Nhật ký sự kiện (5 dòng gần nhất)</h3>
      <ol className="nhat-ky">
        {nhatKy.map((dong) => (
          <li key={dong.id}>{dong.noiDung}</li>
        ))}
      </ol>
    </section>
  );
}