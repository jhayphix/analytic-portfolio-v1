// ... React modules
import { useContext, useEffect, useState } from "react";

// ... Context
import { ThemeContext } from "../contexts/ThemeContextProvider";

// ... Components
import Footer from "@layouts/Footer";
import Navigation from "@layouts/Navigation";
import BackToTopButton from "@components/buttons/BackToTopButton";
import ChatOnWhatsappButton from "@components/buttons/ChatOnWhatsappButton";

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const AppLayout = ({ children }) => {
  /*
  |----------------------------------------
  | Comment here
  |----------------------------------------
  */
  const { theme } = useContext(ThemeContext);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showChatOnWhatsapp, setShowChatOnWhatsapp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowBackToTop(true);
        setShowChatOnWhatsapp(true);
      } else {
        setShowBackToTop(false);
        setShowChatOnWhatsapp(false);
      }
    };

    // Initial check on load
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
  |----------------------------------------
  | Return
  |----------------------------------------
  */

  return (
    <div
      id="app_layout_container"
      className="bg_shape_grp_1"
      data-theme={theme}
    >
      <Navigation />
      {/* App content will be injected here */}
      {children}
      {showBackToTop && <BackToTopButton />}
      {showChatOnWhatsapp && <ChatOnWhatsappButton />}
      <Footer />
    </div>
  );
};

export default AppLayout;
