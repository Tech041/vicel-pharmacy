import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";
import SEO from "../components/SEO";
import Container from "../components/Container";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };
  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <Container>
      <div className="border-t-2 pt-28 transition-opacity ease-in duration-500 opacity-100 ">
        <SEO
          content="This is place order page of Nelpharma"
          title="product Page"
          route="/product"
        />
        {/* ----------Product Data--------- */}
        <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
          {/* Product Images */}
          <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
            <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
              {productData.image.map((item, index) => (
                <img
                  onClick={() => setImage(item)}
                  key={index}
                  src={item}
                  alt=""
                  className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                />
              ))}
            </div>
            <div className="w-full sm:w-[80%] ">
              <img src={image} alt="" className="w-full h-auto" />
            </div>
          </div>
          {/* -------Product Info------------ */}
          <div className="flex-1">
            <h1 className="font-medium text-2xl mt-2 text-orange-700">
              {productData.name}
            </h1>
            <div className="flex items-center gap-1 mt-2">
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_dull_icon} alt="" className="w-3 5" />
              <p className="pl-2">(122)</p>
            </div>
            <p className="mt-5 text-3xl font-medium">
              {currency}
              {productData.price}.00
            </p>
            <p className="mt-5 text-gray-500 md:w-4/5">
              {productData.description}
            </p>
            <div className="flex flex-col gap-4 my-8">
              <p className="text-red-500">Product Size</p>
              <div className="flex gap-2">
                {productData.sizes.map((item, index) => (
                  <button
                    onClick={() => setSize(item)}
                    key={index}
                    className={`border py-2 px-4 bg-gray-100 ${
                      item === size ? "border-orange-500" : ""
                    } `}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={() => {
                scrollTo(0, 0), addToCart(productData._id, size);
              }}
              className="bg-green-600 hover:bg-green-500 text-white px-8 py-3 text-sm active:bg-gray-700"
            >
              ADD TO CART
            </button>
            <hr className="mt-8 sm:w-4/5" />
            <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
              <p className="">100% Original product.</p>
              <p className="">Cash on delivery is available on this product.</p>
              <p className="">Easy return and exchange policy within 7 days.</p>
            </div>
          </div>
        </div>
        {/* -------Description  and review ---------- */}
        <div className="mt-20 ">
          <div className="flex pb-3 ">
            <b className="border  px-5 py-3 text-sm  text-orange-600">
              Description
            </b>
            <p className="border  px-5 py-3 text-sm text-orange-600">
              Reviews <span className="text-green-600">(122)</span>
            </p>
          </div>
          <div className="flex flex-col gap-4 border px-6 py-4 text-sm text-green-700 ">
            <p className="">
              Vicel Pharmacy is a modern e-commerce platform designed to provide
              seamless access to pharmaceutical products and healthcare
              essentials. Our online store enables customers to conveniently
              browse, purchase, and receive medications from the comfort of
              their homes.
            </p>
            <p className="text-green-700">
              {" "}
              Vicel Pharmacy makes accessing medications easy with a seamless
              shopping experience, secure payments, and fast delivery. Your
              health, our priority!
            </p>
          </div>
        </div>
        {/* ------Display related products-------- */}

        <RelatedProducts
          category={productData.category}
          subCategory={productData.subCategory}
        />
      </div>
    </Container>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
