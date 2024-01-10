// ... React modules
import { createContext, useState, useContext } from "react";

// ... Context
import { ExcelProjectContext } from "./projects/ExcelProjectContextProvider";
import { TableauProjectContext } from "./projects/TableauProjectContextProvider";
import { SqlProjectContext } from "./projects/SqlProjectContextProvider";
import { PythonProjectContext } from "./projects/PythonProjectContextProvider";

// ... Components

// ... Assets

export const ProjectInfoContext = createContext({
  project_params: "",
  setProjectParams: () => {},
  filtered_project: [],
  project_story: [],
  project_collection: [],
  project_story_nav: [],
  project_cat: "",
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
  const { tableau_projects } = useContext(TableauProjectContext);
  const { sql_projects } = useContext(SqlProjectContext);
  const { python_projects } = useContext(PythonProjectContext);

  const [project_params, setProjectParams] = useState("");
  const project_cat = project_params?.cat;
  const project_id = parseInt(project_params?.id);

  const excel_projects_collection = excel_projects;
  const tableau_projects_collection = tableau_projects;
  const sql_projects_collection = sql_projects;
  const python_projects_collection = python_projects;

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
  | Extract
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
    project_cat,

    project_img,
    project_name,
    project_dashboard_img,
    project_category,
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
