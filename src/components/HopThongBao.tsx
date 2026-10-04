import type { ReactNode } from 'react';

type HopThongBaoProps = {
  mauNen?: string;
  children: ReactNode;
};

// Giá trị mặc định khai báo ngay khi phân rã props
export default function HopThongBao({ mauNen = '#1B2A4A', children }: HopThongBaoProps) {
  return (
    <div role="status" style={{ background: mauNen, color: '#fff', padding: 12, borderRadius: 8 }}>
      {children}
    </div>
  );
}
