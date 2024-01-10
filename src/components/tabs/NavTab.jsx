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
  console.log(tabs);
  /*
  |----------------------------------------
  | Return
  |----------------------------------------
  */
  return (
    <div className="nav_tab_container d-flex justify-content-center align-items-center">
      <div className="nav_tab bg_primary_5 py-1 d-flex justify-content-center align-items-center">
        {tabs?.map((tab, index) => (
          <div
            key={index}
            className={`tab_item px-3 my-lg-0 my-1 ${
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
