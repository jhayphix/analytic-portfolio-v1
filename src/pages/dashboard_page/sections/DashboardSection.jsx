// ... React modules

// ... Context

// ... Components

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const DashboardSection = ({ dashboard_img, project_name }) => {
  /*
  |----------------------------------------
  | Return
  |----------------------------------------
  */
  return (
    <div className="dashboard_section">
      <img className="dashboard_img" src={dashboard_img} alt={project_name} />
    </div>
  );
};

export default DashboardSection;
