import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center py-20">
      <div className="flex items-center p-4">
        <AiFillInstagram size={70} className="p-4" />
        <FaLinkedin size={70} className="p-4" />
        <IoIosMail size={70} className="p-4" />
      </div>

      <span className="text-[#828282] font-nunito">
        Madelyn Torff 2026
      </span>
    </footer>
  );
}

export default Footer;