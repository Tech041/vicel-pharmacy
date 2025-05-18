import Container from "./Container";

const Hero = () => {
  return (
    <section
      className="bg-[url('/hero.png')] bg-cover h-[850px] md:h-[600px] w-full pt-24"
      id="home"
    >
      <Container>
        <div className="flex flex-col md:flex-row items-center h-full gap-10 md:gap-6 w-full mt-5 pt-10 ">
          {/* left */}
          <div className="flex-1 ">
            <div className="w-full h-full text-white">
              <h1 className="text-2xl  md:text-4xl lg:text-5xl font-extrabold text-center md:text-start ">
                Welcome to Vicel Pharmacy
              </h1>
              <h3 className="text-sm md:text-lg pt-3 font-semibold text-center md:text-start text-orange-700">
                Your health is our priority
              </h3>
            </div>
            <div className="pt-4">
              {/* <h1 className="text-center md:text-start text-white">
                Providing high quality medications at unbeatable prices is all
                we care for.
              </h1> */}
            </div>
          </div>
          {/* right */}
          <div className="flex-1 flex justify-center items-center w-full h-full ">
            {/* images */}
            {/* slide */}

            <div className="w-[300px] h-[80%]  flex justify-center items-center ">
              {/* <OurCategories /> */}
              <img
                src="/vicel_logo.jpg"
                alt=""
                className="w-full h-full rounded-full overflow-hidden"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
