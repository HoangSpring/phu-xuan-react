import { useState } from 'react';

function StarRating() {
  const [userRating, setUserRating] = useState(0);
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="star-rating" style={{ marginTop: '8px' }}>
      <div style={{ cursor: 'pointer', fontSize: '1.25rem', userSelect: 'none' }}>
        {stars.map((starValue) => (
          <span
            key={starValue}
            className="star"
            onClick={() => setUserRating(starValue)}
            style={{ color: starValue <= userRating ? '#ffc107' : '#e0e0e0', marginRight: '4px' }}
          >
            {starValue <= userRating ? '★' : '☆'}
          </span>
        ))}
      </div>
      <p style={{ fontSize: '0.85rem', color: '#666', margin: '4px 0 0 0' }}>
        {userRating > 0 ? `Bạn đã đánh giá: ${userRating}/5 sao` : 'Chưa đánh giá'}
      </p>
    </div>
  );
}

export default StarRating;