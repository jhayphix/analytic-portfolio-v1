// ... React modules
import { useState } from "react";

// ... Context

// ... Components
import NavTab from "@components/tabs/NavTab";

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const ProjectStoryTab = ({ story_tab, setCategory }) => {
  const tabs = story_tab;

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
    <div className="mb-3">
      <NavTab
        activeTab={activeTab}
        tabs={tabs}
        handleTabClick={handleTabClick}
      />
    </div>
  );
};

export default ProjectStoryTab;
