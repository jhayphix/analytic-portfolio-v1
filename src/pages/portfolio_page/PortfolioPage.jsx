// ... React modules

// ... Context

// ... Components
import PageBannerSection from "@components/banners/PageBannerSection";
import StatSection from "@pages/home_page/sections/StatSection";
import PortfolioSection from "@pages/home_page/sections/PortfolioSection";

// ... Assets

/*
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
*/
const PortfolioPage = () => {
  /*
  |----------------------------------------
  | Comment here
  |----------------------------------------
  */
  return (
    <section>
      <PageBannerSection pageName="Portfolio" />
      <PortfolioSection showHeader={false} />
      <StatSection />
    </section>
  );
};

export default PortfolioPage;
