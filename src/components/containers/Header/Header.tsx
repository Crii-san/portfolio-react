import './Header.css'

function Header() {
  return (
    <div className="header">
        <h1>Madelyn Torff</h1>
        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contacts">Contacts</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header;