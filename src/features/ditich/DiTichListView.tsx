import { useDiTichList } from './useDiTichList';
import { danhSachDiTich } from '../../data/ditich';
import { DiTichCard } from './DiTichCard';
import { DiTichFilter } from './DiTichFilter';
import { SearchBox } from '../tours/SearchBox';
import { PageLayout } from '../../components/PageLayout';

export function DiTichListView() {
  const { danhSachHienThi, boLoc, capNhatBoLoc, danhDauDaThamQuan, resetBoLoc } =
    useDiTichList(danhSachDiTich);

  return (
    <PageLayout
      header={
        <>
          <h1>Di tích Huế</h1>
          <SearchBox
            value={boLoc.tuKhoa}
            onChange={(value) => capNhatBoLoc({ tuKhoa: value })}
            placeholder="Tìm di tích..."
          />
        </>
      }
      sidebar={
        <DiTichFilter
          boLoc={boLoc}
          onChange={capNhatBoLoc}
          onReset={resetBoLoc}
        />
      }
      main={
        <>
          <p>Hiển thị {danhSachHienThi.length} / {danhSachDiTich.length} di tích</p>
          <div
            className="ditich-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '16px',
              marginTop: '16px',
            }}
          >
            {danhSachHienThi.map((d) => (
              <DiTichCard
                key={d.id}
                diTich={d}
                onToggleThamQuan={danhDauDaThamQuan}
              />
            ))}
          </div>
        </>
      }
    />
  );
}