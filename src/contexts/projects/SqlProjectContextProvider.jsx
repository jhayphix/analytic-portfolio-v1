// ... React modules
import { createContext } from "react";

// ... Context

// ... Components

// ... Assets
import sql_project_1 from "@data/projects/sql/sql_project_1.js";

export const SqlProjectContext = createContext({
  sql_projects: [],
});

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const SqlProjectContextProvider = ({ children }) => {
  /*
  |----------------------------------------
  | Project variables
  |----------------------------------------
  */
  const sql_projects = [sql_project_1];
  /*
  |----------------------------------------
  | Context
  |----------------------------------------
  */
  const context = {
    sql_projects,
  };
  /*
  |----------------------------------------
  | Return jsx
  |----------------------------------------
  */
  return (
    <SqlProjectContext.Provider value={context}>
      {children}
    </SqlProjectContext.Provider>
  );
};

export default SqlProjectContextProvider;
