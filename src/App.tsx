import { useState } from 'react';
import BoCucTrang from './components/BoCucTrang.tsx';
import ThanhDieuHuong from './components/ThanhDieuHuong.tsx';
import DanhSachDiaDanhContainer from './components/DanhSachDiaDanhContainer.tsx';
import GioiThieuHue from './pages/GioiThieuHue.tsx';
import BangDiaDanhCoLoc from './pages/BangDiaDanhCoLoc.tsx';
import TrangBinhLuan from './pages/TrangBinhLuan.tsx';
import { DS_DIA_DANH } from './du-lieu/diaDanh.ts';

export default function App() {
  // Mảng rỗng [] không đủ thông tin để suy kiểu → khai báo tường minh number[]
  const [dsYeuThich, setDsYeuThich] = useState<number[]>([]);

  function doiYeuThich(id: number) {
    setDsYeuThich((truoc) => (truoc.includes(id) ? truoc.filter((x) => x !== id) : [...truoc, id]));
  }

  return (
    <BoCucTrang
      thanhDieuHuong={<ThanhDieuHuong soYeuThich={dsYeuThich.length} />}
      noiDungChinh={
        <>
          <GioiThieuHue />
          <h2>Địa danh nổi bật</h2>
          <DanhSachDiaDanhContainer dsYeuThich={dsYeuThich} onDoiYeuThich={doiYeuThich} />
          <BangDiaDanhCoLoc dsDiaDanh={DS_DIA_DANH} />
          <TrangBinhLuan dsDiaDanh={DS_DIA_DANH} />
        </>
      }
      chanTrang={<small>phu-xuan-react · Buổi 11 · TypeScript</small>}
    />
  );
}
