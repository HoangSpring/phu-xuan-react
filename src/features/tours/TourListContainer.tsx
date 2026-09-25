import { useState } from 'react';
import { tours } from '../../data/tours';
import { TourListView } from './TourListView';

// Container chịu trách nhiệm quản lý State và Logic lọc dữ liệu
export function TourListContainer() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000);

  const filteredTours = tours.filter(
    (t) => t.price >= minPrice && t.price <= maxPrice
  );

  return (
    <TourListView
      filteredTours={filteredTours}
      totalCount={tours.length}
      minPrice={minPrice}
      maxPrice={maxPrice}
      onMinChange={setMinPrice}
      onMaxChange={setMaxPrice}
    />
  );
}