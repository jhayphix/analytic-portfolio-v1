// ... React modules
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// ... Context
import { ProjectInfoContext } from "@contexts/ProjectInfoContextProvider";

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
    filtered_project,
    project_story,
    project_story_nav,
  } = useContext(ProjectInfoContext);
  const [category, setCategory] = useState("dashboard");

  useEffect(() => {
    setProjectParams(params);
  }, [params, setProjectParams]);

  /*
  |----------------------------------------
  | Assign
  |----------------------------------------
  */
  const project = filtered_project;
  const project_img = project?.project_img;
  const project_name = project?.name;
  const project_dashboard_img = project?.dashboard_img;
  const project_category_original = project?.category;
  const project_category =
    project_category_original?.charAt(0).toUpperCase() +
    project_category_original?.slice(1);

  /*
  |----------------------------------------
  | Comment here
  |----------------------------------------
  */
  return (
    <div className="container-lg" style={{ paddingBottom: "60px" }}>
      <PortfolioBreadCrumb
        project_category={project_category}
        project_name={project_name}
      />
      <PageBannerSection pageName="Dashboard" />
      <ProjectBanner projectImg={project_img} projectName={project_name} />
      <DashboardStoryTab category={category} setCategory={setCategory} />

      {category === "dashboard" ? (
        <DashboardSection
          dashboard_img={project_dashboard_img}
          project_name={project_name}
        />
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
