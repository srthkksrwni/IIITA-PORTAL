import Hero from "./sections/Hero";

import WelcomeSection from "./sections/WelcomeSection";
import FeaturedInitiatives from "./sections/FeaturedInitiatives";
import SupportPillars from "./sections/SupportPillars";
import NewsPreview from "./sections/NewsPreview";
import CTASection from "./sections/CTASection";

import Navbar from "../../components/layout/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      
      <WelcomeSection />
      <FeaturedInitiatives />
      <SupportPillars />
      <NewsPreview />
      <CTASection />
    </>
  );
}

export default Home;

