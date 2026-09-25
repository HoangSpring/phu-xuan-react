import { tour } from '../../du-lieu/monAn';

type TourGridProps = {
  tours: tour[];
};

export function TourGrid({ tours }: TourGridProps) {
  return (
    <div className="tour-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '16px', marginTop: '20px' }}>
      {tours.map((tour) => (
        <div key={tour.id} className="tour-card" style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '12px' }}>
          <h3>{tour.name}</h3>
          <p>Giá: {tour.price.toLocaleString('vi-VN')}đ</p>
          <p>Thời lượng: {tour.duration} giờ</p>
        </div>
      ))}
    </div>
  );
}