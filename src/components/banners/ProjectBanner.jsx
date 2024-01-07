// ... React modules

// ... Context

// ... Components

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const ProjectBanner = ({ projectImg, projectName }) => {
  return (
    <div className="project_banner_container container-lg">
      <img className="project_img" src={projectImg} alt={projectName} />
    </div>
  );
};

// ProjectBanner.defaultProps = [{ projectImg }];

export default ProjectBanner;
