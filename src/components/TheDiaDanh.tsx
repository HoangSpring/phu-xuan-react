import type { DiaDanh } from '../types/diaDanh.ts';

type TheDiaDanhProps = {
  diaDanh: DiaDanh;
  daThich: boolean;
  onDoiYeuThich: (id: number) => void;   // kiểu hàm: nhận id kiểu number
};

export default function TheDiaDanh({ diaDanh, daThich, onDoiYeuThich }: TheDiaDanhProps) {
  return (
    <article className="the">
      <img src={diaDanh.anh} alt={diaDanh.ten} />
      <h3>{diaDanh.ten}</h3>
      <p>{diaDanh.moTa}</p>
      <button
        className={daThich ? 'nut-thich da-thich' : 'nut-thich'}
        onClick={() => onDoiYeuThich(diaDanh.id)}
      >
        {daThich ? 'Đã thích' : 'Yêu thích'}
      </button>
    </article>
  );
}
