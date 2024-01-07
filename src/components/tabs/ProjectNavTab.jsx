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
  const { activeTab, tabs, handleTabClick } = useContext(ProjectContext);

  /*
  |----------------------------------------
  | Return
  |----------------------------------------
  */
  return (
    <NavTab activeTab={activeTab} tabs={tabs} handleTabClick={handleTabClick} />
  );
};

export default ProjectNavTab;
