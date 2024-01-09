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
const DashboardStoryTab = ({ setCategory }) => {
  const tabs = ["Dashboard", "Story"];

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
        tabs={tabs}
        handleTabClick={handleTabClick}
      />
    </div>
  );
};

export default DashboardStoryTab;
