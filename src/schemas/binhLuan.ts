import { z } from 'zod';

export const BinhLuanSchema = z.object({
  tenNguoiViet: z
    .string()
    .trim()
    .min(2, { error: 'Tên cần ít nhất 2 ký tự' })
    .max(40, { error: 'Tên tối đa 40 ký tự' }),
  noiDung: z
    .string()
    .trim()
    .min(10, { error: 'Cảm nhận cần ít nhất 10 ký tự' })
    .max(300, { error: 'Cảm nhận tối đa 300 ký tự' }),
  soSao: z.number().int().min(1, { error: 'Chọn từ 1 đến 5 sao' }).max(5),
});

export type BinhLuan = z.infer<typeof BinhLuanSchema>;
// Lỗi theo từng trường: { tenNguoiViet?: string[]; noiDung?: string[]; soSao?: string[] }
export type LoiBinhLuan = Partial<Record<keyof BinhLuan, string[]>>;
