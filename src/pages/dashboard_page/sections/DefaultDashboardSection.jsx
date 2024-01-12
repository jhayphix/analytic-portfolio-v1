// ... React modules
import { useContext } from "react";

// ... Context
import { ProjectInfoContext } from "@contexts/ProjectInfoContextProvider";
import { DefaultContext } from "@contexts/DefaultContextProvider";

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

  const { def_dashboard_img_2 } = useContext(DefaultContext);
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
          src={
            project_dashboard_img ? project_dashboard_img : def_dashboard_img_2
          }
          alt={project_name}
        />
      </div>
    </>
  );
};

export default DefaultDashboardSection;
