import type { ReactNode } from 'react';

type TheProps = {
  tieuDe?: string;       // dấu ? : prop không bắt buộc
  children: ReactNode;   // mọi thứ React hiển thị được: JSX, chuỗi, số, null...
};

export default function The({ tieuDe, children }: TheProps) {
  return (
    <article className="the">
      {tieuDe && <h3>{tieuDe}</h3>}
      {children}
    </article>
  );
}
