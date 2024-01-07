// ... React modules

// ... Context

// ... Components
import PageBannerSection from "@components/banners/PageBannerSection";
import ServiceSection from "@pages/home_page/sections/ServiceSection";
import StatSection from "@pages/home_page/sections/StatSection";
import ContactSection from "@pages/home_page/sections/ContactSection";

// ... Assets

/*
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
*/
const ServicePage = () => {
  /*
  |----------------------------------------
  | Comment here
  |----------------------------------------
  */
  return (
    <>
      <PageBannerSection pageName="Services" />
      <ServiceSection showHeader={false} />
      <StatSection />
      <ContactSection />
    </>
  );
};

export default ServicePage;
