import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center pb-6 shrink-0 bg-[#F9FAFF] w-full">
      <div className="flex items-center p-2">
        <AiFillInstagram size={50} className="p-2 cursor-pointer hover:text-[#FDC435] transition-colors" />
        <FaLinkedin size={50} className="p-2 cursor-pointer hover:text-[#FDC435] transition-colors" />
        <IoIosMail size={50} className="p-2 cursor-pointer hover:text-[#FDC435] transition-colors" />
      </div>

      <span className="text-[#828282] font-nunito text-[14px]">
        Madelyn Torff 2026
      </span>
    </footer>
  );
}

export default Footer;