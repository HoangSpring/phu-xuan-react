import { useState } from 'react';
import StarRating from './StarRating';

function AttractionCard({ name, category, description, rating }) {
  const [isFavorite, setIsFavorite] = useState(false);

  function handleToggleFavorite() {
    setIsFavorite((prev) => !prev);
  }

  return (
    <div
      className="attraction-card"
      style={{
        border: '1px solid #ddd',
        borderRadius: 8,
        padding: '1rem',
        marginBottom: '1rem',
      }}
    >
      <button
        className={`attraction-card__favorite ${isFavorite ? 'is-active' : ''}`}
        onClick={handleToggleFavorite}
        style={{
          padding: '4px 12px',
          borderRadius: 4,
          border: '1px solid #ccc',
          backgroundColor: isFavorite ? '#ffebee' : '#fff',
          color: isFavorite ? '#d32f2f' : '#333',
          cursor: 'pointer',
          marginBottom: '8px',
        }}
      >
        {isFavorite ? '♥ Đã lưu' : '♡ Lưu địa điểm'}
      </button>

      <div
        className="attraction-card__badge"
        style={{
          display: 'inline-block',
          background: '#e0e0e0',
          padding: '2px 8px',
          borderRadius: 4,
          fontSize: '0.85rem',
          marginLeft: '8px',
        }}
      >
        {category}
      </div>

      <h3 style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>{name}</h3>
      <p style={{ color: '#666', marginBottom: '0.5rem' }}>{description}</p>

      {/* Tích hợp StarRating vào đây */}
      <StarRating />

      <div style={{ marginTop: '8px' }}>
        <span
          className="attraction-card__rating"
          style={{ fontWeight: 'bold', color: '#007bff' }}
        >
          ⭐ {rating}
        </span>
      </div>
    </div>
  );
}

export default AttractionCard;