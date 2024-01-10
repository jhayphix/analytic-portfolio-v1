// ... React modules
import { useContext } from "react";

// ... Context
import { ProjectContext } from "@contexts/ProjectContextProvider";

// ... Components
import NavTab from "@components/tabs/NavTab";

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const ProjectNavTab = () => {
  const { activeTab, project_tabs, handleTabClick } =
    useContext(ProjectContext);

  /*
  |----------------------------------------
  | Return
  |----------------------------------------
  */
  return (
    <NavTab
      activeTab={activeTab}
      tabs={project_tabs}
      handleTabClick={handleTabClick}
    />
  );
};

export default ProjectNavTab;
