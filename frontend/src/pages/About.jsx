import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import SEO from "../components/SEO";
import Container from "../components/Container";

const About = () => {
  return (
    <Container>
      <section className="">
        <SEO
          content="This is about page of Nelpharma"
          title="About Page"
          route="/about"
        />
        ;
        <div className="text-2xl text-center pt-8 border-t">
          <Title text1={"ABOUT"} text2={"US"} />
        </div>
        <div className="my-10 flex flex-col md:flex-row gap-16">
          <img
            src={assets.feroglobin}
            alt=""
            className="w-full md:max-w-[450px]"
          />
          <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
            <p className="">
              Who We Are At Nelpharma, we believe that access to safe and
              effective medication should be convenient, affordable, and
              hassle-free. Our platform connects you with certified
              pharmaceuticals, ensuring you receive genuine, high-quality
              products delivered straight to your doorstep.
            </p>
            <p className="">
              We provide a comprehensive selection of medications, including:
              <br /> ✅ Prescription & Over-the-Counter Drugs – Trusted
              medications for various health conditions. <br /> ✅ Vitamins &
              Supplements – Support your well-being with premium health
              products.
              <br /> ✅ Personal Care & Wellness – Everything from skincare to
              medical devices.
            </p>
            <b className="text-purple-700">Our Mission</b>
            <p className="">
              At Nelpharma, our mission is to make healthcare accessible,
              affordable, and convenient for everyone. We are committed to
              providing high-quality, safe, and effective medications while
              ensuring a seamless online shopping experience.
            </p>
          </div>
        </div>
        <div className="text-xl py-4">
          <Title text1={"WHY"} text2={"CHOOSE US"} />
        </div>
        <div className="flex flex-col md:flex-row text-sm mb-20">
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b className="text-green-500">Qaulity Assurance:</b>
            <p className=" text-gray-600">
              Each item in our collection undergoes a rigorous quality control
              process to ensure it meets your expectations for comfort.
            </p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b className="text-green-500">Convenience:</b>
            <p className=" text-gray-600">
              Browse our collections anytime, anywhere, and enjoy a hassle-free
              checkout process.
            </p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b className="text-green-500">Exceptional Customer Service:</b>
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
