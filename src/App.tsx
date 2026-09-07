import { useState } from 'react';
import MenuList from './components/MenuList';
import { menu } from './data/menu';

function App() {
  const [favoriteIds, setFavoriteIds] = useState([]);

  function handleToggleFavorite(id) {
    setFavoriteIds((prevIds) =>
      prevIds.includes(id)
        ? prevIds.filter((favId) => favId !== id) 
        : [...prevIds, id] 
    );
  }

  return (
    <div className="app" style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1>Ẩm thực Cố đô Huế</h1>
      <div
        style={{
          backgroundColor: '#e3f2fd',
          color: '#1565c0',
          padding: '12px 16px',
          borderRadius: '6px',
          fontWeight: 'bold',
          marginBottom: '1.5rem',
        }}
      >
        Số món đã yêu thích: {favoriteIds.length}/{menu.length}
      </div>

      <MenuList
        items={menu}
        favoriteIds={favoriteIds}
        onToggleFavorite={handleToggleFavorite}
      />
    </div>
  );
}

export default App;