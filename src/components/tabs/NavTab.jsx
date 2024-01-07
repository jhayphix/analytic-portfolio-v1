// ... React modules

// ... Context

// ... Components

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const NavTab = ({ activeTab, tabs, handleTabClick }) => {
  /*
  |----------------------------------------
  | Return
  |----------------------------------------
  */
  return (
    <div className="nav_tab_container d-flex justify-content-center align-items-center">
      <div className="nav_tab px-5 px-lg-5 py-2 bg_primary_5 d-flex justify-content-center align-items-center">
        {tabs?.map((tab, index) => (
          <div
            key={index}
            className={`tab_item px-3 ${
              activeTab === index ? "tab_active" : ""
            }`}
            onClick={() => handleTabClick(index, tab.toLowerCase())}
          >
            {tab}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavTab;
