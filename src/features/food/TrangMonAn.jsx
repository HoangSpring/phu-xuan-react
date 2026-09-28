import { useState } from 'react';
import ChiTietMonAn from './ChiTietMonAn';

function TrangMonAn() {
  const [idDangChon, setIdDangChon] = useState(1);

  const danhSachNut = [
    { id: 1, ten: 'Bún bò Huế' },
    { id: 2, ten: 'Cơm hến' },
    { id: 3, ten: 'Bánh bèo' },
    { id: 4, ten: 'Nem lụi' },
  ];

  return (
    <div style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '8px', marginTop: '1.5rem' }}>
      <h2 style={{ marginTop: 0 }}>Ẩm thực Huế (Lab 2)</h2>
      
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {danhSachNut.map((mon) => (
          <button
            key={mon.id}
            onClick={() => setIdDangChon(mon.id)}
            style={{
              padding: '6px 12px',
              borderRadius: '4px',
              border: idDangChon === mon.id ? '2px solid #2e7d32' : '1px solid #ccc',
              backgroundColor: idDangChon === mon.id ? '#e8f5e9' : '#fff',
              fontWeight: idDangChon === mon.id ? 'bold' : 'normal',
              cursor: 'pointer',
            }}
          >
            {mon.ten}
          </button>
        ))}
      </div>

      <ChiTietMonAn idMonAn={idDangChon} />
    </div>
  );
}

export default TrangMonAn;