import { useState } from 'react';
import FormBinhLuan from '../components/FormBinhLuan.tsx';
import DanhSach from '../components/DanhSach.tsx';
import type { DiaDanh } from '../types/diaDanh.ts';
import type { BinhLuan } from '../schemas/binhLuan.ts';

type TrangBinhLuanProps = { dsDiaDanh: DiaDanh[] };

export default function TrangBinhLuan({ dsDiaDanh }: TrangBinhLuanProps) {
  const [idDangChon, setIdDangChon] = useState(dsDiaDanh[0].id);
  // Record<number, BinhLuan[]>: đối tượng có khóa là id địa danh, giá trị là mảng bình luận
  const [binhLuan, setBinhLuan] = useState<Record<number, BinhLuan[]>>({});

  const diaDanh = dsDiaDanh.find((dd) => dd.id === idDangChon);
  const dsBinhLuan = binhLuan[idDangChon] ?? [];

  function themBinhLuan(moi: BinhLuan) {
    setBinhLuan((truoc) => ({ ...truoc, [idDangChon]: [...(truoc[idDangChon] ?? []), moi] }));
  }

  // find() trả về DiaDanh | undefined → bắt buộc xử lý trường hợp không tìm thấy
  if (!diaDanh) return <p>Không tìm thấy địa danh.</p>;

  return (
    <section>
      <h2>Góc cảm nhận</h2>
      <select value={idDangChon} onChange={(e) => setIdDangChon(Number(e.target.value))}>
        {dsDiaDanh.map((dd) => (
          <option key={dd.id} value={dd.id}>{dd.ten}</option>
        ))}
      </select>
      <p>{dsBinhLuan.length} cảm nhận</p>
      {/* T của DanhSach được suy ra là BinhLuan */}
      <DanhSach
        cacMuc={dsBinhLuan}
        layKhoa={(bl) => bl.tenNguoiViet + bl.noiDung}
        hienThi={(bl) => (
          <>
            <strong>{bl.tenNguoiViet}</strong> ({'★'.repeat(bl.soSao)}): {bl.noiDung}
          </>
        )}
        khiRong={<p>Hãy là người đầu tiên chia sẻ cảm nhận.</p>}
      />
      <FormBinhLuan key={idDangChon} tenDiaDanh={diaDanh.ten} onGui={themBinhLuan} />
    </section>
  );
}
