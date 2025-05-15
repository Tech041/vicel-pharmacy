import { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import SEO from "../components/SEO";
import axios from "axios";
import { toast } from "react-toastify";
import Container from "../components/Container";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const {
    navigate,
    backendUrl,
    token,
    cartItems,
    setCartItems,
    getCartAmount,
    delivery_fee,
    products,
  } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((data) => ({ ...data, [name]: value }));
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      let orderItems = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === items)
            );
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }
      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
      };
      switch (method) {
        // Api call for COD
        case "cod":
          // eslint-disable-next-line no-case-declarations
          const response = await axios.post(
            backendUrl + "/api/order/place",
            orderData,
            { headers: { token } }
          );
          console.log(response.data);
          if (response.data.success) {
            setCartItems({});
            navigate("/orders");
          } else {
            navigate("/login");
            toast.error(response.data.message);
          }
          break;
        case "stripe":
          // eslint-disable-next-line no-case-declarations
          const responseStripe = await axios.post(
            backendUrl + "/api/order/stripe",
            orderData,
            { headers: { token } }
          );
          console.log(responseStripe.data);
          if (responseStripe.data.success) {
            const { session_url } = responseStripe.data;
            window.location.replace(session_url);
          } else {
            navigate("/login");
            toast.error(responseStripe.data.message);
          }

          break;
        default:
          break;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <Container>
      <form
        onSubmit={onSubmitHandler}
        className="flex  flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-4 min-h-[80vh] border-t "
      >
        <SEO
          content="This is place order page of Nelpharma"
          title="Place order Page"
          route="/place-order"
        />
        {/* left side */}
        <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
          <div className="text-xl sm:text-2xl my-3 ">
            <Title text1={"DELIVERY"} text2={"INFORMATION"} />
          </div>
          <div className="flex gap-3">
            <input
              onChange={onChangeHandler}
              name="firstName"
              value={formData.firstName}
              type="text"
              placeholder="First Name"
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              required
            />
            <input
              onChange={onChangeHandler}
              name="lastName"
              value={formData.lastName}
              type="text"
              placeholder="Last Name"
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              required
            />
          </div>
          <input
            onChange={onChangeHandler}
            name="email"
            value={formData.email}
            type="email"
            placeholder="Email address"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            required
          />
          <input
            onChange={onChangeHandler}
            name="street"
            value={formData.street}
            type="text"
            placeholder="Street"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            required
          />
          <div className="flex gap-3">
            <input
              onChange={onChangeHandler}
              name="city"
              value={formData.city}
              type="text"
              placeholder="City"
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              required
            />
            <input
              onChange={onChangeHandler}
              name="state"
              value={formData.state}
              type="text"
              placeholder="State"
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              required
            />
          </div>
          <div className="flex gap-3">
            <input
              onChange={onChangeHandler}
              name="zipcode"
              value={formData.zipcode}
              type="number"
              placeholder="Zip Code"
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              required
            />
            <input
              onChange={onChangeHandler}
              name="country"
              value={formData.country}
              type="text"
              placeholder="Country"
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              required
            />
          </div>
          <input
            onChange={onChangeHandler}
            name="phone"
            value={formData.phone}
            type="number"
            placeholder="Phone"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            required
          />
        </div>
        {/* right side */}
        <div className="mt-8">
          <div className="mt-8 min-w-80">
            <CartTotal />
          </div>
          <div className="mt-12">
            <Title text1={"PAYMENT"} text2={"METHOD"} />
            {/* payment methods */}
            <div className="flex gap-3 flex-col lg:flex-row">
              <div
                onClick={() => setMethod("stripe")}
                className="flex items-center border p-2 cursor-pointer"
              >
                <p
                  className={`min-w-3.5 h-3.5 border rounded-full  ${
                    method === "stripe" ? "bg-green-400" : ""
                  }`}
                ></p>
                <img src={assets.stripe_logo} alt="" className="h-5 mx-4" />
              </div>
              {/* <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center border p-2 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "razorpay" ? "bg-green-400" : ""
                }`}
              ></p>
              <img src={assets.razorpay_logo} alt="" className="h-5 mx-4" />
            </div> */}
              <div
                onClick={() => setMethod("cod")}
                className="flex items-center border p-2 cursor-pointer"
              >
                <p
                  className={`min-w-3.5 h-3.5 border rounded-full ${
                    method === "cod" ? "bg-green-400" : ""
                  }`}
                ></p>
                <p className="text-gray-500 text-sm font-medium mx-4">
                  CASH ON DELIVERY
                </p>
              </div>
            </div>
            <div className="w-full text-end mt-8">
              <button
                type="submit"
                // onClick={() => navigate("/orders")}
                className="bg-black text-white px-16 py-3 text-sm"
              >
                PLACE ORDER
              </button>
            </div>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default PlaceOrder;
