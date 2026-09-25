import { useState } from 'react';
import { tours } from '../../data/tours';
import { TourListView } from './TourListView';

export function TourListContainer() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [query, setQuery] = useState('');

  // Lọc kết hợp: theo khoảng giá VÀ theo từ khóa tìm kiếm
  const normalized = query.trim().toLowerCase();
  const filteredTours = tours
    .filter((t) => t.price >= minPrice && t.price <= maxPrice)
    .filter((t) =>
      normalized === '' ? true : t.name.toLowerCase().includes(normalized)
    );

  return (
    <TourListView
      filteredTours={filteredTours}
      totalCount={tours.length}
      minPrice={minPrice}
      maxPrice={maxPrice}
      query={query}
      onMinChange={setMinPrice}
      onMaxChange={setMaxPrice}
      onQueryChange={setQuery}
    />
  );
}