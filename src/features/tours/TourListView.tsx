import type { Tour } from '../../data/tours';
import { PageLayout } from '../../components/PageLayout';
import { PriceFilter } from './PriceFilter';
import { SearchBox } from './SearchBox';
import { TourGrid } from './TourGrid';

type TourListViewProps = {
  filteredTours: Tour[];
  totalCount: number;
  minPrice: number;
  maxPrice: number;
  query: string;
  onMinChange: (value: number) => void;
  onMaxChange: (value: number) => void;
  onQueryChange: (value: string) => void;
};

export function TourListView({
  filteredTours,
  totalCount,
  minPrice,
  maxPrice,
  query,
  onMinChange,
  onMaxChange,
  onQueryChange,
}: TourListViewProps) {
  return (
    <PageLayout
      header={
        <>
          <h1>Khám phá Huế qua {totalCount} hành trình</h1>
          <SearchBox
            value={query}
            onChange={onQueryChange}
            placeholder="Tìm tên tour (VD: Đại Nội)..."
          />
        </>
      }
      sidebar={
        <>
          <h2>Bộ lọc</h2>
          <PriceFilter
            minPrice={minPrice}
            maxPrice={maxPrice}
            onMinChange={onMinChange}
            onMaxChange={onMaxChange}
          />
        </>
      }
      main={
        <>
          <p className="filter-summary">
            {filteredTours.length} / {totalCount} tour phù hợp
          </p>
          {filteredTours.length === 0 ? (
            <p className="empty-state">
              Không có tour nào phù hợp. Hãy nới bộ lọc hoặc thử từ khóa khác.
            </p>
          ) : (
            <TourGrid tours={filteredTours} />
          )}
        </>
      }
    />
  );
}