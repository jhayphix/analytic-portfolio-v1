// ... React modules
import { useContext } from "react";
import { Link } from "react-router-dom";
import { BiPlusCircle } from "react-icons/bi";

// ... Context
import { NavigationContext } from "@contexts/NavigationContextProvider";

// ... Components

// ... Assets
import DefDashboardImg1 from "@assets/images/projects/default_dashboard/dashboard_img_1.png";

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const ProjectCard = ({ project }) => {
  const { toDashboardHandler } = useContext(NavigationContext);
  console.log(project);
  /*
    |----------------------------------------
    | Return
    |----------------------------------------
  */
  return (
    <div className="work-box">
      {/* Image */}
      <Link
        to={toDashboardHandler(project?.category, project?.id)}
        data-gallery="portfolioGallery"
        className="portfolio-lightbox"
        rel="noreferrer"
      >
        <div className="work-img">
          <img
            src={project?.project_img ? project?.project_img : DefDashboardImg1}
            alt={project.name}
            className="img-fluid"
          />
        </div>
      </Link>

      {/* Work content */}
      <div className="work-content">
        <div className="row">
          <div className="col-sm-9">
            <h2 className="w-title mb-2">{project?.name}</h2>
            <div className="w-more">
              <span className="w-category text_accent_1">
                {project?.category}
              </span>{" "}
              / <span className="w-date">{project?.type}</span>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="w-like">
              <Link
                className="plus_link"
                to={toDashboardHandler(project?.category, project?.id)}
                rel="noreferrer"
              >
                {" "}
                <BiPlusCircle className="plus_icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectCard.defaultProps = [
  {
    id: "default",
    name: "Bike sales",
    img: DefDashboardImg1,
    category: "excel",
    type: "Personal",
  },
];
export default ProjectCard;
