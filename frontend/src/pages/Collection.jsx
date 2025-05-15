import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import SEO from "../components/SEO";
import Container from "../components/Container";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };
  // For subcaregory
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };
  const applyFilter = () => {
    let productCopy = products.slice();
    if (showSearch && search) {
      productCopy = productCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category.length > 0) {
      productCopy = productCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productCopy = productCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    setFilterProducts(productCopy);
  };

  // Product sorting
  const sortProduct = () => {
    let filterProductsCopy = filterProducts.slice();
    switch (sortType) {
      case "low-high":
        setFilterProducts(filterProductsCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(filterProductsCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, subCategory, search, showSearch, products]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <Container>
      <section className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
        <SEO
          content="This is collections page of Nelpharma"
          title="Collections Page"
          route="/collections"
        />
        {/* filter options */}
        <div className="min-w-60">
          <p
            onClick={() => setShowFilter(!showFilter)}
            className="my-2 text-xl flex items-center gap-2 cursor-pointer"
          >
            FILTERS
            <img
              src={assets.dropdown_icon}
              className={` h-3  sm:hidden ${showFilter ? "rotate-90" : ""}`}
              alt=""
            />
          </p>
          {/* category filter */}
          <div
            className={`border border-gray-300 pl-5 py-3 mt-6 ${
              showFilter ? "" : "hidden"
            } sm:block `}
          >
            <p className="mb-3 text-sm text-green-700  font-medium">
              CATEGORIES
            </p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2 text-purple-700">
                <input
                  type="checkbox"
                  className="w-3"
                  value="Men"
                  onChange={toggleCategory}
                />
                Men
              </p>
              <p className="flex gap-2 text-purple-700">
                <input
                  type="checkbox"
                  className="w-3"
                  value="Women"
                  onChange={toggleCategory}
                />
                Women
              </p>{" "}
              <p className="flex gap-2 text-purple-700">
                <input
                  type="checkbox"
                  className="w-3"
                  value="Kids"
                  onChange={toggleCategory}
                />
                Kids
              </p>
            </div>
          </div>
          {/* Subcategory filter */}
          <div
            className={`border border-gray-300 pl-5 py-3 my-5 ${
              showFilter ? "" : "hidden"
            } sm:block `}
          >
            <p className="mb-3 text-sm text-green-950 font-medium">
              Subcategory
            </p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2 text-orange-600">
                <input
                  type="checkbox"
                  className="w-3"
                  value="Multivitamin"
                  onChange={toggleSubCategory}
                />{" "}
                Multivitamin
              </p>
              <p className="flex gap-2 text-orange-600">
                <input
                  type="checkbox"
                  className="w-3"
                  value="Beauty"
                  onChange={toggleSubCategory}
                />
                Beauty
              </p>{" "}
              <p className="flex gap-2 text-orange-600">
                <input
                  type="checkbox"
                  className="w-3"
                  value="Heart/Brain"
                  onChange={toggleSubCategory}
                />
                Heart/Brain
              </p>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="flex-1">
          <div className="flex justify-between text-base sm:text-2xl mb-4">
            <Title text1={"ALL"} text2={"COLLECTIONS"} />
            {/* PRODUCT SORT */}
            <select
              onChange={(e) => setSortType(e.target.value)}
              className="border-2 border-gray-300 text-sm px-2"
            >
              <option value="relevant">Sort by:Traffic</option>
              <option value="low-high">Sort by:Low to High</option>
              <option value="high-low">Sort by:High to Low</option>
            </select>
          </div>
          {/* map products */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-6">
            {filterProducts.map((item, index) => (
              <ProductItem
                key={index}
                id={item._id}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Collection;
