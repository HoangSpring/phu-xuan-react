import { useState } from 'react';

export function useForm(giaTriBanDau, kiemChungFn) {
  const [duLieu, setDuLieu] = useState(giaTriBanDau);
  const [daCham, setDaCham] = useState({});
  const [trangThai, setTrangThai] = useState('cho'); // cho | dang-gui | thanh-cong | that-bai

  const loi = kiemChungFn ? kiemChungFn(duLieu) : {};
  const hopLe = Object.keys(loi).length === 0;

  function xuLyThayDoi(e) {
    const { name, value, type, checked } = e.target;
    setDuLieu((truoc) => ({
      ...truoc,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  function xuLyRoiO(e) {
    const { name } = e.target;
    setDaCham((truoc) => ({ ...truoc, [name]: true }));
  }

  function loiCuaO(ten) {
    return daCham[ten] ? loi[ten] : undefined;
  }

  function datLai() {
    setDuLieu(giaTriBanDau);
    setDaCham({});
    setTrangThai('cho');
  }

  function xuLyGui(guiDuLieuFn) {
    return async (e) => {
      e.preventDefault();

      // Đánh dấu tất cả ô là đã chạm
      const tatCaDaCham = {};
      Object.keys(giaTriBanDau).forEach((k) => {
        tatCaDaCham[k] = true;
      });
      setDaCham(tatCaDaCham);

      if (kiemChungFn && Object.keys(kiemChungFn(duLieu)).length > 0) return;

      try {
        setTrangThai('dang-gui');
        await guiDuLieuFn(duLieu);
        setTrangThai('thanh-cong');
        datLai();
      } catch (err) {
        setTrangThai('that-bai');
      }
    };
  }

  return {
    duLieu,
    loi,
    daCham,
    trangThai,
    hopLe,
    xuLyThayDoi,
    xuLyRoiO,
    loiCuaO,
    xuLyGui,
    datLai,
    setDuLieu,
  };
}