import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import Spinner from "./Spinner";
import Container from "./Container";

const BestSeller = () => {
  const { products, loading } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item);
    setBestSeller(bestProduct.slice(0, 5));
  }, [products]);
  return (
    <section className="">
      <Container>
        <div className="my-10">
          <div className="text-center text-3xl py-8">
            <Title text1={"BEST"} text2={"SELLERS"} />
            <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
              At Vicel, we offer a wide range of top-quality medications that
              customers trust for their health and well-being.
            </p>
          </div>
          {loading ? (
            <Spinner />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-6">
              {bestSeller.map((item, index) => (
                <ProductItem
                  key={index}
                  id={item._id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                />
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default BestSeller;
