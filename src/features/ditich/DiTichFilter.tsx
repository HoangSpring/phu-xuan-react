import type { DiTichFilter as FilterState, LoaiDiTich } from './types';

type DiTichFilterProps = {
  boLoc: FilterState;
  onChange: (patch: Partial<FilterState>) => void;
  onReset: () => void;
};

const CAC_LOAI: Array<{ value: LoaiDiTich | 'tat-ca'; label: string }> = [
  { value: 'tat-ca', label: 'Tất cả' },
  { value: 'kinh-thanh', label: 'Kinh thành' },
  { value: 'lang-tam', label: 'Lăng tẩm' },
  { value: 'chua', label: 'Chùa' },
  { value: 'te-dan', label: 'Tế đàn' },
  { value: 'cong-trinh-cong-cong', label: 'Công trình công cộng' },
];

export function DiTichFilter({ boLoc, onChange, onReset }: DiTichFilterProps) {
  return (
    <div className="ditich-filter" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <label>
        Loại di tích:{' '}
        <select
          value={boLoc.loai}
          onChange={(e) => onChange({ loai: e.target.value as LoaiDiTich | 'tat-ca' })}
          style={{ padding: '4px 8px', marginTop: '4px', width: '100%' }}
        >
          {CAC_LOAI.map((l) => (
            <option key={l.value} value={l.value}>
              {l.label}
            </option>
          ))}
        </select>
      </label>

      <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <input
          type="checkbox"
          checked={boLoc.chiChuaThamQuan}
          onChange={(e) => onChange({ chiChuaThamQuan: e.target.checked })}
        />
        Chỉ hiện nơi chưa tham quan
      </label>

      <button type="button" onClick={onReset} style={{ padding: '6px 12px', cursor: 'pointer' }}>
        Đặt lại bộ lọc
      </button>
    </div>
  );
}