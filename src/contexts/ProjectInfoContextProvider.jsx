// ... React modules
import { createContext, useState, useContext } from "react";

// ... Context
import { ExcelProjectContext } from "./projects/ExcelProjectContextProvider";

// ... Components

// ... Assets

export const ProjectInfoContext = createContext({
  project_params: "",
  setProjectParams: () => {},
  filtered_project: [],
  project_story: [],
  project_collection: [],
  project_story_nav: [],
});

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const ProjectInfoContextProvider = ({ children }) => {
  /*
  |----------------------------------------
  | Project variables
  |----------------------------------------
  */
  const { excel_projects } = useContext(ExcelProjectContext);
  const [project_params, setProjectParams] = useState("");
  const project_cat = project_params?.cat;
  const project_id = parseInt(project_params?.id);

  const excel_projects_collection = excel_projects;
  const python_projects_collection = [];
  const sql_projects_collection = [];
  const tableau_projects_collection = [];

  /*
  |----------------------------------------
  | Conditions
  |----------------------------------------
  */
  let project_collection;

  switch (project_cat) {
    case "excel":
      project_collection = excel_projects_collection;
      break;
    case "python":
      project_collection = python_projects_collection;
      break;
    case "sql":
      project_collection = sql_projects_collection;
      break;
    case "tableau":
      project_collection = tableau_projects_collection;
      break;
    default:
      project_collection = excel_projects_collection;
  }

  /*
  |----------------------------------------
  | Get project
  |----------------------------------------
  */
  const filtered_project = project_collection?.find(
    (project) => project?.id === project_id
  );
  const project_story = filtered_project?.story;
  const project_story_nav = project_story?.map((story) => story.story_nav);

  /*
  |----------------------------------------
  | Context
  |----------------------------------------
  */
  const context = {
    project_params,
    setProjectParams,
    filtered_project,
    project_story,
    project_collection,
    project_story_nav,
  };

  /*
  |----------------------------------------
  | Return jsx
  |----------------------------------------
  */
  return (
    <ProjectInfoContext.Provider value={context}>
      {children}
    </ProjectInfoContext.Provider>
  );
};

export default ProjectInfoContextProvider;
