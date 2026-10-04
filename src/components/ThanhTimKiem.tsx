import type { ChangeEvent } from 'react';

type ThanhTimKiemProps = {
  tuKhoa: string;
  chiMienPhi: boolean;
  onDoiTuKhoa: (tuKhoaMoi: string) => void;
  onDoiChiMienPhi: (giaTriMoi: boolean) => void;
};

export default function ThanhTimKiem({ tuKhoa, chiMienPhi, onDoiTuKhoa, onDoiChiMienPhi }: ThanhTimKiemProps) {
  // Hàm tách rời: phải ghi kiểu sự kiện tường minh
  function xuLyNhapTuKhoa(e: ChangeEvent<HTMLInputElement>) {
    onDoiTuKhoa(e.target.value);
  }

  return (
    <div role="search">
      <input type="text" placeholder="Tìm địa danh..." value={tuKhoa} onChange={xuLyNhapTuKhoa} />
      <label>
        {/* Hàm nội tuyến: TypeScript tự suy ra e là ChangeEvent<HTMLInputElement> */}
        <input type="checkbox" checked={chiMienPhi} onChange={(e) => onDoiChiMienPhi(e.target.checked)} />{' '}
        Chỉ hiện địa danh miễn phí vé
      </label>
    </div>
  );
}
