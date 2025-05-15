import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import NewsletterBox from "../components/NewsletterBox";
import SEO from "../components/SEO";
import Services from "../components/Services";
import OurCategories from "../components/OurCategories";
import FeatureList from "../components/FeaturesList";
import Container from "../components/Container";

const Home = () => {
  return (
    <main>
      <Container>
        <SEO content={"Home Page"} title={"Home"} route={"/"} />
        <Hero />
        <Services />
        <OurCategories />
        <LatestCollection />
        <BestSeller />
        <FeatureList />
        <NewsletterBox />
      </Container>
    </main>
  );
};

export default Home;
