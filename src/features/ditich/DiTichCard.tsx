import type { DiTich } from './types';

type DiTichCardProps = {
  diTich: DiTich;
  onToggleThamQuan: (id: string) => void;
};

export function DiTichCard({ diTich, onToggleThamQuan }: DiTichCardProps) {
  return (
    <article
      className={`ditich-card ${diTich.daThamQuan ? 'ditich-card--visited' : ''}`}
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        backgroundColor: diTich.daThamQuan ? '#f0fdf4' : '#ffffff',
      }}
    >
      <h3>{diTich.ten}</h3>
      <p className="ditich-card__meta" style={{ color: '#666', fontSize: '0.9rem' }}>
        {diTich.loai.replace(/-/g, ' ')} — Thế kỷ {diTich.theKy}
      </p>
      <p className="ditich-card__desc">{diTich.moTa}</p>
      <button
        type="button"
        onClick={() => onToggleThamQuan(diTich.id)}
        style={{
          padding: '6px 12px',
          borderRadius: '4px',
          border: 'none',
          cursor: 'pointer',
          backgroundColor: diTich.daThamQuan ? '#dc2626' : '#16a34a',
          color: '#fff',
        }}
      >
        {diTich.daThamQuan ? 'Bỏ đánh dấu' : 'Đã tham quan'}
      </button>
    </article>
  );
}