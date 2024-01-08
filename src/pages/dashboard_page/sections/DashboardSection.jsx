// ... React modules
import { useContext } from "react";

// ... Context
import { ProjectInfoContext } from "@contexts/ProjectInfoContextProvider";

// ... Components
import ExcelDashboardSection from "@pages/dashboard_page/sections/ExcelDashboardSection.jsx";

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const DashboardSection = ({ dashboard_img, project_name }) => {
  const { project_cat } = useContext(ProjectInfoContext);
  const project_category = project_cat;
  /*
  |----------------------------------------
  | Return
  |----------------------------------------
  */
  if (project_category === "excel") {
    return <ExcelDashboardSection />;
  } else {
    return (
      <div className="dashboard_section">
        <img className="dashboard_img" src={dashboard_img} alt={project_name} />
      </div>
    );
  }
};

export default DashboardSection;
