// ... React modules
import { useContext } from "react";

// ... Context
import { ProjectInfoContext } from "@contexts/ProjectInfoContextProvider";

// ... Components
import EmbedIframe from "@components/embed/EmbedIframe";

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const ExcelDashboardSection = () => {
  const { filtered_project } = useContext(ProjectInfoContext);

  const iframe_src = filtered_project?.iframe_src;
  const iframe_height = filtered_project?.iframe_height;
  const iframe_width = filtered_project?.iframe_width;
  const url = filtered_project?.iframe_url;

  /*
  |----------------------------------------
  | Return For Excel
  |----------------------------------------
  */
  return (
    <>
      <div className="mb-lg-4 mb-3">
        <a
          href={url}
          className="view_workbook_link"
          target="_blank"
          rel="noreferrer"
        >
          View full-size workbook
        </a>
      </div>
      <EmbedIframe iframe_src={iframe_src} iframe_height={iframe_height} iframe_width={iframe_width} />
    </>
  );
};

export default ExcelDashboardSection;
