import { toast } from "react-toastify";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import Container from "./Container";
const formSchema = z.object({
  email: z.string().email("Email is required").min(1),
});

const NewsletterBox = () => {
  const { backendUrl } = useContext(ShopContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });
  const handleNewsLetterSubmit = async (data) => {
    try {
      const res = await axios.post(`${backendUrl}/api/news-letter`, data);
      console.log(data);
      if (res.data.success) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
      reset();
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <section className="">
      <Container>
        <div className="text-center mt-4 pt-3">
          <p className="text-2xl font-medium text-orange-700">
            Subscribe now and get 20% off
          </p>
          <p className="text-gray-400 mt-3">
            Health updates, delivered to your inbox
          </p>
          <form
            onSubmit={handleSubmit(handleNewsLetterSubmit)}
            className="w-full sm:w-1/2 flex flex-col items-center gap-3 mx-auto py-4 pl-3 "
          >
            <div className="w-full  flex  items-center gap-3 border">
              <input
                type="email"
                {...register("email")}
                placeholder="Enter your email"
                className="w-full sm:flex-1 outline-none placeholder:px-3"
              />

              <button
                type="submit"
                className="bg-green-600 hover:bg-green-400 text-white text-xs py-4 px-10"
              >
                SUBSCRIBE
              </button>
            </div>
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
};

export default NewsletterBox;
