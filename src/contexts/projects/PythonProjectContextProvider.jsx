// ... React modules
import { createContext } from "react";

// ... Context

// ... Components

// ... Assets
import python_project_1 from "@data/projects/python/py_project_1.js";

export const PythonProjectContext = createContext({
  python_projects: [],
});

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const PythonProjectContextProvider = ({ children }) => {
  /*
  |----------------------------------------
  | Project variables
  |----------------------------------------
  */
  const python_projects = [python_project_1];
  /*
  |----------------------------------------
  | Context
  |----------------------------------------
  */
  const context = {
    python_projects,
  };

  /*
  |----------------------------------------
  | Return jsx
  |----------------------------------------
  */
  return (
    <PythonProjectContext.Provider value={context}>
      {children}
    </PythonProjectContext.Provider>
  );
};

export default PythonProjectContextProvider;
