// ... React modules

// ... Contexts

import ExcelProjectContextProvider from "@contexts/projects/ExcelProjectContextProvider";
import TableauProjectContextProvider from "@contexts/projects/TableauProjectContextProvider";
import SqlProjectContextProvider from "@contexts/projects/SqlProjectContextProvider";
import PythonProjectContextProvider from "@contexts/projects/PythonProjectContextProvider";

// ... Components

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const ProjectProvider = ({ children }) => {
  /*
  |----------------------------------------
  | Comment here
  |----------------------------------------
  */

  /*
  |----------------------------------------
  | Return jsx
  |----------------------------------------
  */
  return (
    <>
      <ExcelProjectContextProvider>
        <TableauProjectContextProvider>
          <SqlProjectContextProvider>
            <PythonProjectContextProvider>
              {children}
            </PythonProjectContextProvider>
          </SqlProjectContextProvider>
        </TableauProjectContextProvider>
      </ExcelProjectContextProvider>
    </>
  );
};

export default ProjectProvider;
