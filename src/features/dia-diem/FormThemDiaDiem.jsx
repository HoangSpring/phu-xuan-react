import { useState } from 'react';
import { useForm } from '../../hooks/useForm';
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
  const {
    duLieu,
    trangThai,
    xuLyThayDoi,
    xuLyRoiO,
    loiCuaO,
    xuLyGui,
    datLai,
  } = useForm(GIA_TRI_BAN_DAU, kiemChung);

  const [tienIch, setTienIch] = useState([]);

  function xuLyTich(e) {
    const { value, checked } = e.target;
    setTienIch((truoc) =>
      checked ? [...truoc, value] : truoc.filter((m) => m !== value)
    );
  }

  const guiForm = xuLyGui(async (gt) => {
    await new Promise((r) => setTimeout(r, 1200));
    console.log('Dữ liệu đã gửi:', { ...gt, tienIch, giaVe: Number(gt.giaVe) });
    setTienIch([]);
  });

  return (
    <form onSubmit={guiForm} noValidate>
      {/* 1. Tên địa điểm */}
      <div className="truong">
        <label htmlFor="ten">Tên địa điểm (*)</label>
        <input
          id="ten"
          name="ten"
          type="text"
          value={duLieu.ten}
          onChange={xuLyThayDoi}
          onBlur={xuLyRoiO}
          placeholder="Ví dụ: Lăng Minh Mạng"
          aria-invalid={loiCuaO('ten') ? true : undefined}
        />
        {loiCuaO('ten') && (
          <p role="alert" className="thong-bao-loi" style={{ color: 'red' }}>
            {loiCuaO('ten')}
          </p>
        )}
      </div>

      {/* 2. Giá vé */}
      <div className="truong">
        <label htmlFor="giaVe">Giá vé (VNĐ) (*)</label>
        <input
          id="giaVe"
          name="giaVe"
          type="number"
          value={duLieu.giaVe}
          onChange={xuLyThayDoi}
          onBlur={xuLyRoiO}
          placeholder="0"
        />
        {loiCuaO('giaVe') && (
          <p role="alert" className="thong-bao-loi" style={{ color: 'red' }}>
            {loiCuaO('giaVe')}
          </p>
        )}
      </div>

      {/* 3. Phường / xã */}
      <div className="truong">
        <label htmlFor="phuong">Phường / xã (*)</label>
        <select
          id="phuong"
          name="phuong"
          value={duLieu.phuong}
          onChange={xuLyThayDoi}
          onBlur={xuLyRoiO}
        >
          <option value="">-- Chọn phường --</option>
          <option value="phu-hau">Phú Hậu</option>
          <option value="huong-long">Hương Long</option>
          <option value="thuy-bieu">Thuỷ Biều</option>
          <option value="vy-da">Vỹ Dạ</option>
        </select>
        {loiCuaO('phuong') && (
          <p role="alert" className="thong-bao-loi" style={{ color: 'red' }}>
            {loiCuaO('phuong')}
          </p>
        )}
      </div>

      {/* 4. Mô tả ngắn */}
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

      {/* 5. Nhóm nút chọn Loại hình */}
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

      {/* 6. Nhóm hộp kiểm Tiện ích */}
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

      {/* 7. Hộp kiểm đơn Xác nhận */}
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
        {loiCuaO('dongY') && (
          <p role="alert" className="thong-bao-loi" style={{ color: 'red' }}>
            {loiCuaO('dongY')}
          </p>
        )}
      </div>

      {/* Thông báo trạng thái gửi */}
      {trangThai === 'thanh-cong' && (
        <p className="thong-bao-thanh-cong" role="status" style={{ color: 'green' }}>
          Đã thêm địa điểm thành công!
        </p>
      )}
      {trangThai === 'that-bai' && (
        <p className="thong-bao-loi" role="alert" style={{ color: 'red' }}>
          Có lỗi khi gửi, vui lòng thử lại.
        </p>
      )}

      <div style={{ marginTop: '16px' }}>
        <button type="submit" disabled={trangThai === 'dang-gui'}>
          {trangThai === 'dang-gui' ? 'Đang lưu...' : 'Thêm địa điểm'}
        </button>
        <button
          type="button"
          style={{ marginLeft: '8px' }}
          onClick={() => {
            datLai();
            setTienIch([]);
          }}
        >
          Nhập lại
        </button>
      </div>
    </form>
  );
}