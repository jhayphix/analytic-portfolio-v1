// ... React modules
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// ... Context
import { ProjectInfoContext } from "@contexts/ProjectInfoContextProvider";
import { DefaultContext } from "@contexts/DefaultContextProvider";

// ... Components
import PortfolioBreadCrumb from "@components/breadcrumb/PortfolioBreadCrumb";
import DashboardStoryTab from "@components/tabs/DashboardStoryTab";
import PageBannerSection from "@components/banners/PageBannerSection";
import ProjectBanner from "@components/banners/ProjectBanner";

import DashboardSection from "@pages/dashboard_page/sections/DashboardSection";
import StorySection from "@pages/dashboard_page/sections/StorySection";

// ... Assets

/*
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
*/
const DashboardPage = () => {
  /*
  |----------------------------------------
  | Contexts and states
  |----------------------------------------
  */
  const params = useParams();
  const {
    setProjectParams,
    project_story,
    project_story_nav,
    project_img,
    project_name,
    project_cat,
    project_category,
  } = useContext(ProjectInfoContext);
  const { def_dashboard_img_1 } = useContext(DefaultContext);
  const [category, setCategory] = useState("dashboard");

  useEffect(() => {
    setProjectParams(params);
  }, [params, setProjectParams]);

  /*
  |----------------------------------------
  | Comment here
  |----------------------------------------
  */
  return (
    <div className="container-lg" style={{ paddingBottom: "60px" }}>
      <PortfolioBreadCrumb
        project_category={project_category}
        project_cat={project_cat}
        project_name={project_name}
      />
      <PageBannerSection pageName={project_name} />
      <ProjectBanner
        projectImg={project_img ? project_img : def_dashboard_img_1}
        projectName={project_name ? project_name : project_category}
      />

      <DashboardStoryTab category={category} setCategory={setCategory} />

      {category === "dashboard" ? (
        <DashboardSection />
      ) : (
        <StorySection
          project_story={project_story}
          story_tab={project_story_nav}
        />
      )}
    </div>
  );
};

export default DashboardPage;
