// ... React modules
import { createContext, useState } from "react";

// ... Context

// ... Components

// ... Assets
import project_db from "@data/project_db.js";
import { project_tabs } from "@data/tab_db";
import { dashboard_story_tabs } from "@data/tab_db";

export const ProjectContext = createContext({
  activeTab: "",
  setActiveTab: () => {},
  category: "",
  setCategory: () => {},
  changeProjectCategory: () => {},

  project_tabs: [],
  dashboard_story_tabs: [],
  handleTabClick: () => {},
  projects: [],
  filteredProjects: [],
});

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const ProjectContextProvider = ({ children }) => {
  /*
  |----------------------------------------
  | Project config
  |----------------------------------------
  */
  const [activeTab, setActiveTab] = useState(0);
  const [category, setCategory] = useState("all");

  const handleTabClick = (index, category) => {
    setActiveTab(index);
    setCategory(category);
  };

  const projects = project_db;

  const filteredProjects =
    category === "all"
      ? projects
      : projects?.filter((project) => project?.category === category);

  /*
  |----------------------------------------
  | Function
  |----------------------------------------
  */
  const changeProjectCategory = (category) => {
    const project_category = category?.toLowerCase();
    setCategory(project_category);

    project_tabs?.forEach((tab) => {
      if (tab?.toLowerCase() === project_category) {
        const index = project_tabs?.indexOf(tab);
        setActiveTab(index);
      }
    });
  };

  /*
  |----------------------------------------
  | Context
  |----------------------------------------
  */
  const context = {
    activeTab,
    setActiveTab,
    category,
    setCategory,
    changeProjectCategory,

    project_tabs,
    dashboard_story_tabs,
    handleTabClick,
    projects,
    filteredProjects,
  };

  /*
  |----------------------------------------
  | Return jsx
  |----------------------------------------
  */
  return (
    <ProjectContext.Provider value={context}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContextProvider;
