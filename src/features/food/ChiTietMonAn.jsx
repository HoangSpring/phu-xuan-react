import { useState, useEffect } from 'react';
import fetchMonAn from '../../data/fetchMonAn';

function ChiTietMonAn({ idMonAn }) {
  const [monAn, setMonAn] = useState(null);
  const [dangTai, setDangTai] = useState(true);

  useEffect(() => {
    let daHuy = false;
    setDangTai(true);

    fetchMonAn(idMonAn).then((data) => {
      if (!daHuy) {
        setMonAn(data);
        setDangTai(false);
      }
    });

    return () => {
      daHuy = true;
    };
  }, [idMonAn]);

  if (dangTai) {
    return (
      <p style={{ fontStyle: 'italic', color: '#666', marginTop: '1rem' }}>
        Đang tải thông tin món ăn…
      </p>
    );
  }

  return (
    <div
      style={{
        border: '1px solid #4caf50',
        borderRadius: '8px',
        padding: '1rem',
        marginTop: '1rem',
        backgroundColor: '#f1f8e9',
        maxWidth: '400px',
      }}
    >
      <h3 style={{ margin: '0 0 8px 0', color: '#2e7d32' }}>
        {monAn.ten} — {monAn.gia.toLocaleString('vi-VN')}đ
      </h3>
      <p style={{ margin: 0, color: '#333' }}>{monAn.moTa}</p>
    </div>
  );
}

export default ChiTietMonAn;