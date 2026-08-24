import Header from './components/Header'
import WelcomeBanner from './components/WelcomeBanner'
import PostCard from './components/PostCard'
import Footer from './components/Footer'

// 1. Thêm import từ file string-utils bạn vừa copy/tạo trong src/utils/
import { formatDate, toSlug } from './utils/string-utils'

function App() {
  // 2. Thêm console.log để kiểm tra hàm hoạt động
  console.log('Hôm nay:', formatDate(new Date()))
  console.log('Slug:', toSlug('Trang chủ phu-xuan-react'))

  return (
    <>
      <Header />
      <main>
        <WelcomeBanner />
        <PostCard />
      </main>
      <Footer />
    </>
  )
}

export default App