export default function KhungXemTruoc({ duLieu }) {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        backgroundColor: '#f9f9f9',
      }}
    >
      <h3>Xem trước thẻ địa điểm</h3>
      <hr />
      <h4>{duLieu.ten || '(Chưa nhập tên)'}</h4>
      <p>
        <strong>Mô tả:</strong> {duLieu.moTa || 'Chưa có mô tả.'}
      </p>
      <p>
        <strong>Giá vé:</strong>{' '}
        {duLieu.giaVe !== ''
          ? `${Number(duLieu.giaVe).toLocaleString('vi-VN')} VNĐ`
          : 'Chưa nhập'}
      </p>
      <p>
        <strong>Phường/Xã:</strong> {duLieu.phuong || 'Chưa chọn'}
      </p>
      <p>
        <strong>Loại hình:</strong>{' '}
        {duLieu.loaiHinh === 'di-tich' ? 'Di tích lịch sử' : 'Điểm ẩm thực'}
      </p>
      <p>
        <strong>Tiện ích:</strong>{' '}
        {duLieu.tienIch && duLieu.tienIch.length > 0
          ? duLieu.tienIch.join(', ')
          : 'Không có'}
      </p>
    </div>
  );
}