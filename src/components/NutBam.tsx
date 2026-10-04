import type { ComponentProps } from 'react';

// Kế thừa TOÀN BỘ thuộc tính của <button> (type, disabled, onClick, aria-*...)
// rồi bổ sung thêm thuộc tính riêng "bienThe"
type NutBamProps = ComponentProps<'button'> & {
  bienThe?: 'chinh' | 'phu';
};

export default function NutBam({ bienThe = 'chinh', className = '', ...conLai }: NutBamProps) {
  return <button className={`nut nut-${bienThe} ${className}`.trim()} {...conLai} />;
}
