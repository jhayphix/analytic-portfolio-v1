// ... React modules
import { createContext } from "react";

// ... Context

// ... Components

// ... Assets
import DefDashboardImg1 from "@assets/images/projects/default_dashboard/dashboard_img_1.png";
import DefDashboardImg2 from "@assets/images/projects/default_dashboard/dashboard_img_2.png";

export const DefaultContext = createContext({def_dashboard_img_1: "", def_dashboard_img_2: ""});

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const DefaultContextProvider = ({ children }) => {
  /*
  |----------------------------------------
  | Project config
  |----------------------------------------
  */

  /*
  |----------------------------------------
  | Rename
  |----------------------------------------
  */
  const def_dashboard_img_1 = DefDashboardImg1;
  const def_dashboard_img_2 = DefDashboardImg2;

  /*
  |----------------------------------------
  | Context
  |----------------------------------------
  */
  const context = {def_dashboard_img_1, def_dashboard_img_2};

  /*
  |----------------------------------------
  | Return jsx
  |----------------------------------------
  */
  return (
    <DefaultContext.Provider value={context}>
      {children}
    </DefaultContext.Provider>
  );
};

export default DefaultContextProvider;
