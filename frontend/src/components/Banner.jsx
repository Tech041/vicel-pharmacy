// eslint-disable-next-line react/prop-types
const Banner = ({ caption, content, src, className }) => {
  return (
    <div className="w-full h-[300px] lg:h-[500px] xl:h-[700px] flex justify-center items-center">
      <div className="wrapper flex justify-between items-center h-[80%] w-full rounded-xl overflow-hidden  ">
        {/* left */}
        <div className=" flex-1 h-full">
          <div className={className}>
            <h2 className="text-sm lg:text-2xl xl:text-5xl pb-2 lg:pb-4 text-orange-500 font-bold capitalize">
              {caption}
            </h2>
            <p className="text-sm lg:text-xl xl:text-3xl pb-2 lg:pb-6 mt-2 lg:mt-5 text-white font-extrabold ">
              {content}
            </p>
          </div>
        </div>
        {/* right */}
        <div className=" flex-1 h-full">
          <img src={src} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
