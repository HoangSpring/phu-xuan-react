import { useState } from 'react';
import FormThemDiaDiem from './FormThemDiaDiem';
import KhungXemTruoc from './KhungXemTruoc';
import { kiemChung } from './kiemChung';

const GIA_TRI_BAN_DAU = {
  ten: '',
  moTa: '',
  giaVe: '',
  phuong: '',
  loaiHinh: 'di-tich',
  tienIch: [],
  dongY: false,
};

export default function TrangQuanLyDiaDiem() {
  const [duLieuForm, setDuLieuForm] = useState(GIA_TRI_BAN_DAU);

  function xuLyThayDoiTrucTiep(tenTruong, giaTri) {
    setDuLieuForm((truoc) => ({
      ...truoc,
      [tenTruong]: giaTri,
    }));
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
      <div>
        <h2>Nhập thông tin địa điểm</h2>
        <FormThemDiaDiem
          duLieuBanDau={GIA_TRI_BAN_DAU}
          onChangeExternally={xuLyThayDoiTrucTiep}
          kiemChungFn={kiemChung}
        />
      </div>
      <div>
        <h2>Xem trước kết quả</h2>
        <KhungXemTruoc duLieu={duLieuForm} />
      </div>
    </div>
  );
}