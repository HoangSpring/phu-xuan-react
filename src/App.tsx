import The from "./components/The";
import TheDiaDanh from "./components/TheDiaDanh";
import { DANH_SACH_DIA_DANH } from "./du-lieu/diaDanh";
import "./App.css";

function App() {
  return (
    <div className="trang">
      <h1>Khám phá Cố đô Huế</h1>

      <The tieuDe="Di tích tiêu biểu">
        <div className="luoi-dia-danh">
          {DANH_SACH_DIA_DANH.map((dd) => (
            <TheDiaDanh key={dd.id} anh={dd.anh} ten={dd.ten} moTa={dd.moTa} />
          ))}
        </div>
      </The>

      <The tieuDe="Ẩm thực Huế">
        <ul>
          <li>Bún bò Huế</li>
          <li>Cơm hến</li>
          <li>Bánh bèo, bánh nậm, bánh lọc</li>
        </ul>
      </The>
    </div>
  );
}

export default App;