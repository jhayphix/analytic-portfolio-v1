// ... React modules

// ... Contexts
import ProjectContextProvider from "@contexts/ProjectContextProvider";
import ProjectInfoContextProvider from "@contexts/ProjectInfoContextProvider";
import ThemeContextProvider from "@contexts/ThemeContextProvider";
import NavigationContextProvider from "@contexts/NavigationContextProvider";

import ProjectProvider from "@contexts/projects/ProjectProvider.jsx";
import DefaultContextProvider from "@contexts/DefaultContextProvider.jsx";

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
          <DefaultContextProvider>
            <ProjectContextProvider>
              <ProjectProvider>
                <ProjectInfoContextProvider>
                  {children}
                </ProjectInfoContextProvider>
              </ProjectProvider>
            </ProjectContextProvider>
          </DefaultContextProvider>
        </NavigationContextProvider>
      </ThemeContextProvider>
    </>
  );
};

export default AppContextProvider;
