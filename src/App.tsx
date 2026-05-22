import './App.css'
import Footer from './components/containers/Footer/Footer'
import Header from './components/containers/Header/Header'
import Main from './components/containers/Main/Main'

function App() {
  return (
    <>
      <div className="App">
        <img src='/assets/yellow-background.png' alt='yellow background' className='yellow-bg'></img>
        <img src='/assets/image.png' alt='portrait' className='photo'></img>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </>
  )
}

export default App
