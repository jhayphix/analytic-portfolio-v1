// ... React modules

// ... Context

// ... Components
import PageBannerSection from "@components/banners/PageBannerSection";
import ContactSection from "@pages/home_page/sections/ContactSection";

// ... Assets

/*
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
*/
const ContactPage = () => {
  /*
  |----------------------------------------
  | Comment here
  |----------------------------------------
  */
  return (
    <>
      <PageBannerSection pageName="Contact Me" />
      <ContactSection showHeader={false} />
    </>
  );
};

export default ContactPage;
