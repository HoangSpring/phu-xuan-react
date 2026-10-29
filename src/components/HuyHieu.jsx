function HuyHieu({ mau = "primary", children }) {
  // Bản đồ màu sắc dựa trên prop `mau`
  const bangMau = {
    primary: { bg: "#0d6efd", color: "#fff" },
    success: { bg: "#198754", color: "#fff" },
    warning: { bg: "#ffc107", color: "#000" },
    danger: { bg: "#dc3545", color: "#fff" },
    info: { bg: "#0dcaf0", color: "#000" },
  };

  // Lấy kiểu màu tương ứng, nếu truyền màu khác thì dùng mặc định
  const luaChonMau = bangMau[mau] || bangMau.primary;

  return (
    <span
      className={`huy-hieu huy-hieu-${mau}`}
      style={{
        backgroundColor: luaChonMau.bg,
        color: luaChonMau.color,
        padding: "4px 8px",
        borderRadius: "12px",
        fontSize: "12px",
        fontWeight: "bold",
        display: "inline-block",
        marginLeft: "8px",
      }}
    >
      {children}
    </span>
  );
}

export default HuyHieu;