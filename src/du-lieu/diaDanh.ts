import type { DiaDanh } from '../types/diaDanh.ts';

// satisfies: kiểm tra mảng khớp kiểu DiaDanh[] nhưng vẫn giữ kiểu chi tiết nhất
export const DS_DIA_DANH = [
  { id: 1, ten: 'Đại Nội Huế', loai: 'Di tích', giaVe: 200000, anh: 'https://picsum.photos/seed/dainoi/400/240', moTa: 'Hoàng thành của triều Nguyễn, di sản văn hóa thế giới.' },
  { id: 2, ten: 'Lăng Tự Đức', loai: 'Di tích', giaVe: 150000, anh: 'https://picsum.photos/seed/tuduc/400/240', moTa: 'Khu lăng mộ hài hòa giữa kiến trúc và thiên nhiên.' },
  { id: 3, ten: 'Chùa Thiên Mụ', loai: 'Di tích', giaVe: 0, anh: 'https://picsum.photos/seed/thienmu/400/240', moTa: 'Ngôi chùa cổ bên bờ sông Hương với tháp Phước Duyên.' },
  { id: 4, ten: 'Cầu Tràng Tiền', loai: 'Cảnh quan', giaVe: 0, anh: 'https://picsum.photos/seed/trangtien/400/240', moTa: 'Cây cầu sáu vài mười hai nhịp, biểu tượng của Huế.' },
  { id: 5, ten: 'Đồi Vọng Cảnh', loai: 'Cảnh quan', giaVe: 0, anh: 'https://picsum.photos/seed/vongcanh/400/240', moTa: 'Điểm ngắm hoàng hôn trên sông Hương đẹp nhất Huế.' },
  { id: 6, ten: 'Chợ Đông Ba', loai: 'Ẩm thực', giaVe: 0, anh: 'https://picsum.photos/seed/dongba/400/240', moTa: 'Chợ lớn nhất Huế, thiên đường bún bò, bánh bèo, chè.' },
] satisfies DiaDanh[];
