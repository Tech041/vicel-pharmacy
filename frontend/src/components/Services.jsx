import HeroCard from "./HeroCard";

const Services = () => {
  return (
    <div className="">
      <h1 className="text-center font-bold text-base lg:text-xl text-gray-500 py-4">
        Streamline Your Path to Wellness with a Single Click.
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        <HeroCard
          caption={"Speak to a Pharmacist"}
          action={"Get on a call"}
          className={
            "w-full flex items-center justify-center h-[200px] lg:h-[400px] bg-[url('/pharm.jpeg')] text-xs lg:text-base  bg-cover bg-center rounded-2xl overflow-hidden"
          }
          className1={"font-bold  text-gray-600"}
          className2={" font-semibold text-red-800"}
        />
        <HeroCard
          caption={"Get Loyalty Card"}
          action={"Order Now"}
          className={
            "w-full flex items-center justify-center h-[200px] lg:h-[400px] text-xs lg:text-base bg-[url('/loyal_card.jpeg')] bg-cover bg-center rounded-2xl overflow-hidden"
          }
          className1={"font-bold  text-white"}
          className2={" font-semibold text-white "}
        />
        <HeroCard
          caption={"Book a lab test"}
          action={"Book Now"}
          className={
            "w-full flex items-center justify-center h-[200px] lg:h-[400px] text-xs lg:text-base bg-[url('/lab_test.jpeg')] bg-cover bg-center rounded-2xl overflow-hidden"
          }
          className1={"font-bold  text-slate-800"}
          className2={" font-semibold text-red-800"}
        />
        <HeroCard
          caption={"Book Vaccination"}
          action={"Book Now"}
          className={
            "w-full flex items-center justify-center h-[200px] lg:h-[400px] text-xs lg:text-base bg-[url('/vaccination.jpeg')] bg-cover bg-center rounded-2xl overflow-hidden"
          }
          className1={"font-bold  text-slate-800"}
          className2={" font-semibold text-red-800"}
        />
      </div>
    </div>
  );
};

export default Services;
