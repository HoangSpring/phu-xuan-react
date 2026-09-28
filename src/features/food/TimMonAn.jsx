import { useRef, useEffect, useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import danhSachMonAn from '../../data/mon-an.json';

function TimMonAn() {
  const oTimKiemRef = useRef(null);
  const [tuKhoa, setTuKhoa] = useState('');

  // 1. Áp dụng Custom Hook useDebounce (Lab 5)
  const tuKhoaDaTre = useDebounce(tuKhoa, 300);

  // 2. Bộ đếm số lần render bằng useRef (Lab 3)
  const soLanRenderRef = useRef(0);
  soLanRenderRef.current = soLanRenderRef.current + 1;

  // 3. Tự động focus ô tìm kiếm khi mount (Lab 3)
  useEffect(() => {
    if (oTimKiemRef.current) {
      oTimKiemRef.current.focus();
    }
  }, []);

  // 4. Lọc danh sách theo từ khóa đã debounce
  const danhSachLoc = danhSachMonAn.filter((mon) => {
    if (!tuKhoaDaTre.trim()) return true;
    return mon.ten.toLowerCase().includes(tuKhoaDaTre.toLowerCase());
  });

  // Log kiểm chứng: Chỉ in ra khi tuKhoaDaTre thay đổi (ngừng gõ 300ms)
  useEffect(() => {
    if (tuKhoaDaTre.trim()) {
      console.log('Đang lọc theo từ khoá:', tuKhoaDaTre);
    }
  }, [tuKhoaDaTre]);

  return (
    <div
      style={{
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        padding: '1.2rem',
        marginTop: '1.5rem',
        backgroundColor: '#fafafa',
        maxWidth: '500px',
      }}
    >
      <h3 style={{ marginTop: 0, color: '#333' }}>
        Tìm Kiếm Món Ăn (Tích hợp Lab 3 & Lab 5)
      </h3>

      {/* Input với useRef focus & onChange state */}
      <input
        ref={oTimKiemRef}
        type="text"
        value={tuKhoa}
        onChange={(e) => setTuKhoa(e.target.value)}
        placeholder="Gõ nhanh: bún bò, cơm hến, bánh bèo…"
        style={{
          width: '100%',
          padding: '8px 12px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          fontSize: '14px',
          boxSizing: 'border-box',
        }}
      />

      <div style={{ marginTop: '12px', fontSize: '13px', color: '#555' }}>
        <p style={{ margin: '4px 0' }}>
          Từ khóa nhập (realtime): <strong>{tuKhoa || '(trống)'}</strong>
        </p>
        <p style={{ margin: '4px 0', color: '#2e7d32' }}>
          Từ khóa đã debounce (300ms): <strong>{tuKhoaDaTre || '(trống)'}</strong>
        </p>
      </div>

      {/* Hiển thị danh sách kết quả */}
      <h4 style={{ marginBottom: '8px', marginTop: '16px' }}>Kết quả tìm kiếm:</h4>
      {danhSachLoc.length > 0 ? (
        <ul style={{ paddingLeft: '20px', margin: 0 }}>
          {danhSachLoc.map((mon) => (
            <li key={mon.id} style={{ marginBottom: '4px' }}>
              <strong>{mon.ten}</strong> - {mon.gia.toLocaleString('vi-VN')}đ
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ color: '#d32f2f', margin: 0 }}>Không tìm thấy món ăn phù hợp.</p>
      )}

      {/* Thẻ đếm số lần render */}
      <div
        style={{
          marginTop: '16px',
          padding: '8px 12px',
          backgroundColor: '#fff3e0',
          borderRadius: '4px',
          fontSize: '13px',
          color: '#e65100',
        }}
      >
        ⚡ Component đã render: <strong>{soLanRenderRef.current}</strong> lần.
      </div>
    </div>
  );
}

export default TimMonAn;