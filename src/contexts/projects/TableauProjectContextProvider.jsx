// ... React modules
import { createContext } from "react";

// ... Context

// ... Components

// ... Assets
import tableau_project_1 from "@data/projects/tableau/tb_project_1.js";

export const TableauProjectContext = createContext({
  tableau_projects: [],
});

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const TableauProjectContextProvider = ({ children }) => {
  /*
  |----------------------------------------
  | Project variables
  |----------------------------------------
  */
  const tableau_projects = [tableau_project_1];
  /*
  |----------------------------------------
  | Context
  |----------------------------------------
  */
  const context = {
    tableau_projects,
  };

  /*
  |----------------------------------------
  | Return jsx
  |----------------------------------------
  */
  return (
    <TableauProjectContext.Provider value={context}>
      {children}
    </TableauProjectContext.Provider>
  );
};

export default TableauProjectContextProvider;
