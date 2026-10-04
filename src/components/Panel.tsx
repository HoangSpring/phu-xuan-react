import type { ReactNode } from 'react';

type PanelProps = {
  tieuDe: string;
  dangMo: boolean;
  onMo: () => void;      // hàm không nhận tham số, không trả về gì
  children: ReactNode;
};

export default function Panel({ tieuDe, dangMo, onMo, children }: PanelProps) {
  return (
    <section className="panel">
      <h3>{tieuDe}</h3>
      {dangMo ? <p>{children}</p> : <button onClick={onMo}>Xem thêm</button>}
    </section>
  );
}
