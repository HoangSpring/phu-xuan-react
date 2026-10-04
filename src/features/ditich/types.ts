export type LoaiDiTich = 'kinh-thanh' | 'lang-tam' | 'chua' | 'te-dan' | 'cong-trinh-cong-cong';

export type DiTich = {
  id: string;
  ten: string;
  loai: LoaiDiTich;
  theKy: number;
  moTa: string;
  daThamQuan: boolean;
};

export type DiTichFilter = {
  tuKhoa: string;
  loai: LoaiDiTich | 'tat-ca';
  chiChuaThamQuan: boolean;
};