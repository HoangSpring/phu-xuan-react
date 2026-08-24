import { formatDate, toSlug } from './utils';
import { APP_NAME } from './constants';
import type { Post } from './types';

const samplePost: Post = {
  id: 1,
  title: 'Giới thiệu React và hệ sinh thái hiện đại',
  excerpt: 'Bài viết đầu tiên của phu-xuan-react giới thiệu các khái niệm cốt lõi.',
  content: 'Nội dung đầy đủ sẽ được tải từ API...',
  authorId: 1,
  publishedAt: new Date().toISOString(),
  tags: ['react', 'javascript', 'frontend'],
};

export default function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '800px' }}>
      <h1>{APP_NAME}</h1>
      <hr />
      <article>
        <h2>{samplePost.title}</h2>
        <p style={{ color: 'gray' }}>
          Đăng ngày: {formatDate(samplePost.publishedAt)}
        </p>
        <p>{samplePost.excerpt}</p>
        <p>
          Slug URL: <code>/{toSlug(samplePost.title)}</code>
        </p>
        <div>
          Tags: {samplePost.tags.map(tag => (
            <span key={tag} style={{ marginRight: 8, background: '#eee', padding: '2px 8px', borderRadius: 4 }}>
              {tag}
            </span>
          ))}
        </div>
      </article>
    </div>
  );
}