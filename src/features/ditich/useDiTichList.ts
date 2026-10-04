import { useState } from 'react';
import type { DiTich, DiTichFilter } from './types';

const BO_LOC_MAC_DINH: DiTichFilter = {
  tuKhoa: '',
  loai: 'tat-ca',
  chiChuaThamQuan: false,
};

export function useDiTichList(dataGoc: DiTich[]) {
  const [danhSach, setDanhSach] = useState<DiTich[]>(dataGoc);
  const [boLoc, setBoLoc] = useState<DiTichFilter>(BO_LOC_MAC_DINH);

  // 1. Tính danhSachHienThi từ danhSach + boLoc
  const tuKhoaNormalized = boLoc.tuKhoa.trim().toLowerCase();
  const danhSachHienThi = danhSach.filter((d) => {
    // TODO 1: Lọc theo tuKhoa (không phân biệt hoa/thường)
    const matchTuKhoa = tuKhoaNormalized === '' || d.ten.toLowerCase().includes(tuKhoaNormalized);

    // TODO 2: Lọc theo loai (nếu 'tat-ca' thì bỏ qua)
    const matchLoai = boLoc.loai === 'tat-ca' || d.loai === boLoc.loai;

    // TODO 3: Lọc theo chiChuaThamQuan (nếu true thì giữ d.daThamQuan === false)
    const matchDaThamQuan = !boLoc.chiChuaThamQuan || !d.daThamQuan;

    return matchTuKhoa && matchLoai && matchDaThamQuan;
  });

  // 2. Cập nhật bộ lọc
  const capNhatBoLoc = (patch: Partial<DiTichFilter>) => {
    setBoLoc((prev) => ({ ...prev, ...patch }));
  };

  // 3. Đảo trạng thái tham quan (TODO 4 - Immutable update)
  const danhDauDaThamQuan = (id: string) => {
    setDanhSach((prev) =>
      prev.map((d) => (d.id === id ? { ...d, daThamQuan: !d.daThamQuan } : d))
    );
  };

  // 4. Reset bộ lọc
  const resetBoLoc = () => setBoLoc(BO_LOC_MAC_DINH);

  return { danhSachHienThi, boLoc, capNhatBoLoc, danhDauDaThamQuan, resetBoLoc };
}