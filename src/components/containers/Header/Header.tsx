function Header() {
  return (
    <div className="header flex flex-row justify-between items-center text-[18px] font-[Comfortaa,Arial] z-10 py-5">
      <h1 className="text-[18px] text-center font-medium">
        Madelyn Torff
      </h1>

      <nav>
        <ul className="flex flex-row list-none">
          <li className="pl-12">
            <a href="#about" className="no-underline text-black">
              About
            </a>
          </li>
          <li className="pl-12">
            <a href="#projects" className="no-underline text-black">
              Projects
            </a>
          </li>
          <li className="pl-12">
            <a href="#contacts" className="no-underline text-black">
              Contacts
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;