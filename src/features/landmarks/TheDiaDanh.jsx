import React from 'react';

const TheDiaDanh = React.memo(({ diaDanh, onYeuThich }) => {
  // Console log để theo dõi thời điểm component này render lại
  console.log(`[RENDER] TheDiaDanh: ${diaDanh.ten}`);

  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '6px',
        padding: '10px 14px',
        marginBottom: '8px',
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div>
        <strong style={{ fontSize: '15px', color: '#1565c0' }}>{diaDanh.ten}</strong>
        <span style={{ marginLeft: '10px', fontSize: '13px', color: '#666' }}>
          ({diaDanh.khuVuc})
        </span>
      </div>
      <button
        onClick={() => onYeuThich(diaDanh)}
        style={{
          padding: '4px 10px',
          borderRadius: '4px',
          border: '1px solid #e91e63',
          backgroundColor: '#fce4ec',
          color: '#c2185b',
          cursor: 'pointer',
          fontSize: '12px',
          fontWeight: 'bold',
        }}
      >
        ❤️ Yêu thích
      </button>
    </div>
  );
});

export default TheDiaDanh;