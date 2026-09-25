import BoCucTrang from "./components/BoCucTrang";
import DanhSach from "./components/DanhSach";
import TheDiaDanh from "./components/TheDiaDanh";
import { DANH_SACH_DIA_DANH } from "./du-lieu/diaDanh";
import { DANH_SACH_MON_AN } from "./du-lieu/monAn";
import "./App.css";

function App() {
  return (
    <BoCucTrang
      thanhDieuHuong="Du lịch Huế — phu-xuan-react"
      chanTrang={<span>© 2026 Nhóm ... — INT.7.18</span>}
      noiDungChinh={
        <>
          <h2>Địa danh</h2>
          <div className="luoi-dia-danh">
            {DANH_SACH_DIA_DANH.map((dd) => (
              <TheDiaDanh key={dd.id} anh={dd.anh} ten={dd.ten} moTa={dd.moTa} />
            ))}
          </div>

          <h2>Ẩm thực (kiểu chữ)</h2>
          <DanhSach
            cacMuc={DANH_SACH_MON_AN}
            hienThiMuc={(mon: any) => (
              <strong>{mon.ten} — {mon.gia.toLocaleString()}đ</strong>
            )}
          />

          <h2>Ẩm thực (kiểu có nút)</h2>
          <DanhSach
            cacMuc={DANH_SACH_MON_AN}
            hienThiMuc={(mon: any) => (
              <span>{mon.ten} <button>Đặt món</button></span>
            )}
          />
        </>
      }
    />
  );
}

export default App;