function CategoryTabs({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="category-tabs" style={{ display: 'flex', gap: '8px', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
      {categories.map((category) => (
        <button
          key={category}
          className={category === selectedCategory ? 'is-active' : ''}
          onClick={() => onSelectCategory(category)}
          style={{
            padding: '6px 14px',
            borderRadius: 20,
            border: '1px solid #ccc',
            backgroundColor: category === selectedCategory ? '#1976d2' : '#f5f5f5',
            color: category === selectedCategory ? '#fff' : '#333',
            fontWeight: category === selectedCategory ? 'bold' : 'normal',
            cursor: 'pointer'
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryTabs;