export type TourCategory = 'di-tich' | 'am-thuc' | 'thien-nhien' | 'lang-nghe';

export type Tour = {
  id: string;
  name: string;
  category: TourCategory;
  price: number; // VND
  duration: number; // giờ
  image: string;
  hot?: boolean;
};

export const tours: Tour[] = [
  { id: 't01', name: 'Đại Nội Huế', category: 'di-tich', price: 300000, duration: 3, image: '/images/dai-noi.jpg', hot: true },
  { id: 't02', name: 'Chợ Đông Ba', category: 'am-thuc', price: 150000, duration: 2, image: '/images/dong-ba.jpg' },
  { id: 't03', name: 'Cầu Tràng Tiền', category: 'di-tich', price: 100000, duration: 1, image: '/images/trang-tien.jpg' },
  { id: 't04', name: 'Lăng Tự Đức', category: 'di-tich', price: 400000, duration: 4, image: '/images/tu-duc.jpg', hot: true },
  { id: 't05', name: 'Đầm phá Tam Giang', category: 'thien-nhien', price: 600000, duration: 5, image: '/images/tam-giang.jpg' },
  { id: 't06', name: 'Làng nón Phú Cam', category: 'lang-nghe', price: 200000, duration: 2, image: '/images/phu-cam.jpg' },
];