import About from './components/children/About'
import Footer from './components/containers/Footer'
import Header from './components/containers/Header'
import Main from './components/containers/Main'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="flex flex-col flex-1 mx-24 bg-[#F9FAFF]">
      {/*
      <img
        src="/assets/app/yellow-background.png"
        alt="yellow background"
        className="absolute right-0"
      />

      <img
        src="/assets/app/image.png"
        alt="portrait"
        className="absolute right-0"
      />
      */}

      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App