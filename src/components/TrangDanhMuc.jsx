import BoCucTrang from "../components/BoCucTrang";
import TheDiaDanh from "../components/TheDiaDanh";
import HopThongBao, { HopThongBaoThanhCong } from "../components/HopThongBao";
import HuyHieu from "../components/HuyHieu"; // Import HuyHieu
import { DANH_SACH_DIA_DANH } from "../du-lieu/diaDanh";

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
            {/* Sử dụng HuyHieu lần 1 */}
            <HuyHieu mau="info">Cập nhật 2026</HuyHieu>
          </HopThongBao>

          <HopThongBaoThanhCong>
            Dữ liệu đã tải xong.
            {/* Sử dụng HuyHieu lần 2 */}
            <HuyHieu mau="success">Sẵn sàng</HuyHieu>
          </HopThongBaoThanhCong>

          <div className="luoi-dia-danh">
            {DANH_SACH_DIA_DANH.map((dd) => (
              <TheDiaDanh
                key={dd.id}
                anh={dd.anh}
                ten={
                  <span>
                    {dd.ten}
                    {/* Sử dụng HuyHieu lần 3 & 4 (mỗi thẻ nhận huy hiệu khác nhau) */}
                    {dd.id === 1 && <HuyHieu mau="danger">Di sản</HuyHieu>}
                    {dd.id === 2 && <HuyHieu mau="warning">Nổi bật</HuyHieu>}
                  </span>
                }
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