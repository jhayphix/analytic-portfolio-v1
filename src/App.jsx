// ... React modules
import { BrowserRouter } from "react-router-dom";

// ... Context
import AppContextProvider from "@contexts/AppContextProvider";

// ... Components
import AppLayout from "@layouts/AppLayout";
import WebRouting from "@web_routing/WebRouting";

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const App = () => {
  /*
  |----------------------------------------
  | Comment here
  |----------------------------------------
  */

  return (
    <>
      <BrowserRouter>
        <AppContextProvider>
          <AppLayout>
            <WebRouting />
          </AppLayout>
        </AppContextProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
