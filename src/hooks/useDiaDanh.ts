import { DS_DIA_DANH } from '../du-lieu/diaDanh.ts';
import type { DiaDanh } from '../types/diaDanh.ts';

// Trả về cấu trúc trạng thái giống như hook cũ để các component bên ngoài không bị lỗi
export default function useDiaDanh() {
  return {
    trangThai: 'thanh-cong' as const,
    duLieu: DS_DIA_DANH as DiaDanh[],
  };
}