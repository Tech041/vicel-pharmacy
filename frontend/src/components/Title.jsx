

// eslint-disable-next-line react/prop-types
const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex gap-2 items-center mb-3">
      <p className="text-green-500 ">
        {text1} <span className="text-orange-500 font-medium">{text2}</span>
      </p>
      <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
    </div>
  );
};

export default Title;
