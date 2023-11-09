import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footer'
import About from './components/About'

function App() {
  return (
    <div className='mx-auto w-full'>
      <Navbar />
      <Banner />
      <About />
      <div className="relative bottom-0">
        <Footer />
      </div>
    </div>
  )
}

export default App
