// ... React modules
import ReactDOM from "react-dom/client";

// ... Components
import App from "@src/App";

// ... Assets
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "@assets/styles/bg_shapes.css";
import "@assets/styles/utils.css";

import "@assets/styles/theme.css";
import "@assets/styles/brand.css";
import "@assets/styles/__root.css";
import "@assets/styles/app_layout.css";

import "@pages/home_page/sections/hero_section.css";
import "@pages/home_page/sections/about_section.css";
import "@pages/home_page/sections/portfolio_section.css";
import "@pages/home_page/sections/portfolio_section.css";
import "@pages/home_page/sections/contact_section.css";

import "@pages/dashboard_page/sections/dashboard_section.css";
import "@pages/dashboard_page/sections/story_classes.css";

import "@layouts/navigation.css";
import "@components/cards/cards.css";
import "@components/banners/banners.css";
import "@components/tabs/tabs.css";
import "@components/breadcrumb/breadcrumb.css";
import "@components/embed/embed.css"

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
