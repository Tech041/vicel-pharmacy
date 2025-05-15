import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      className=" cursor-pointer border-2 border-white shadow-lg rounded-lg overflow-hidden flex  justify-center items-center bg-gray-500"
      to={`/product/${id}`}
      onClick={() => scrollTo(0, 0)}
    >
      <div className=" w-[98%] h-[98%] bg-white rounded-lg overflow-hidden">
        <div className="overflow-hidden flex justify-center">
          <img
            src={image[0]}
            alt=""
            className="hover:scale-110 transition ease-in-out "
          />
        </div>
        <p className="pt-3 pb-1 text-sm text-center font-bold text-orange-700">
          {name}
        </p>
        <div className="flex justify-between items-center px-4  pb-2">
          <p className="text-sm text-center font-medium">
            {currency}
            {price}
          </p>
          <p className="font-semibold text-white px-4 py-2 rounded-lg bg-orange-600 hover:bg-orange-400 shadow-lg transition duration-300 ease-in-out cursor-pointer">
            Read More
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
