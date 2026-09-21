type PriceFilterProps = {
  minPrice: number;
  maxPrice: number;
  onMinChange: (value: number) => void;
  onMaxChange: (value: number) => void;
};

export function PriceFilter({
  minPrice,
  maxPrice,
  onMinChange,
  onMaxChange,
}: PriceFilterProps) {
  return (
    <div className="price-filter">
      <label>
        Từ:
        <input
          type="range"
          min={0}
          max={1000000}
          step={50000}
          value={minPrice}
          onChange={(e) => onMinChange(Number(e.target.value))}
        />
        <span>{minPrice.toLocaleString()}đ</span>
      </label>
      <label>
        Đến:
        <input
          type="range"
          min={0}
          max={1000000}
          step={50000}
          value={maxPrice}
          onChange={(e) => onMaxChange(Number(e.target.value))}
        />
        <span>{maxPrice.toLocaleString()}đ</span>
      </label>
    </div>
  );
}