import { useForm } from '../../hooks/useForm';

const DS_TIEN_ICH = [
  { ma: 'bai-xe', ten: 'Bãi đỗ xe' },
  { ma: 'huong-dan', ten: 'Có hướng dẫn viên' },
  { ma: 've-online', ten: 'Bán vé trực tuyến' },
  { ma: 'khu-ve-sinh', ten: 'Khu vệ sinh công cộng' },
];

export default function FormThemDiaDiem({ duLieuBanDau, onChangeExternally, kiemChungFn }) {
  const {
    duLieu,
    trangThai,
    xuLyThayDoi,
    xuLyRoiO,
    loiCuaO,
    xuLyGui,
    datLai,
  } = useForm(duLieuBanDau, kiemChungFn);

  // Mỗi khi ô nhập thay đổi, ta cập nhật state hook và báo cho component cha
  function xuLyThayDoiChung(e) {
    xuLyThayDoi(e);
    const { name, value, type, checked } = e.target;
    const giatriMoi = type === 'checkbox' ? checked : value;
    onChangeExternally(name, giatriMoi);
  }

  function xuLyTichTienIch(e) {
    const { value, checked } = e.target;
    const tienIchHienTai = duLieu.tienIch || [];
    const tienIchMoi = checked
      ? [...tienIchHienTai, value]
      : tienIchHienTai.filter((m) => m !== value);
    
    onChangeExternally('tienIch', tienIchMoi);
    xuLyThayDoi({ target: { name: 'tienIch', value: tienIchMoi, type: 'custom' } });
  }

  const guiForm = xuLyGui(async (gt) => {
    await new Promise((r) => setTimeout(r, 1200));
    console.log('Dữ liệu hoàn tất:', gt);
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
          onChange={xuLyThayDoiChung}
          onBlur={xuLyRoiO}
          placeholder="Ví dụ: Lăng Minh Mạng"
        />
        {loiCuaO('ten') && <p style={{ color: 'red', margin: '4px 0' }}>{loiCuaO('ten')}</p>}
      </div>

      {/* 2. Giá vé */}
      <div className="truong" style={{ marginTop: '10px' }}>
        <label htmlFor="giaVe">Giá vé (VNĐ) (*)</label>
        <input
          id="giaVe"
          name="giaVe"
          type="number"
          value={duLieu.giaVe}
          onChange={xuLyThayDoiChung}
          onBlur={xuLyRoiO}
          placeholder="0"
        />
        {loiCuaO('giaVe') && <p style={{ color: 'red', margin: '4px 0' }}>{loiCuaO('giaVe')}</p>}
      </div>

      {/* 3. Phường / xã */}
      <div className="truong" style={{ marginTop: '10px' }}>
        <label htmlFor="phuong">Phường / xã (*)</label>
        <select
          id="phuong"
          name="phuong"
          value={duLieu.phuong}
          onChange={xuLyThayDoiChung}
          onBlur={xuLyRoiO}
        >
          <option value="">-- Chọn phường --</option>
          <option value="phu-hau">Phú Hậu</option>
          <option value="huong-long">Hương Long</option>
          <option value="thuy-bieu">Thuỷ Biều</option>
          <option value="vy-da">Vỹ Dạ</option>
        </select>
        {loiCuaO('phuong') && <p style={{ color: 'red', margin: '4px 0' }}>{loiCuaO('phuong')}</p>}
      </div>

      {/* 4. Mô tả */}
      <div className="truong" style={{ marginTop: '10px' }}>
        <label htmlFor="moTa">Mô tả ngắn</label>
        <textarea
          id="moTa"
          name="moTa"
          rows={3}
          value={duLieu.moTa}
          onChange={xuLyThayDoiChung}
        />
      </div>

      {/* 5. Loại hình */}
      <fieldset style={{ marginTop: '10px' }}>
        <legend>Loại hình</legend>
        <label>
          <input
            name="loaiHinh"
            type="radio"
            value="di-tich"
            checked={duLieu.loaiHinh === 'di-tich'}
            onChange={xuLyThayDoiChung}
          />
          Di tích lịch sử
        </label>
        <label style={{ marginLeft: '12px' }}>
          <input
            name="loaiHinh"
            type="radio"
            value="am-thuc"
            checked={duLieu.loaiHinh === 'am-thuc'}
            onChange={xuLyThayDoiChung}
          />
          Điểm ẩm thực
        </label>
      </fieldset>

      {/* 6. Tiện ích */}
      <fieldset style={{ marginTop: '10px' }}>
        <legend>Tiện ích</legend>
        {DS_TIEN_ICH.map((ti) => (
          <label key={ti.ma} style={{ marginRight: '12px', display: 'inline-block' }}>
            <input
              type="checkbox"
              value={ti.ma}
              checked={(duLieu.tienIch || []).includes(ti.ma)}
              onChange={xuLyTichTienIch}
            />
            {ti.ten}
          </label>
        ))}
      </fieldset>

      {/* 7. Đồng ý */}
      <div className="truong" style={{ marginTop: '10px' }}>
        <label>
          <input
            name="dongY"
            type="checkbox"
            checked={duLieu.dongY}
            onChange={xuLyThayDoiChung}
          />
          Tôi xác nhận thông tin địa điểm là chính xác
        </label>
        {loiCuaO('dongY') && <p style={{ color: 'red', margin: '4px 0' }}>{loiCuaO('dongY')}</p>}
      </div>

      {trangThai === 'thanh-cong' && (
        <p style={{ color: 'green', marginTop: '10px' }}>Thêm địa điểm thành công!</p>
      )}

      <div style={{ marginTop: '16px' }}>
        <button type="submit" disabled={trangThai === 'dang-gui'}>
          {trangThai === 'dang-gui' ? 'Đang lưu...' : 'Thêm địa điểm'}
        </button>
        <button type="button" onClick={datLai} style={{ marginLeft: '8px' }}>
          Nhập lại
        </button>
      </div>
    </form>
  );
}