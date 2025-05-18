import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import NewsletterBox from "../components/NewsletterBox";
import SEO from "../components/SEO";

import OurCategories from "../components/OurCategories";


import Hero from "../components/Hero";

const Home = () => {
  return (
    <main>
      <SEO content={"Home Page"} title={"Home"} route={"/"} />
      <Hero />
      <OurCategories />
      <LatestCollection />
      <BestSeller />
      {/* <FeatureList /> */}
      <NewsletterBox />
    </main>
  );
};

export default Home;
