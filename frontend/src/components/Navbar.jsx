import { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { BsCart4 } from "react-icons/bs";
import Container from "./Container";
import { GiHamburgerMenu } from "react-icons/gi";

const hrStyle = "w-2/4 border-none h-[2px] bg-orange-500 hidden";
const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  const location = useLocation();
  // setting visibility for search icon only on collection page
  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setShowIcon(true);
    } else {
      setShowIcon(false);
    }
  }, [location]);
  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
    navigate("/login");
  };
  return (
    <header className=" fixed py-2 h-auto w-full border-b border-gray-400  bg-green-700 z-40">
      <Container>
        <div className="flex items-center justify-between py-5 font-medium  ">
          <Link to="/" className="flex flex-col justify-center items-center">
            <img
              src="/vicel_logo.jpg"
              alt=""
              width={30}
              height={30}
              className="w-[30px] h-[30px] rounded-full"
            />
            <span className="text-[8px] text-white">
              Leading a healthy lifestyle.
            </span>
          </Link>

          <ul className="hidden sm:flex gap-5 text-sm text-white font-extrabold">
            <NavLink to="/" className="flex flex-col items-center gap-1">
              <p className="hover:text-green-400">HOME</p>
              <hr className={hrStyle} />
            </NavLink>
            <NavLink
              to="/collection"
              className="flex flex-col items-center gap-1"
            >
              <p className="hover:text-green-400">COLLECTION</p>
              <hr className={hrStyle} />
            </NavLink>{" "}
            <NavLink to="/about" className="flex flex-col items-center gap-1">
              <p className="hover:text-green-400">ABOUT</p>
              <hr className={hrStyle} />
            </NavLink>{" "}
            <NavLink to="/contact" className="flex flex-col items-center gap-1">
              <p className="hover:text-green-400">CONTACT</p>
              <hr className={hrStyle} />
            </NavLink>
            <a
              href="https://vicel-pharmacy-admin.vercel.app"
              target="_blank"
              className="text-orange-500 px-6"
            >
              Admin
            </a>
          </ul>
          <div className="flex  items-center gap-6">
            {showIcon && (
              <img
                onClick={() => setShowSearch(true)}
                src={assets.search_icon}
                alt=""
                className="w-5 cursor-pointer"
              />
            )}
            <div className="group relative bg-white p-3 rounded-full">
              <span className="flex items-center justify-center gap-2">
                <img
                  onClick={() => (token ? null : navigate("/login"))}
                  src={assets.profile_icon}
                  alt=""
                  className="w-4 cursor-pointer"
                />
              </span>
              {/* Dropdown menu */}
              {token && (
                <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                  <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                    <Link
                      to={"/user-profile"}
                      className="cursor-pointer hover:text-black"
                    >
                      My Profile
                    </Link>
                    <Link
                      to={"/orders"}
                      className="cursor-pointer hover:text-black"
                    >
                      Orders
                    </Link>
                    <Link
                      onClick={logout}
                      to={"/login"}
                      className="cursor-pointer hover:text-black"
                    >
                      Logout
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link to="/cart" className="relative bg-black p-2 rounded-full">
              <BsCart4 size={20} color="white" />
              <p className="absolute right-[-7px] top-[-4px] w-4 text-center leading-4 bg-red-500 text-white aspect-square rounded-full text-[10px]">
                {getCartCount()}
              </p>
            </Link>
            <span
              onClick={() => setVisible(true)}
              className="w-5 cursor-pointer sm:hidden"
            >
              <GiHamburgerMenu color="white" size={20} />
            </span>
          </div>
          {/* Sidebar menu for smaller screen */}
          <div
            className={` sm:hidden absolute top-0 bottom-0 w-full  overflow-hidden h-screen bg-white  transition- ease-in-out duration-700 z-50 ${
              visible ? "right-0" : "right-[-100%]"
            }`}
          >
            <div className="flex flex-col text-gray-600">
              <div
                onClick={() => setVisible(false)}
                className="flex items-center gap-4 p-3 cursor-pointer"
              >
                <img
                  className="h-4 rotate-180"
                  src={assets.dropdown_icon}
                  alt=""
                />
                <p className="text-red-500">Back</p>
              </div>
              <NavLink
                onClick={() => setVisible(false)}
                className="py-2 pl-6 border"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                onClick={() => setVisible(false)}
                className="py-2 pl-6 border"
                to="/collection"
              >
                Collection
              </NavLink>
              <NavLink
                onClick={() => setVisible(false)}
                className="py-2 pl-6 border"
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                onClick={() => setVisible(false)}
                className="py-2 pl-6 border"
                to="/contact"
              >
                Contact
              </NavLink>

              <a
                href="https://vicel-pharmacy-admin.vercel.app"
                target="_blank"
                className="text-blue-500 px-6 py-2"
              >
                Admin
              </a>
              {!token && (
                <NavLink
                  onClick={() => setVisible(false)}
                  className="py-2 pl-6 border"
                  to="/login"
                >
                  Login
                </NavLink>
              )}
              {token ? (
                <div onClick={() => setVisible(false)} className="mt-2 w-full">
                  <button
                    onClick={logout}
                    className=" w-full bg-red-600 text-white px-3 py-1 "
                  >
                    Logout
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
