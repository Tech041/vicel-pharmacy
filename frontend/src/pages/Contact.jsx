import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import SEO from "../components/SEO";
import Container from "../components/Container";

const Contact = () => {
  return (
    <Container>
      <section>
        <SEO
          content="This is contact page of Nelpharma"
          title="Contact Page"
          route="/contact"
        />
        <div className="text-center text-2xl pt-10 border-t">
          <Title text1={"CONTACT"} text2={"US"} />
        </div>
        <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
          <img
            src={assets.contact_img}
            alt=""
            className="w-full md:max-w-[450px]"
          />
          <div className="flex flex-col justify-center items-start gap-6">
            <p className="font-semibold text-xl text-orange-700">Our Store</p>
            <p className="text-gray-500">
              765A Williams Avenue,
              <br /> Victoria Island Lagos,Nigeria.
            </p>
            <p className="text-gray-500">
              Tel:(+234) 653-73833 <br className="" />
              Email:support@nelpharma.com
            </p>
            <p className="font-semibold text-xl text-orange-700">
              Careers at Nelpharma LTD
            </p>
            <p className="text-gray-500">
              Learn more about our teams and job openings.
            </p>
            <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
              Explore Jobs
            </button>
          </div>
        </div>
        <NewsletterBox />
      </section>
    </Container>
  );
};

export default Contact;
