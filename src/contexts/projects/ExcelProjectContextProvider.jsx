// ... React modules
import { createContext } from "react";

// ... Context

// ... Components

// ... Assets
import excel_project_1 from "@data/projects/excel/project_1.js";
import excel_project_2 from "@data/projects/excel/project_2.js";

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
  const excel_projects = [excel_project_1, excel_project_2];
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
