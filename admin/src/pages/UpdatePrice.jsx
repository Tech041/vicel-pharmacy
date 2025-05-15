import { useParams } from "react-router-dom";
import axios from "axios";
import { backendUrl } from "../App";
import { useState } from "react";
import { toast } from "react-toastify";

// eslint-disable-next-line react/prop-types
const UpdatePrice = ({ token }) => {
  const { id } = useParams();
  const [newPrice, setNewPrice] = useState(0);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        backendUrl + "/api/product/update-price",
        { newPrice, id },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        setNewPrice("");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log("Error updating price", error);
    }
  };
  console.log(`ProductId is `, id);
  return (
    <div>
      <h1 className="">Update Price</h1>
      <form onSubmit={handleSubmit} className="">
        <div className="flex items-center justify-center">
          <input
            onChange={(e) => setNewPrice(e.target.value)}
            value={newPrice}
            type="number"
            placeholder="Enter new price ...."
            className="px-4 py-1 rounded-md"
          />
        </div>
        <div className="flex justify-center items-center pt-10">
          <button className="px-3 py-1 bg-blue-500 rounded-lg text-white">
            Update
          </button>
        </div>{" "}
      </form>
    </div>
  );
};

export default UpdatePrice;
