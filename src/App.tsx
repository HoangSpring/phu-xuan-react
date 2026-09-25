import FormThemDiaDiem from './features/dia-diem/FormThemDiaDiem';
import FormGopY from './features/gop-y/FormGopY';

function App() {
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Thêm địa điểm tham quan</h1>
      <FormThemDiaDiem />
      <FormGopY />
    </div>
  );
}

export default App;