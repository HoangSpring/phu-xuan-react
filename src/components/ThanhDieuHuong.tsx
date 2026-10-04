type ThanhDieuHuongProps = {
  soYeuThich: number;
};

export default function ThanhDieuHuong({ soYeuThich }: ThanhDieuHuongProps) {
  return (
    <nav className="thanh-dieu-huong">
      <strong>Phú Xuân Travel</strong>
      <span>
        Yêu thích <span className="huy-hieu" data-testid="so-yeu-thich">{soYeuThich}</span>
      </span>
    </nav>
  );
}
