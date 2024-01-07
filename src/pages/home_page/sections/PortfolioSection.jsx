// ... React modules
// import { useContext } from "react";

// ... Context
// import { ProjectContext } from "@contexts/ProjectContextProvider";

// ... Components
import SectionHeader from "@components/headers/SectionHeader";
import PortfolioThread from "@components/cards/PortfolioThread";
import ProjectNavTab from "@components/tabs/ProjectNavTab";
import SectionSubText from "@components/headers/SectionSubText";

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/

const PortfolioSection = ({ showHeader }) => {
  /*
    |----------------------------------------
    | Return
    |----------------------------------------
  */
  const sectionTitle = "My Portfolio";
  const sectionSubTitle = "Have a glance at some of my recent projects";
  return (
    <section
      id="my-portfolio-section"
      className="bg_primary_1 py-5 bg_shape_grp_3"
    >
      <div className="container-lg">
        {showHeader ? (
          <SectionHeader title={sectionTitle} subTitle={sectionSubTitle} />
        ) : (
          <SectionSubText subText="Have a glance at some of my recent projects" />
        )}
        <ProjectNavTab />
        <PortfolioThread />
      </div>
    </section>
  );
};
PortfolioSection.defaultProps = {
  showHeader: true,
};
export default PortfolioSection;
