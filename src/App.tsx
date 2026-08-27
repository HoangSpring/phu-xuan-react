import { APP_NAME } from './constants';
import PostList from './features/posts/PostList';

export default function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1>{APP_NAME}</h1>
      <PostList />
    </div>
  );
}