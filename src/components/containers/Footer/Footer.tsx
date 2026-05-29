import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="icons">
        <AiFillInstagram className="icon" size={40}/>
        <FaLinkedin className="icon" size={40}/>
        <IoIosMail className="icon" size={40}/>
      </div>
      <span className="text-footer">Madelyn Torff 2026 </span>
    </div>
  );
}

export default Footer;