import type { ReactNode } from 'react';

type PageLayoutProps = {
  header: ReactNode;
  sidebar: ReactNode;
  main: ReactNode;
};

// Khung 3 khe dùng chung, không hardcode nội dung tour
export function PageLayout({ header, sidebar, main }: PageLayoutProps) {
  return (
    <div className="page-layout" style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <header className="page-layout__header" style={{ marginBottom: '20px' }}>
        {header}
      </header>
      <div className="page-layout__body" style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '24px' }}>
        <aside className="page-layout__sidebar">{sidebar}</aside>
        <main className="page-layout__main">{main}</main>
      </div>
    </div>
  );
}