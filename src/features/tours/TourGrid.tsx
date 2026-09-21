type TourGridProps = {
  tours: any[];
};

export function TourGrid({ tours }: TourGridProps) {
  if (!tours || tours.length === 0) {
    return <p className="no-tours">Không tìm thấy tour nào phù hợp với khoảng giá này.</p>;
  }

  return (
    <div className="tour-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '16px', marginTop: '20px' }}>
      {tours.map((tour) => (
        <div key={tour.id} className="tour-card" style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '12px' }}>
          {tour.image && <img src={tour.image} alt={tour.name} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '4px' }} />}
          <h3>{tour.name}</h3>
          <p>Giá: {tour.price?.toLocaleString()}đ</p>
          <p>Thời lượng: {tour.duration} giờ</p>
        </div>
      ))}
    </div>
  );
}