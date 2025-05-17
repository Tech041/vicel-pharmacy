import { useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import Container from "./Container";
// eslint-disable-next-line react/prop-types
const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden mb-2">
      <button
        className="w-full text-left p-4   text-slate-700 font-semibold"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        {isOpen ? (
          <FaChevronUp size={15} color="black" />
        ) : (
          <FaChevronDown size={15} color="black" />
        )}
      </button>
      {isOpen && <div className="p-4 bg-gray-100 text-gray-800">{content}</div>}
    </div>
  );
};

const FeatureList = () => {
  const items = [
    {
      title: "The address of Vicel Pharmacy?",
      content: "16 Odiyan Street,Lekki, Lagos State,Nigeria.",
    },
    {
      title: "Their hotline Vicel Pharmacy",
      content: "+234706873027",
    },
    {
      title: "Their availability?",
      content: "We are available 24/7.",
    },
  ];

  return (
    <section className="">
      <Container>
        <div className="w-full mx-auto text-black">
          <h1 className="text-center text-xl text-green-800 font-semibold py-2">
            Frequently Asked Questions
          </h1>
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeatureList;
