import './Home.css'

function Home() {
  return (
    <div className="home">
        <div className="intro">
            <span className="job-title">WEB DEVELOPER</span>
            <h2>Hello,  my name is Madelyn Torff</h2>
            <p className="home-paragraph">Short text with details about you, what you do or your professional career. You can add more information on the about page.</p>
            <div className='home-button-container'>
                <button className="button-yellow">Projects</button>
                <button className="button-white">Linkedin</button>
            </div>
        </div>
    </div>
  );
}

export default Home;