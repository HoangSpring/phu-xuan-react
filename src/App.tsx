import { useState } from 'react';
import LuotXemDaiNoi from './features/landmarks/LuotXemDaiNoi';
import TrangMonAn from './features/food/TrangMonAn';
import TimMonAn from './features/food/TimMonAn';
import DanhSachDiaDanh from './features/landmarks/DanhSachDiaDanh';

function App() {
  const [hienThi, setHienThi] = useState(true);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '650px', margin: '0 auto' }}>
      <h1>Bài 6: React Hook Nâng Cao</h1>

      {/* Lab 1 */}
      <section style={{ marginBottom: '2rem' }}>
        <h2>Lab 1: Lượt xem Đại Nội Huế</h2>
        <button
          onClick={() => setHienThi(!hienThi)}
          style={{
            padding: '8px 16px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          {hienThi ? 'Ẩn thẻ Đại Nội' : 'Hiện thẻ Đại Nội'}
        </button>
        {hienThi && <LuotXemDaiNoi />}
      </section>

      <hr />

      {/* Lab 2 */}
      <section style={{ marginBottom: '2rem' }}>
        <TrangMonAn />
      </section>

      <hr />

      {/* Lab 3 */}
      <section style={{ marginBottom: '2rem' }}>
        <TimMonAn />
      </section>

      <hr />

      {/* Lab 4 */}
      <section>
        <DanhSachDiaDanh />
      </section>
    </div>
  );
}

export default App;