// ... React modules

// ... Contexts
import ProjectContextProvider from "@contexts/ProjectContextProvider";
import ProjectInfoContextProvider from "@contexts/ProjectInfoContextProvider";
import ExcelProjectContextProvider from "@contexts/projects/ExcelProjectContextProvider";
import ThemeContextProvider from "@contexts/ThemeContextProvider";
import NavigationContextProvider from "@contexts/NavigationContextProvider";

// ... Components

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const AppContextProvider = ({ children }) => {
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
      <ThemeContextProvider>
        <NavigationContextProvider>
          <ProjectContextProvider>
            <ExcelProjectContextProvider>
              <ProjectInfoContextProvider>
                {children}
              </ProjectInfoContextProvider>
            </ExcelProjectContextProvider>
          </ProjectContextProvider>
        </NavigationContextProvider>
      </ThemeContextProvider>
    </>
  );
};

export default AppContextProvider;
