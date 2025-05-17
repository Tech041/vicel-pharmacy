import Title from "../components/Title";
import NewsletterBox from "../components/NewsletterBox";
import SEO from "../components/SEO";
import Container from "../components/Container";

const About = () => {
  return (
    <Container>
      <section className="pt-24">
        <SEO
          content="This is about page of Nelpharma"
          title="About Page"
          route="/about"
        />

        <div className="text-2xl text-center pt-8 ">
          <Title text1={"ABOUT"} text2={"US"} />
        </div>
        <div className="my-10 flex flex-col md:flex-row gap-16">
          <div className="flex-1">
            <img src="/vicel_logo.jpg" alt="" className="w-full" />
          </div>
          <div className=" flex-1 flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
            <p className="">
              Welcome to Vicel Pharmacy, your trusted partner in health and
              wellness. At Vicel, we are committed to providing high-quality
              pharmaceutical products and personalized care to support your
              well-being.
            </p>
            <p className="">
              - Prescription & Over-the-Counter Medications <br /> – A wide
              range of medicines to meet your healthcare needs.
              <br /> - Health & Wellness Products
              <br /> – Vitamins, supplements, skincare, and personal care items.
              <br /> - Professional Consultation <br /> – Expert guidance from
              qualified pharmacists.
              <br /> - Customer-Centered Service <br /> – We prioritize your
              health, offering friendly and knowledgeable assistance.
            </p>
            <b className="text-blue-700">Our Mission</b>
            <p className="">
              Our mission is to enhance the health and lives of our customers by
              offering reliable medications, expert advice, and compassionate
              service. We believe in creating a healthier community by ensuring
              easy access to safe and effective healthcare solutions.
            </p>
          </div>
        </div>
        <div className="text-xl py-4">
          <Title text1={"Why "} text2={"Vicel Pharmacy?"} />
        </div>
        <div className="flex flex-col md:flex-row text-sm mb-20">
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b className="text-orange-500">Qaulity Assurance:</b>
            <p className=" text-gray-600">
              Each item in our collection undergoes a rigorous quality control
              process to ensure it meets your expectations for comfort.
            </p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b className="text-orange-500">Convenience:</b>
            <p className=" text-gray-600">
              Browse our collections anytime, anywhere, and enjoy a hassle-free
              checkout process.
            </p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b className="text-orange-500">Exceptional Customer Service:</b>
            <p className=" text-gray-600">
              We value your feedback and strive to exceed your expectations by
              delivering personalized support and prompt responses.
            </p>
          </div>
        </div>
        <NewsletterBox />
      </section>
    </Container>
  );
};

export default About;
