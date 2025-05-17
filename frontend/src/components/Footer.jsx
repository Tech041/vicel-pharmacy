import { Link } from "react-router-dom";
import Container from "./Container";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="border-t mt-5 bg-[url('/footer.png')] bg-cover text-white h-full ">
      <Container>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center  gap-14 my-10 mt-40 text-sm">
          <div className="">
            <div className="">
              <p className="text-xl font-medium mb-5  text-orange-700 ">
                Vicel Pharmacy
              </p>
              <a href="#home" className="">
                <img
                  src="/vicel_logo.jpg"
                  alt=""
                  width={50}
                  height={50}
                  className="w-[30px] h-[30px] rounded-full"
                />
              </a>
            </div>
          </div>
          <div className="">
            <p className="text-xl font-medium mb-5  ">COMPANY</p>
            <ul className="flex flex-col gap-1 ">
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
              <div className="flex items-center justify-center gap-3 ">
                <div className="">
                  <a
                    href="https://www.facebook.com/share/1Dfx7wUz2t/?mibextid=wwXIfr"
                    target="_blank"
                    className=""
                  >
                    <span className="">
                      <FaFacebookF size={20} color="blue" />
                    </span>
                  </a>
                </div>
                <div className="">
                  <a
                    href="https://www.instagram.com/vicelpharmacy?igsh=ejBxaW9uZnA3eTZu&utm_source=qr"
                    target="_blank"
                    className=""
                  >
                    <span className="">
                      <FaInstagram size={20} color="red" />
                    </span>
                  </a>
                </div>
                <div className="">
                  <a href="https://wa.link/nylble" target="_blank" className="">
                    <span className="">
                      <FaWhatsapp size={20} color="green" />
                    </span>
                  </a>
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
