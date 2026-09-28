import { useState, useMemo, useCallback } from 'react';
import dsDiaDanh from '../../data/dia-danh.json';
import TheDiaDanh from './TheDiaDanh';

function DanhSachDiaDanh() {
  const [boLoc, setBoLoc] = useState('');
  const [danhSachYeuThich, setDanhSachYeuThich] = useState([]);

  // 1. useMemo: Tối ưu bộ lọc danh sách địa danh theo từ khóa
  const danhSachDaLoc = useMemo(() => {
    console.log('⚡ [useMemo] Đang tính toán lọc danh sách địa danh...');
    return dsDiaDanh.filter((dd) =>
      dd.ten.toLowerCase().includes(boLoc.toLowerCase())
    );
  }, [boLoc]); // Chỉ tính toán lại khi boLoc thay đổi

  // 2. useCallback: Khóa tham chiếu hàm themYeuThich
  const themYeuThich = useCallback((diaDanh) => {
    setDanhSachYeuThich((dsCu) => {
      if (dsCu.some((item) => item.id === diaDanh.id)) return dsCu;
      return [...dsCu, diaDanh];
    });
    alert(`Đã thêm "${diaDanh.ten}" vào danh sách yêu thích!`);
  }, []); // Mảng phụ thuộc rỗng giữ tham chiếu hàm ổn định

  return (
    <div
      style={{
        border: '1px solid #b2dfdb',
        borderRadius: '8px',
        padding: '1.2rem',
        marginTop: '1.5rem',
        backgroundColor: '#e0f2f1',
        maxWidth: '550px',
      }}
    >
      <h3 style={{ marginTop: 0, color: '#004d40' }}>
        Danh Sách Địa Danh Huế (Lab 4 - useMemo & useCallback)
      </h3>

      {/* Ô nhập bộ lọc */}
      <input
        type="text"
        value={boLoc}
        onChange={(e) => setBoLoc(e.target.value)}
        placeholder="Lọc địa danh theo tên (ví dụ: Lăng, Cầu...)"
        style={{
          width: '100%',
          padding: '8px 12px',
          marginBottom: '1rem',
          borderRadius: '4px',
          border: '1px solid #80cbd3',
          boxSizing: 'border-box',
        }}
      />

      <p style={{ fontSize: '13px', color: '#00695c', fontWeight: 'bold' }}>
        Hiển thị {danhSachDaLoc.length} / {dsDiaDanh.length} địa danh
      </p>

      {/* Hiển thị danh sách thẻ con */}
      <div>
        {danhSachDaLoc.map((dd) => (
          <TheDiaDanh key={dd.id} diaDanh={dd} onYeuThich={themYeuThich} />
        ))}
      </div>

      {/* Thống kê danh sách đã thả tim */}
      {danhSachYeuThich.length > 0 && (
        <div style={{ marginTop: '1rem', paddingTop: '10px', borderTop: '1px dashed #004d40' }}>
          <strong>Địa danh đã thích:</strong>{' '}
          {danhSachYeuThich.map((item) => item.ten).join(', ')}
        </div>
      )}
    </div>
  );
}

export default DanhSachDiaDanh;