import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const Navbar = ({ setToken }) => {
  return (
    <div className="flex items-center py-2 px-[4%] justify-between">
      <Link to={"/list"}>
        <span className="text-green-500">Vicel Admin</span>
      </Link>
      <button
        onClick={() => setToken("")}
        className=" bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
