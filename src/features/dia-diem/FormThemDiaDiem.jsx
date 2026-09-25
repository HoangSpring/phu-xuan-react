import { useState } from 'react';

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
  
  // State mảng riêng cho nhóm hộp kiểm tiện ích
  const [tienIch, setTienIch] = useState([]);

  // Handler duy nhất cho các ô nhập thuộc object duLieu
  function xuLyThayDoi(e) {
    const { name, value, type, checked } = e.target;
    setDuLieu((truoc) => ({
      ...truoc,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  // Handler riêng cho nhóm tiện ích (mảng)
  function xuLyTich(e) {
    const { value, checked } = e.target;
    setTienIch((truoc) =>
      checked ? [...truoc, value] : truoc.filter((m) => m !== value)
    );
  }

  return (
    <form>
      {/* 1. Tên địa điểm */}
      <div className="truong">
        <label htmlFor="ten">Tên địa điểm</label>
        <input
          id="ten"
          name="ten"
          type="text"
          value={duLieu.ten}
          onChange={xuLyThayDoi}
          placeholder="Ví dụ: Lăng Minh Mạng"
        />
      </div>

      {/* 2. Mô tả ngắn */}
      <div className="truong">
        <label htmlFor="moTa">Mô tả ngắn</label>
        <textarea
          id="moTa"
          name="moTa"
          rows={4}
          value={duLieu.moTa}
          onChange={xuLyThayDoi}
        />
      </div>

      {/* 3. Giá vé (Lab 2) */}
      <div className="truong">
        <label htmlFor="giaVe">Giá vé (VNĐ)</label>
        <input
          id="giaVe"
          name="giaVe"
          type="number"
          value={duLieu.giaVe}
          onChange={xuLyThayDoi}
          placeholder="0"
        />
      </div>

      {/* 4. Phường / xã */}
      <div className="truong">
        <label htmlFor="phuong">Phường / xã</label>
        <select
          id="phuong"
          name="phuong"
          value={duLieu.phuong}
          onChange={xuLyThayDoi}
        >
          <option value="">-- Chọn phường --</option>
          <option value="phu-hau">Phú Hậu</option>
          <option value="huong-long">Hương Long</option>
          <option value="thuy-bieu">Thuỷ Biều</option>
          <option value="vy-da">Vỹ Dạ</option>
        </select>
      </div>

      {/* 5. Nhóm nút chọn Loại hình (Lab 2) */}
      <fieldset>
        <legend>Loại hình</legend>
        <label>
          <input
            name="loaiHinh"
            type="radio"
            value="di-tich"
            checked={duLieu.loaiHinh === 'di-tich'}
            onChange={xuLyThayDoi}
          />
          Di tích lịch sử
        </label>
        <label style={{ marginLeft: '12px' }}>
          <input
            name="loaiHinh"
            type="radio"
            value="am-thuc"
            checked={duLieu.loaiHinh === 'am-thuc'}
            onChange={xuLyThayDoi}
          />
          Điểm ẩm thực
        </label>
      </fieldset>

      {/* 6. Nhóm hộp kiểm Tiện ích (Lab 2) */}
      <fieldset>
        <legend>Tiện ích tại điểm đến</legend>
        {DS_TIEN_ICH.map((ti) => (
          <label key={ti.ma} style={{ marginRight: '12px', display: 'inline-block' }}>
            <input
              type="checkbox"
              value={ti.ma}
              checked={tienIch.includes(ti.ma)}
              onChange={xuLyTich}
            />
            {ti.ten}
          </label>
        ))}
      </fieldset>

      {/* 7. Hộp kiểm đơn Xác nhận (Lab 2) */}
      <div className="truong" style={{ marginTop: '12px' }}>
        <label>
          <input
            name="dongY"
            type="checkbox"
            checked={duLieu.dongY}
            onChange={xuLyThayDoi}
          />
          Tôi xác nhận thông tin địa điểm là chính xác
        </label>
      </div>
    </form>
  );
}