    import { useState, useEffect } from 'react';

function useDebounce(giaTri, doTre = 300) {
  const [giaTriDaTre, setGiaTriDaTre] = useState(giaTri);

  useEffect(() => {
    // Đặt bộ đếm thời gian cập nhật giá trị sau `doTre` mili-giây
    const idBoDem = setTimeout(() => {
      setGiaTriDaTre(giaTri);
    }, doTre);

    // Cleanup function: Hủy bộ đếm cũ nếu giaTri hoặc doTre thay đổi trước khi hết doTre ms
    return () => {
      clearTimeout(idBoDem);
    };
  }, [giaTri, doTre]);

  return giaTriDaTre;
}

export default useDebounce;