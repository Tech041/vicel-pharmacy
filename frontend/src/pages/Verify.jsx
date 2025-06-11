import { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Verify = () => {
  const { navigate, token, setCartItems, backendUrl } = useContext(ShopContext);
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const verifyPayment = async () => {
    try {
      if (!token) {
        return null;
      }

      const response = await axios.post(
        backendUrl + "/api/order/verifyStripe",
        { success, orderId },
        { headers: { token } }
      );
      if (response.data.success) {
        setCartItems({});
      } else {
        navigate("/cart");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    verifyPayment();
  }, [token]);
  return (
    <div className=" h-screen w-full flex flex-col  items-center justify-center gap-4">
      <h1 className="text-green-500 text-3xl font-bold">
        Order placed Successfully
      </h1>
      <div className=" flex justify-center items-center my-4">
        <Link
          to={"/orders"}
          className="bg-orange-600 text-white px-4 py-1 rounded-lg"
        >
          My orders
        </Link>
      </div>
    </div>
  );
};

export default Verify;
