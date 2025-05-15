import { FaArrowRight } from "react-icons/fa6";
// eslint-disable-next-line react/prop-types
const HeroCard = ({caption,action,className,className1,className2}) => {
  return (
    <div className={className}>
      <div className="flex flex-col justify-center items-center  ">
        <h1 className={className1}>{caption}</h1>
        <p className="flex items-center gap-2">
          <span className={className2}>{action}</span>{" "}
          <span className=" bg-white  hover:cursor-pointer p-3 rounded-full">
            <FaArrowRight size={12} />
          </span>
        </p>
      </div>
    </div>
  );
};

export default HeroCard;
