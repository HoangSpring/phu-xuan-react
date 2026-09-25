import { useState } from 'react';
import { TourListContainer } from './features/tours/TourListContainer';
import { DiTichListView } from './features/ditich/DiTichListView';

type Trang = 'tour' | 'ditich';

function App() {
  const [trang, setTrang] = useState<Trang>('tour');

  return (
    <div>
      <nav className="top-nav" style={{ padding: '16px 20px', backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0', display: 'flex', gap: '12px' }}>
        <button
          onClick={() => setTrang('tour')}
          disabled={trang === 'tour'}
          style={{ padding: '8px 16px', cursor: 'pointer' }}
        >
          Tour
        </button>
        <button
          onClick={() => setTrang('ditich')}
          disabled={trang === 'ditich'}
          style={{ padding: '8px 16px', cursor: 'pointer' }}
        >
          Di tích
        </button>
      </nav>
      {trang === 'tour' ? <TourListContainer /> : <DiTichListView />}
    </div>
  );
}

export default App;