import { useEffect, useState } from 'react';

// Union phân biệt (discriminated union): trường "trangThai" quyết định các trường còn lại
export type TrangThaiTai<T> =
  | { trangThai: 'dang-tai' }
  | { trangThai: 'loi'; loi: string }
  | { trangThai: 'thanh-cong'; duLieu: T };

// Hook GENERIC: dùng được cho mọi kiểu dữ liệu T.
// phanTich nhận dữ liệu "chưa rõ kiểu" (unknown) và phải trả về T hợp lệ, hoặc ném lỗi.
// LƯU Ý: phanTich cần ổn định (khai báo ngoài thành phần) vì nằm trong mảng phụ thuộc.
export default function useFetch<T>(
  duongDan: string,
  phanTich: (duLieuTho: unknown) => T,
): TrangThaiTai<T> {
  const [ketQua, setKetQua] = useState<TrangThaiTai<T>>({ trangThai: 'dang-tai' });

  useEffect(() => {
    let daHuy = false;

    async function taiDuLieu() {
      setKetQua({ trangThai: 'dang-tai' });
      try {
        const phanHoi = await fetch(duongDan);
        if (!phanHoi.ok) throw new Error('Máy chủ trả về mã ' + phanHoi.status);
        const duLieuTho: unknown = await phanHoi.json();
        const duLieu = phanTich(duLieuTho);          // kiểm chứng TRƯỚC khi đưa vào state
        if (!daHuy) setKetQua({ trangThai: 'thanh-cong', duLieu });
      } catch (e) {
        // Trong khối catch, e có kiểu unknown → phải thu hẹp trước khi đọc .message
        const thongBao = e instanceof Error ? e.message : 'Lỗi không xác định';
        if (!daHuy) setKetQua({ trangThai: 'loi', loi: thongBao });
      }
    }

    taiDuLieu();
    return () => {
      daHuy = true;
    };
  }, [duongDan, phanTich]);

  return ketQua;
}
