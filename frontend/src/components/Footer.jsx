import Container from "./Container";

const Footer = () => {
  return (
    <footer className="border-t mt-5 border-gray-500 bg-black text-white ">
      <Container>
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
          <div className="">
            <div className="">
              <p className="text-xl font-medium mb-5  ">Customer Services</p>
              <ul className="flex flex-col gap-1 ">
                <li>FAQs</li>
                <li>Return Policy</li>
                <li>Our Stores</li>
              </ul>
            </div>
          </div>
          <div className="">
            <p className="text-xl font-medium mb-5  ">COMPANY</p>
            <ul className="flex flex-col gap-1">
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy policy</li>
            </ul>
          </div>
          <div className="">
            <p className="text-xl font-medium mb-5  ">Contact Us</p>
            <ul className="flex flex-col gap-1 ">
              <li>FAQs</li>
              <li>Return Policy</li>
              <li>Our Stores</li>
            </ul>
          </div>
        </div>
        <div className="">
          <hr className="" />
          <p className="py-5 text-sm text-center ">
            Copyright &copy;Vicel Pharmacy {new Date().getFullYear()} <br />
            <span className="">All rights reserved.</span>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
