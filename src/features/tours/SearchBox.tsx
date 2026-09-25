type SearchBoxProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

// Component trình bày thuần túy, không có useState
export function SearchBox({ value, onChange, placeholder }: SearchBoxProps) {
  return (
    <div className="search-box" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder ?? 'Tìm kiếm...'}
        style={{ padding: '8px 12px', borderRadius: '4px', border: '1px solid #ccc', width: '300px' }}
      />
      {value && (
        <button
          type="button"
          className="search-box__clear"
          onClick={() => onChange('')}
          aria-label="Xóa từ khóa"
          style={{ padding: '8px 12px', cursor: 'pointer' }}
        >
          X
        </button>
      )}
    </div>
  );
}