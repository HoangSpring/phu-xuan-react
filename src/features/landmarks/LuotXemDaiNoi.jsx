import { useState, useEffect } from 'react';

function LuotXemDaiNoi() {
  const [luotXem, setLuotXem] = useState(120);

  useEffect(() => {
    console.log('Đã gắn component — bắt đầu đếm lượt xem');

    // Khởi tạo interval tăng lượt xem mỗi 1 giây
    const idBoDem = setInterval(() => {
      setLuotXem((soCu) => soCu + 1);
    }, 1000);

    // Hàm dọn dẹp (cleanup function) chạy khi component unmount
    return () => {
      console.log('Dọn dẹp: đã huỷ bộ đếm lượt xem');
      clearInterval(idBoDem);
    };
  }, []); // Mảng phụ thuộc rỗng: chỉ chạy 1 lần duy nhất khi mount

  return (
    <div
      className="the-luot-xem"
      style={{
        border: '1px solid #1976d2',
        borderRadius: '8px',
        padding: '1rem',
        marginTop: '1rem',
        backgroundColor: '#e3f2fd',
        maxWidth: '300px',
      }}
    >
      <h3 style={{ margin: '0 0 8px 0', color: '#0d47a1' }}>Đại Nội Huế</h3>
      <p style={{ margin: 0, fontWeight: 'bold' }}>Đang xem: {luotXem} lượt</p>
    </div>
  );
}

export default LuotXemDaiNoi;