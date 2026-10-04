import { useState } from 'react';
import { kiemChung } from './kiemChung';

const GIA_TRI_BAN_DAU = {
  ten: '',
  moTa: '',
  giaVe: '',
  phuong: '',
  loaiHinh: 'di-tich',
  dongY: false,
};

const DS_TIEN_ICH = [
  { ma: 'bai-xe', ten: 'Bãi đỗ xe' },
  { ma: 'huong-dan', ten: 'Có hướng dẫn viên' },
  { ma: 've-online', ten: 'Bán vé trực tuyến' },
  { ma: 'khu-ve-sinh', ten: 'Khu vệ sinh công cộng' },
];

export default function FormThemDiaDiem() {
  const [duLieu, setDuLieu] = useState(GIA_TRI_BAN_DAU);
  const [tienIch, setTienIch] = useState([]);
  const [daCham, setDaCham] = useState({});
  const [trangThai, setTrangThai] = useState('cho'); // cho | dang-gui | thanh-cong | that-bai

  // Lỗi là trạng thái dẫn xuất — tính lại mỗi lần kết xuất, KHÔNG lưu thành state
  const loi = kiemChung(duLieu);

  // Handler xử lý thay đổi cho các ô nhập
  function xuLyThayDoi(e) {
    const { name, value, type, checked } = e.target;
    setDuLieu((truoc) => ({
      ...truoc,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  // Handler riêng cho nhóm hộp kiểm Tiện ích
  function xuLyTich(e) {
    const { value, checked } = e.target;
    setTienIch((truoc) =>
      checked ? [...truoc, value] : truoc.filter((m) => m !== value)
    );
  }

  // Đánh dấu ô đã bị rời đi (onBlur)
  function xuLyRoiO(e) {
    const { name } = e.target;
    setDaCham((truoc) => ({ ...truoc, [name]: true }));
  }

  // Hàm trả về lỗi chỉ khi ô đó đã bị chạm
  function loiHienThi(ten) {
    return daCham[ten] ? loi[ten] : undefined;
  }

  // Xử lý gửi biểu mẫu
  async function xuLyGui(e) {
    e.preventDefault();

    // Đánh dấu mọi ô là đã chạm để lộ hết lỗi còn sót
    const tatCaDaCham = {};
    Object.keys(GIA_TRI_BAN_DAU).forEach((k) => {
      tatCaDaCham[k] = true;
    });
    setDaCham(tatCaDaCham);

    // Dừng lại nếu còn lỗi
    if (Object.keys(kiemChung(duLieu)).length > 0) return;

    try {
      setTrangThai('dang-gui');
      await new Promise((giai) => setTimeout(giai, 1200)); // Giả lập gọi máy chủ 1.2s
      setTrangThai('thanh-cong');
      setDuLieu(GIA_TRI_BAN_DAU);
      setTienIch([]);
      setDaCham({});
    } catch {
      setTrangThai('that-bai');
    }
  }

  return (
    <form
      onSubmit={xuLyGui}
      noValidate
      className="form-them-dia-diem"
      style={{
        maxWidth: '500px',
        margin: '20px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
      }}
    >
      <h2>Thêm địa điểm tham quan</h2>

      {/* 1. Tên địa điểm */}
      <div className="truong" style={{ marginBottom: '15px' }}>
        <label htmlFor="ten" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
          Tên địa điểm
        </label>
        <input
          id="ten"
          name="ten"
          type="text"
          value={duLieu.ten}
          onChange={xuLyThayDoi}
          onBlur={xuLyRoiO}
          aria-invalid={loiHienThi('ten') ? true : undefined}
          placeholder="Ví dụ: Lăng Minh Mạng"
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
        {loiHienThi('ten') && (
          <p role="alert" className="thong-bao-loi" style={{ color: 'red', margin: '5px 0 0 0', fontSize: '14px' }}>
            {loiHienThi('ten')}
          </p>
        )}
      </div>

      {/* 2. Mô tả ngắn */}
      <div className="truong" style={{ marginBottom: '15px' }}>
        <label htmlFor="moTa" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
          Mô tả ngắn
        </label>
        <textarea
          id="moTa"
          name="moTa"
          rows={4}
          value={duLieu.moTa}
          onChange={xuLyThayDoi}
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
      </div>

      {/* 3. Giá vé (VNĐ) */}
      <div className="truong" style={{ marginBottom: '15px' }}>
        <label htmlFor="giaVe" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
          Giá vé (VNĐ)
        </label>
        <input
          id="giaVe"
          name="giaVe"
          type="number"
          value={duLieu.giaVe}
          onChange={xuLyThayDoi}
          onBlur={xuLyRoiO}
          aria-invalid={loiHienThi('giaVe') ? true : undefined}
          placeholder="0"
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
        {loiHienThi('giaVe') && (
          <p role="alert" className="thong-bao-loi" style={{ color: 'red', margin: '5px 0 0 0', fontSize: '14px' }}>
            {loiHienThi('giaVe')}
          </p>
        )}
      </div>

      {/* 4. Phường / xã */}
      <div className="truong" style={{ marginBottom: '15px' }}>
        <label htmlFor="phuong" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
          Phường / xã
        </label>
        <select
          id="phuong"
          name="phuong"
          value={duLieu.phuong}
          onChange={xuLyThayDoi}
          onBlur={xuLyRoiO}
          aria-invalid={loiHienThi('phuong') ? true : undefined}
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        >
          <option value="">-- Chọn phường --</option>
          <option value="phu-hau">Phú Hậu</option>
          <option value="huong-long">Hương Long</option>
          <option value="thuy-bieu">Thuỷ Biều</option>
          <option value="vy-da">Vỹ Dạ</option>
        </select>
        {loiHienThi('phuong') && (
          <p role="alert" className="thong-bao-loi" style={{ color: 'red', margin: '5px 0 0 0', fontSize: '14px' }}>
            {loiHienThi('phuong')}
          </p>
        )}
      </div>

      {/* 5. Nhóm nút chọn Loại hình */}
      <fieldset style={{ marginBottom: '15px', padding: '10px', borderRadius: '4px' }}>
        <legend style={{ fontWeight: 'bold' }}>Loại hình</legend>
        <label style={{ marginRight: '15px', cursor: 'pointer' }}>
          <input
            name="loaiHinh"
            type="radio"
            value="di-tich"
            checked={duLieu.loaiHinh === 'di-tich'}
            onChange={xuLyThayDoi}
          />{' '}
          Di tích lịch sử
        </label>
        <label style={{ cursor: 'pointer' }}>
          <input
            name="loaiHinh"
            type="radio"
            value="am-thuc"
            checked={duLieu.loaiHinh === 'am-thuc'}
            onChange={xuLyThayDoi}
          />{' '}
          Điểm ẩm thực
        </label>
      </fieldset>

      {/* 6. Nhóm hộp kiểm Tiện ích */}
      <fieldset style={{ marginBottom: '15px', padding: '10px', borderRadius: '4px' }}>
        <legend style={{ fontWeight: 'bold' }}>Tiện ích tại điểm đến</legend>
        {DS_TIEN_ICH.map((ti) => (
          <label key={ti.ma} style={{ display: 'block', marginBottom: '5px', cursor: 'pointer' }}>
            <input
              type="checkbox"
              value={ti.ma}
              checked={tienIch.includes(ti.ma)}
              onChange={xuLyTich}
            />{' '}
            {ti.ten}
          </label>
        ))}
      </fieldset>

      {/* 7. Hộp kiểm đơn Xác nhận */}
      <div className="truong" style={{ marginBottom: '15px' }}>
        <label style={{ cursor: 'pointer', fontWeight: '500' }}>
          <input
            name="dongY"
            type="checkbox"
            checked={duLieu.dongY}
            onChange={xuLyThayDoi}
          />{' '}
          Tôi xác nhận thông tin địa điểm là chính xác
        </label>
        {loiHienThi('dongY') && (
          <p role="alert" className="thong-bao-loi" style={{ color: 'red', margin: '5px 0 0 0', fontSize: '14px' }}>
            {loiHienThi('dongY')}
          </p>
        )}
      </div>

      {/* Thông báo trạng thái gửi */}
      {trangThai === 'thanh-cong' && (
        <p className="thong-bao-thanh-cong" role="status" style={{ color: 'green', fontWeight: 'bold' }}>
          Đã thêm địa điểm thành công!
        </p>
      )}
      {trangThai === 'that-bai' && (
        <p className="thong-bao-loi" role="alert" style={{ color: 'red', fontWeight: 'bold' }}>
          Có lỗi khi gửi, vui lòng thử lại.
        </p>
      )}

      {/* Nút hành động */}
      <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
        <button
          type="submit"
          disabled={trangThai === 'dang-gui'}
          style={{
            padding: '8px 16px',
            backgroundColor: trangThai === 'dang-gui' ? '#ccc' : '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: trangThai === 'dang-gui' ? 'not-allowed' : 'pointer',
          }}
        >
          {trangThai === 'dang-gui' ? 'Đang lưu...' : 'Thêm địa điểm'}
        </button>
        <button
          type="button"
          onClick={() => {
            setDuLieu(GIA_TRI_BAN_DAU);
            setTienIch([]);
            setDaCham({});
            setTrangThai('cho');
          }}
          style={{
            padding: '8px 16px',
            backgroundColor: '#6c757d',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Nhập lại
        </button>
      </div>
    </form>
  );
}