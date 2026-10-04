import { useState } from 'react';
import ThanhTimKiem from '../components/ThanhTimKiem.tsx';
import BangDiaDanh from '../components/BangDiaDanh.tsx';
import type { DiaDanh } from '../types/diaDanh.ts';

export default function BangDiaDanhCoLoc({ dsDiaDanh }: { dsDiaDanh: DiaDanh[] }) {
  const [tuKhoa, setTuKhoa] = useState('');            // suy ra: string
  const [chiMienPhi, setChiMienPhi] = useState(false); // suy ra: boolean

  return (
    <section>
      <h2>Tra cứu địa danh</h2>
      <ThanhTimKiem
        tuKhoa={tuKhoa}
        chiMienPhi={chiMienPhi}
        onDoiTuKhoa={setTuKhoa}
        onDoiChiMienPhi={setChiMienPhi}
      />
      <BangDiaDanh dsDiaDanh={dsDiaDanh} tuKhoa={tuKhoa} chiMienPhi={chiMienPhi} />
    </section>
  );
}
