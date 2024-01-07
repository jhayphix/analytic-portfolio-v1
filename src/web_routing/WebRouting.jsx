// ... React modules
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";

// ... Context
import { NavigationContext } from "@contexts/NavigationContextProvider";

// ... Components
import AboutPage from "@pages/about_page/AboutPage";
import ContactPage from "@pages/contact_page/ContactPage";
import DashboardPage from "@pages/dashboard_page/DashboardPage";
import HomePage from "@pages/home_page/HomePage";
import PortfolioPage from "@pages/portfolio_page/PortfolioPage";
import ServicePage from "@pages/service_page/ServicePage";

// ... Assets

/*
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
*/
const WebRouting = () => {
  /*
  |----------------------------------------
  | Comment here
  |----------------------------------------
  */
  const { home, about, portfolio, dashboard, service, contact } =
    useContext(NavigationContext);

  return (
    <Routes>
      {/* Homepage */}
      <Route path={home.path} element={<HomePage />} />

      {/* About page */}
      <Route path={about.path} element={<AboutPage />} />

      {/* Portfolio page */}
      <Route path={portfolio.path} element={<PortfolioPage />} />

      {/* Services page */}
      <Route path={service.path} element={<ServicePage />} />

      {/* Contact page */}
      <Route path={contact.path} element={<ContactPage />} />

      {/* Dashboard page */}
      <Route path={dashboard.path} element={<DashboardPage />} />

      {/* Not found */}
      <Route path="*" element="Not Found" />
    </Routes>
  );
};

export default WebRouting;
