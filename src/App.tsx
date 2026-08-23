import Header from './components/Header'
import WelcomeBanner from './components/WelcomeBanner'
import PostCard from './components/PostCard'
import Footer from './components/Footer'

function App() {
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