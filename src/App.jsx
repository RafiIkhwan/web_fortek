import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footer'
import About from './components/About'
import History from './components/History'
import Join from './components/Join'

function App() {
  return (
    <div id='home' className='mx-auto w-full'>
      <Navbar />
      <Banner />
      <About />
      <History />
      <Join />
      <div className="relative bottom-0">
        <Footer />
      </div>
    </div>
  )
}

export default App
