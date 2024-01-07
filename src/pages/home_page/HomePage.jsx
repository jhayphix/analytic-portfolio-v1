// ... React modules

// ... Context

// ... Components
import HeroSection from "@pages/home_page/sections/HeroSection";
import AboutSection from "@pages/home_page/sections/AboutSection";
import PortfolioSection from "@pages/home_page/sections/PortfolioSection";
import ServiceSection from "@pages/home_page/sections/ServiceSection";
import StatSection from "@pages/home_page/sections/StatSection";
import ContactSection from "@pages/home_page/sections/ContactSection";

// ... Assets

/*
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
*/
const HomePage = () => {
  /*
  |----------------------------------------
  | Comment here
  |----------------------------------------
  */
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ServiceSection />
      <StatSection />
      <ContactSection />
    </main>
  );
};

export default HomePage;
