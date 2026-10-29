import { useForm } from '../../hooks/useForm';

const GIA_TRI_BAN_DAU = { hoTen: '', noiDung: '' };

function kiemChungGopY(d) {
  const loi = {};
  if (!d.hoTen.trim()) loi.hoTen = 'Vui lòng nhập họ tên.';
  if (d.noiDung.trim().length < 10) loi.noiDung = 'Góp ý cần ít nhất 10 ký tự.';
  return loi;
}

export default function FormGopY() {
  const { duLieu, trangThai, xuLyThayDoi, xuLyRoiO, loiCuaO, xuLyGui } =
    useForm(GIA_TRI_BAN_DAU, kiemChungGopY);

  const guiGopY = xuLyGui(async (gt) => {
    await new Promise((r) => setTimeout(r, 800));
    alert('Cảm ơn góp ý của ' + gt.hoTen);
  });

  return (
    <form onSubmit={guiGopY} noValidate style={{ marginTop: '30px', borderTop: '1px solid #ccc', paddingTop: '20px' }}>
      <h3>Gửi góp ý</h3>
      <div className="truong">
        <label htmlFor="hoTen">Họ tên</label>
        <input
          id="hoTen"
          name="hoTen"
          type="text"
          value={duLieu.hoTen}
          onChange={xuLyThayDoi}
          onBlur={xuLyRoiO}
        />
        {loiCuaO('hoTen') && <p role="alert" style={{ color: 'red' }}>{loiCuaO('hoTen')}</p>}
      </div>

      <div className="truong" style={{ marginTop: '10px' }}>
        <label htmlFor="noiDung">Nội dung góp ý</label>
        <textarea
          id="noiDung"
          name="noiDung"
          rows={3}
          value={duLieu.noiDung}
          onChange={xuLyThayDoi}
          onBlur={xuLyRoiO}
        />
        {loiCuaO('noiDung') && <p role="alert" style={{ color: 'red' }}>{loiCuaO('noiDung')}</p>}
      </div>

      <button type="submit" disabled={trangThai === 'dang-gui'} style={{ marginTop: '10px' }}>
        {trangThai === 'dang-gui' ? 'Đang gửi...' : 'Gửi góp ý'}
      </button>
    </form>
  );
}