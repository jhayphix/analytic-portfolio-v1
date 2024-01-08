// ... React modules
import { createContext } from "react";

// ... Context

// ... Components

// ... Assets
import ex_project_1_bike_sales from "@data/projects/excel/ex_project_1_bike_sales.js";

export const ExcelProjectContext = createContext({
  excel_projects: [],
});

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const ExcelProjectContextProvider = ({ children }) => {
  /*
  |----------------------------------------
  | Project variables
  |----------------------------------------
  */
  const excel_projects = [ex_project_1_bike_sales];
  /*
  |----------------------------------------
  | Context
  |----------------------------------------
  */
  const context = {
    excel_projects,
  };

  /*
  |----------------------------------------
  | Return jsx
  |----------------------------------------
  */
  return (
    <ExcelProjectContext.Provider value={context}>
      {children}
    </ExcelProjectContext.Provider>
  );
};

export default ExcelProjectContextProvider;
