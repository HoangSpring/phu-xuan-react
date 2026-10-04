import { useState } from 'react';
import Panel from '../components/Panel.tsx';

type MucGioiThieu = { tieuDe: string; noiDung: string };

const CAC_MUC: MucGioiThieu[] = [
  { tieuDe: 'Đại Nội', noiDung: 'Hoàng thành rộng hơn 36 ha, nơi làm việc của 13 đời vua Nguyễn.' },
  { tieuDe: 'Chùa Thiên Mụ', noiDung: 'Được xây dựng năm 1601, là ngôi chùa cổ nhất Huế.' },
  { tieuDe: 'Ẩm thực Huế', noiDung: 'Bún bò, bánh bèo, bánh khoái, chè Huế — tinh tế và đậm đà.' },
];

export default function GioiThieuHue() {
  const [chiSoMo, setChiSoMo] = useState(0);   // suy ra: number

  return (
    <section>
      <h2>Huế — Cố đô di sản</h2>
      {CAC_MUC.map((muc, i) => (
        <Panel key={muc.tieuDe} tieuDe={muc.tieuDe} dangMo={chiSoMo === i} onMo={() => setChiSoMo(i)}>
          {muc.noiDung}
        </Panel>
      ))}
    </section>
  );
}
