import type { ReactElement } from 'react';
import type { DiaDanh, LoaiDiaDanh } from '../types/diaDanh.ts';

function DongNhomLoai({ loai }: { loai: LoaiDiaDanh }) {
  return (
    <tr>
      <th colSpan={2}>{loai}</th>
    </tr>
  );
}

function DongDiaDanh({ diaDanh }: { diaDanh: DiaDanh }) {
  const mienPhi = diaDanh.giaVe === 0;
  return (
    <tr>
      <td className={mienPhi ? 'mien-phi' : undefined}>{diaDanh.ten}</td>
      <td>{mienPhi ? 'Miễn phí' : diaDanh.giaVe.toLocaleString('vi-VN') + ' đ'}</td>
    </tr>
  );
}

type BangDiaDanhProps = {
  dsDiaDanh: DiaDanh[];
  tuKhoa: string;
  chiMienPhi: boolean;
};

export default function BangDiaDanh({ dsDiaDanh, tuKhoa, chiMienPhi }: BangDiaDanhProps) {
  const cacDong: ReactElement[] = [];
  let loaiTruoc: LoaiDiaDanh | null = null;   // union: một loại HOẶC null

  dsDiaDanh.forEach((dd) => {
    const khop = dd.ten.toLowerCase().includes(tuKhoa.toLowerCase());
    if (!khop) return;
    if (chiMienPhi && dd.giaVe > 0) return;
    if (dd.loai !== loaiTruoc) {
      cacDong.push(<DongNhomLoai key={dd.loai} loai={dd.loai} />);
    }
    cacDong.push(<DongDiaDanh key={dd.id} diaDanh={dd} />);
    loaiTruoc = dd.loai;
  });

  return (
    <table>
      <thead>
        <tr><th>Địa danh</th><th>Giá vé</th></tr>
      </thead>
      <tbody>
        {cacDong.length > 0 ? cacDong : (
          <tr><td colSpan={2}>Không tìm thấy địa danh phù hợp.</td></tr>
        )}
      </tbody>
    </table>
  );
}
