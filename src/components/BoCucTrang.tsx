import type { ReactNode } from 'react';

type BoCucTrangProps = {
  thanhDieuHuong: ReactNode;
  noiDungChinh: ReactNode;
  chanTrang?: ReactNode;
};

export default function BoCucTrang({ thanhDieuHuong, noiDungChinh, chanTrang }: BoCucTrangProps) {
  return (
    <>
      {thanhDieuHuong}
      <main>{noiDungChinh}</main>
      <footer style={{ padding: '12px 24px' }}>{chanTrang}</footer>
    </>
  );
}
