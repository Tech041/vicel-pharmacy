import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Banner from "./Banner";
import { useEffect } from "react";
import { useState } from "react";
import Container from "./Container";

const slides = [
  {
    id: 1,
    caption: "Antibiotics",
    src: "/antibiotics.jpeg",
    className:
      "px-6 py-4 w-full h-full flex justify-center items-center flex-col",
  },
  {
    id: 2,
    caption: "Anti-malarials",
    src: "/antimalaria.jpeg",
    className:
      "px-6 py-4  text-white w-full h-full flex justify-center items-center flex-col",
  },
  {
    id: 3,
    caption: "Antihistamines",

    src: "/antihistamines.jpeg",
    className:
      "px-6 py-4 w-full h-full flex justify-center items-center flex-col",
  },
  {
    id: 4,
    caption: "Supplements",

    src: "/supplements.jpeg",
    className:
      "px-6 py-4 w-full h-full flex justify-center items-center flex-col",
  },
  {
    id: 5,
    caption: "prescriptions",

    src: "/prescriptions.png",
    className:
      "px-6 py-4 w-full h-full flex justify-center items-center flex-col",
  },
  {
    id: 6,
    caption: "cosmetics",

    src: "/cosmetics.jpeg",
    className:
      "px-6 py-4 w-full h-full flex justify-center items-center flex-col",
  },
  {
    id: 7,
    caption: "equipments",

    src: "/equipments.jpeg",
    className:
      "px-6 py-4 w-full h-full flex justify-center items-center flex-col",
  },
  {
    id: 8,
    caption: "Antihypertensives",

    src: "/antihypertensives.jpeg",
    className:
      "px-6 py-4 w-full h-full flex justify-center items-center flex-col",
  },
  {
    id: 9,
    caption: "Antidiabetics",

    src: "/antidiabetics.jpeg",
    className:
      "px-6 py-4 w-full h-full flex justify-center items-center flex-col",
  },
  {
    id: 10,
    caption: "Toiletries",

    src: "/toiletries.jpeg",
    className:
      "px-6 py-4 w-full h-full flex justify-center items-center flex-col",
  },
];

const OurCategories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [transition, setTransition] = useState(
    "transform duration-500 ease-in-out"
  ); // Normal sliding effect

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex === slides.length - 1) {
        setTransition(""); // Remove transition briefly for seamless loop
        setCurrentIndex(0);
        setTimeout(
          () => setTransition("transform duration-500 ease-in-out"),
          50
        ); // Restore transition
      } else {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Handle manual navigation
  const goToSlide = (index) => {
    setTransition("transform duration-500 ease-in-out");
    setCurrentIndex(index);
  };

  return (
    <section>
      <Container>
        <div className="mt-5 ">
          <h1 className="text-center text-base lg:text-xl font-bold text-orange-600">
            Our Product Categories
          </h1>
          <div className="relative w-full h-[300px] lg:h-[500px] xl:h-[700px] overflow-hidden">
            {/* Slides */}
            <div
              className={`flex ${transition} w-full`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className=" w-full flex-shrink-0">
                  <Banner
                    caption={slide.caption}
                    src={slide.src}
                    className={slide.className}
                  />
                </div>
              ))}
            </div>

            {/* Left Arrow */}
            <button
              className="absolute top-1/2 left-[-10px] bg-white text-green p-2 rounded-full"
              onClick={() =>
                goToSlide((currentIndex - 1 + slides.length) % slides.length)
              }
            >
              <FaChevronLeft size={20} color=" black" />
            </button>

            {/* Right Arrow */}
            <button
              className="absolute top-1/2 right-[-5px] bg-white text-green p-2 rounded-full"
              onClick={() => goToSlide((currentIndex + 1) % slides.length)}
            >
              <FaChevronRight size={20} color="black" />
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
        </div>
      </Container>
    </section>
  );
};

export default OurCategories;
