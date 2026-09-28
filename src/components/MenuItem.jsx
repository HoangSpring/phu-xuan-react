function MenuItem({ id, name, price, description, isSpicy, isFavorite, onToggleFavorite }) {
  return (
    <div
      className="menu-item"
      style={{
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        padding: '1rem',
        marginBottom: '1rem',
        backgroundColor: '#fff',
        position: 'relative',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h3 style={{ margin: '0 0 6px 0', color: '#2c3e50' }}>{name}</h3>
          {isSpicy && (
            <span
              style={{
                backgroundColor: '#ffebee',
                color: '#c62828',
                padding: '2px 8px',
                borderRadius: '4px',
                fontSize: '0.8rem',
                fontWeight: 'bold',
                display: 'inline-block',
                marginBottom: '8px',
              }}
            >
              🌶 Món cay
            </span>
          )}
        </div>

        <button
            className={`favorite-btn ${isFavorite ? 'is-active' : ''}`}
            onClick={() => onToggleFavorite(id)}
          style={{
            padding: '6px 12px',
            borderRadius: '20px',
            border: '1px solid #ccc',
            backgroundColor: isFavorite ? '#ffebee' : '#f5f5f5',
            color: isFavorite ? '#d32f2f' : '#555',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          {isFavorite ? '♥ Đã thích' : '♡ Yêu thích'}
        </button>

      </div>

      <p style={{ color: '#666', fontSize: '0.9rem', margin: '6px 0' }}>{description}</p>
      <div style={{ fontWeight: 'bold', color: '#2e7d32', marginTop: '8px' }}>
        Giá: {price.toLocaleString('vi-VN')}đ
      </div>
    </div>
  );
}

export default MenuItem;