import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import Spinner from "./Spinner";
import Container from "./Container";

const LatestCollection = () => {
  const { products, loading } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <section className="">
      <Container>
        <div className="my-10">
          <div className="text-center py-8 text-3xl">
            <Title text1={"NEW"} text2={"ARRIVALS"} />
            {/* <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Welcome to Nelpharma, your one-stop online pharmacy. We offer a wide
          range of prescription drugs, over-the-counter medications, and
          healthcare essentials—all sourced from trusted manufacturers and
          delivered right to your doorstep.
        </p> */}
          </div>
          {/* Rendering products */}
          {loading ? (
            <Spinner />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-6">
              {latestProducts.map((item, index) => (
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

export default LatestCollection;
