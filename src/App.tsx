import Footer from './components/containers/Footer/Footer'
import Header from './components/containers/Header/Header'
import Main from './components/containers/Main/Main'

function App() {
  return (
    <div className="flex flex-col flex-1 mx-24 bg-[#F9FAFF]">
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

      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App