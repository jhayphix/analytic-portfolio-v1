// ... React modules
import { useContext } from "react";

// ... Context
import { ProjectInfoContext } from "@contexts/ProjectInfoContextProvider";

// ... Components

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const DefaultDashboardSection = () => {
  const { project_dashboard_img, project_name } =
    useContext(ProjectInfoContext);

  /*
  |----------------------------------------
  | Return
  |----------------------------------------
  */
  return (
    <>
      <div className="dashboard_section">
        <img
          className="dashboard_img"
          src={project_dashboard_img}
          alt={project_name}
        />
      </div>
    </>
  );
};

export default DefaultDashboardSection;
