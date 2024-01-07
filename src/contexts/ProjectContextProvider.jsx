// ... React modules
import { createContext, useState } from "react";

// ... Context

// ... Components

// ... Assets
import project_db from "@data/project_db.js";

export const ProjectContext = createContext({
  activeTab: "",
  setActiveTab: () => {},
  category: "",
  setCategory: () => {},

  tabs: [],
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

  const tabs = ["All", "Excel", "SQL", "Python", "Tableau"];

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
  | Context
  |----------------------------------------
  */
  const context = {
    activeTab,
    setActiveTab,
    category,
    setCategory,
    tabs,
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
