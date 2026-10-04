import TheDiaDanh from './TheDiaDanh.tsx';
import type { DiaDanh } from '../types/diaDanh.ts';

type DanhSachDiaDanhProps = {
  dsDiaDanh: DiaDanh[];
  dsYeuThich: number[];
  onDoiYeuThich: (id: number) => void;
};

export default function DanhSachDiaDanh({ dsDiaDanh, dsYeuThich, onDoiYeuThich }: DanhSachDiaDanhProps) {
  return (
    <div className="luoi-the">
      {dsDiaDanh.map((dd) => (
        <TheDiaDanh
          key={dd.id}
          diaDanh={dd}
          daThich={dsYeuThich.includes(dd.id)}
          onDoiYeuThich={onDoiYeuThich}
        />
      ))}
    </div>
  );
}
