import { Link } from "react-router-dom";
import Container from "./Container";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="border-t mt-5 border-gray-500 bg-black text-white ">
      <Container>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center  gap-14 my-10 mt-40 text-sm">
          <div className="">
            <div className="">
              <p className="text-xl font-medium mb-5  ">Customer Services</p>
              <ul className="flex flex-col gap-1 ">
                <li className="hover:cursor-pointer">FAQs</li>
                <li className="hover:cursor-pointer">Return Policy</li>
                <li className="hover:cursor-pointer">Our Stores</li>
              </ul>
            </div>
          </div>
          <div className="">
            <p className="text-xl font-medium mb-5  ">COMPANY</p>
            <ul className="flex flex-col gap-1">
              <Link to={"/"} onClick={() => scrollTo(0, 0)}>
                Home
              </Link>
              <Link to={"/about"} onClick={() => scrollTo(0, 0)}>
                About Us
              </Link>
              <Link to={"/contact"} onClick={() => scrollTo(0, 0)}>
                Contact
              </Link>
              <Link to={"/collection"} onClick={() => scrollTo(0, 0)}>
                Collections
              </Link>
            </ul>
          </div>
          <div className="">
            <p className="text-xl font-medium mb-5  ">Contact Us</p>
            <div className="flex  items-center ">
              <div className="flex-flex-col ">
                <div className="flex  items-center gap-2 pb-3">
                  <span className="w-5">
                    <FaInstagram size={20} color="red" />
                  </span>
                  <span className="text-white">@vicelpharmacy</span>
                </div>
                <div className="flex  items-center gap-2">
                  <span className="w-5">
                    <FaWhatsapp size={20} color="green" />
                  </span>
                  <span className="">Whatsapp</span>
                </div>
                <div className="flex  items-center gap-2 pt-3">
                  <span className="w-5">
                    <FaFacebookF size={20} color="blue" />
                  </span>
                  <span className="">Vicel Pharmacy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <hr className="" />
          <p className="py-5 text-sm text-center ">
            Copyright &copy;Vicel Pharmacy {new Date().getFullYear()} <br />
            <span className="">All rights reserved.</span>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
