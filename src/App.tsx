import BoCucTrang from "./components/BoCucTrang";
import TheDiaDanh from "./components/TheDiaDanh";
import HopThongBao, { HopThongBaoThanhCong } from "./components/HopThongBao";
import { DANH_SACH_DIA_DANH } from "./du-lieu/diaDanh";
import HuyHieu from "./components/HuyHieu";

function TrangDanhMuc() {
  const soLuong = DANH_SACH_DIA_DANH.length;
  return (
    <BoCucTrang
      thanhDieuHuong="Danh mục địa danh Huế"
      chanTrang={<span>© 2026 phu-xuan-react</span>}
      noiDungChinh={
        <>
          <HopThongBao>
            Hiện có {soLuong} địa danh đang được giới thiệu.
          </HopThongBao>

          <HopThongBaoThanhCong>
            Dữ liệu đã tải xong.
          </HopThongBaoThanhCong>

          <div className="luoi-dia-danh">
            {DANH_SACH_DIA_DANH.map((dd) => (
              <TheDiaDanh
                key={dd.id}
                anh={dd.anh}
                ten={dd.ten}
                moTa={dd.moTa}
              />
            ))}
          </div>
        </>
      }
    />
  );
}

export default TrangDanhMuc;