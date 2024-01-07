// ... React modules
import { createContext } from "react";

// ... Context

// ... Components

// ... Assets
import { navigation_db } from "@data/navigation_db";

/*
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
*/
export const NavigationContext = createContext({
  nav_links: [],
  base_route: "",

  home: {},
  about: {},
  portfolio: {},
  dashboard: {},
  service: {},
  contact: {},

  toDashboardHandler: () => {},
});

const NavigationContextProvider = ({ children }) => {
  /*
  |----------------------------------------
  | Assign
  |----------------------------------------
  */
  const base_route = navigation_db?.base_route;
  const nav_links = navigation_db?.nav_links;

  const home = navigation_db?.home;
  const about = navigation_db?.about;
  const portfolio = navigation_db?.portfolio;
  const dashboard = navigation_db?.dashboard;
  const service = navigation_db?.service;
  const contact = navigation_db?.contact;

  /*
  |----------------------------------------
  | Dashboard custom route
  |----------------------------------------
  */
  const toDashboardHandler = (category, id) => {
    const path = `/${base_route}/project/${category}/${id}`;
    return path;
  };

  /*
  |----------------------------------------
  | Context
  |----------------------------------------
  */
  const context = {
    nav_links,
    base_route,
    home,
    about,
    portfolio,
    dashboard,
    service,
    contact,

    toDashboardHandler,
  };

  /*
  |----------------------------------------
  | Return jsx
  |----------------------------------------
  */
  return (
    <NavigationContext.Provider value={context}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContextProvider;
