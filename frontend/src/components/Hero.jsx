import { useEffect, useState } from "react";
import Banner from "./Banner";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    caption: "At Vicel, Convenience Meets Care!",
    content:
      "Vicel pharmacy delivers trusted medications and wellness products",
    src: "/banner_1.jpeg",
    className:
      "px-6 py-4 bg-gray-600 w-full h-full flex justify-center items-center flex-col",
  },
  {
    id: 2,
    caption: "Get vaccinated today at Vicel",
    content: "Stay protected—Get vaccinated today at Vicel!",
    src: "/banner_2.jpeg",
    className:
      "px-6 py-4 bg-black text-white w-full h-full flex justify-center items-center flex-col",
  },
  {
    id: 3,
    caption: "At Vicel, we value our customers",
    content:
      "At Vicel, your health and satisfaction come first—because you matter.",
    src: "/banner_3.jpeg",
    className:
      "px-6 py-4 bg-slate-700 w-full h-full flex justify-center items-center flex-col",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Handle manual navigation
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-[300px] lg:h-[500px] xl:h-[700px] overflow-hidden">
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[currentIndex].id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.25 }}
          className="w-full absolute"
        >
          <Banner
            caption={slides[currentIndex].caption}
            content={slides[currentIndex].content}
            src={slides[currentIndex].src}
            className={slides[currentIndex].className}
          />
        </motion.div>
      </AnimatePresence>

      {/* Left Arrow */}
      <button
        className="absolute top-1/2 left-[-3px] text-green p-3 shadow-lg"
        onClick={() =>
          goToSlide((currentIndex - 1 + slides.length) % slides.length)
        }
      >
        <FaChevronLeft size={20} color="white" />
      </button>

      {/* Right Arrow */}
      <button
        className="absolute top-1/2 right-[-3px]  text-green p-3  shadow-lg"
        onClick={() => goToSlide((currentIndex + 1) % slides.length)}
      >
        <FaChevronRight size={20} color="white" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-black" : "bg-gray-300"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
