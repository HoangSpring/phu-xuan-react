import { useRef, useState } from 'react';
import type { SubmitEvent } from 'react';
import { z } from 'zod';
import NutBam from './NutBam.tsx';
import { BinhLuanSchema } from '../schemas/binhLuan.ts';
import type { BinhLuan, LoiBinhLuan } from '../schemas/binhLuan.ts';

type FormBinhLuanProps = {
  tenDiaDanh: string;
  onGui: (binhLuan: BinhLuan) => void;
};

const GIA_TRI_DAU: BinhLuan = { tenNguoiViet: '', noiDung: '', soSao: 5 };

export default function FormBinhLuan({ tenDiaDanh, onGui }: FormBinhLuanProps) {
  const [giaTri, setGiaTri] = useState<BinhLuan>(GIA_TRI_DAU);
  const [loi, setLoi] = useState<LoiBinhLuan>({});
  // useRef tới phần tử DOM: giá trị ban đầu là null → kiểu HTMLTextAreaElement | null
  const oNoiDungRef = useRef<HTMLTextAreaElement>(null);

  // Hàm cập nhật một trường — K là tên trường, giá trị phải đúng kiểu của trường đó
  function capNhat<K extends keyof BinhLuan>(truong: K, giaTriMoi: BinhLuan[K]) {
    setGiaTri((truoc) => ({ ...truoc, [truong]: giaTriMoi }));
  }

  function xuLyGui(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const kq = BinhLuanSchema.safeParse(giaTri);
    if (!kq.success) {
      setLoi(z.flattenError(kq.error).fieldErrors);
      if (!BinhLuanSchema.shape.noiDung.safeParse(giaTri.noiDung).success) {
        oNoiDungRef.current?.focus();   // ?. vì current có thể là null
      }
      return;
    }
    onGui(kq.data);   // kq.data đã được trim() theo lược đồ
    setGiaTri(GIA_TRI_DAU);
    setLoi({});
  }

  return (
    <form className="form-binh-luan" onSubmit={xuLyGui} noValidate>
      <h3>Cảm nhận về {tenDiaDanh}</h3>

      <label htmlFor="ten-nguoi-viet">Tên của bạn</label>
      <input
        id="ten-nguoi-viet"
        value={giaTri.tenNguoiViet}
        onChange={(e) => capNhat('tenNguoiViet', e.target.value)}
      />
      {loi.tenNguoiViet && <p className="loi-truong">{loi.tenNguoiViet[0]}</p>}

      <label htmlFor="noi-dung">Cảm nhận</label>
      <textarea
        id="noi-dung"
        ref={oNoiDungRef}
        value={giaTri.noiDung}
        onChange={(e) => capNhat('noiDung', e.target.value)}
      />
      {loi.noiDung && <p className="loi-truong">{loi.noiDung[0]}</p>}

      <label htmlFor="so-sao">Đánh giá</label>
      <select id="so-sao" value={giaTri.soSao} onChange={(e) => capNhat('soSao', Number(e.target.value))}>
        {[5, 4, 3, 2, 1].map((n) => (
          <option key={n} value={n}>{n} sao</option>
        ))}
      </select>

      <NutBam type="submit">Gửi cảm nhận</NutBam>
    </form>
  );
}
