import { Link } from "react-router-dom";

const ProductItem = ({ id,image }) => {
  return (
    <Link
      className="text-gray-700 cursor-pointer"
      to={`/product/${id}`}
      onClick={() => scrollTo(0, 0)}
    >
      <div className="overflow-hidden">
        <img
          src={image[0]}
          alt=""
          className="hover:scale-110 transition ease-in-out"
        />
      </div>
     
    </Link>
  );
};

export default ProductItem;
