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

  const iframeSrc = filtered_project?.iframeSrc;
  const height = filtered_project?.height;
  const width = filtered_project?.width;
  const url = filtered_project?.url;

  /*
  |----------------------------------------
  | Return For Excel
  |----------------------------------------
  */
  return (
    <>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        style={{
          fontSize: "20px",
          marginBottom: "10px",
          textDecoration: "underline",
        }}
      >
        {" "}
        View full size workbook{" "}
      </a>
      <EmbedIframe iframeSrc={iframeSrc} height={height} width={width} />
    </>
  );
};

export default ExcelDashboardSection;
