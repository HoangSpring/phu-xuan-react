import type { Key, ReactNode } from 'react';

// Thành phần GENERIC: <T> là "biến kiểu" — T được xác định khi thành phần được dùng
type DanhSachProps<T> = {
  cacMuc: T[];
  layKhoa: (muc: T) => Key;
  hienThi: (muc: T) => ReactNode;   // render prop (Buổi 9) — nay có kiểu
  khiRong?: ReactNode;
};

export default function DanhSach<T>({ cacMuc, layKhoa, hienThi, khiRong = <p>Chưa có dữ liệu.</p> }: DanhSachProps<T>) {
  if (cacMuc.length === 0) return <>{khiRong}</>;
  return (
    <ul>
      {cacMuc.map((muc) => (
        <li key={layKhoa(muc)}>{hienThi(muc)}</li>
      ))}
    </ul>
  );
}
