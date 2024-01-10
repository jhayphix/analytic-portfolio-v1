// ... React modules
import { useContext, useState } from "react";

// ... Context
import { ProjectContext } from "@contexts/ProjectContextProvider.jsx";

// ... Components
import NavTab from "@components/tabs/NavTab";

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const DashboardStoryTab = ({ setCategory }) => {
  const { dashboard_story_tabs } = useContext(ProjectContext);

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index, category) => {
    setActiveTab(index);
    setCategory(category);
  };

  /*
  |----------------------------------------
  | Return
  |----------------------------------------
  */
  return (
    <div className="mb-lg-4 mb-3">
      <NavTab
        activeTab={activeTab}
        tabs={dashboard_story_tabs}
        handleTabClick={handleTabClick}
      />
    </div>
  );
};

export default DashboardStoryTab;
