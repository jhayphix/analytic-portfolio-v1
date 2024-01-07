// ... React modules
import { useState } from "react";

// ... Context

// ... Components
import ProjectStoryTab from "@components/tabs/ProjectStoryTab";

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const StorySection = ({ project_story, story_tab }) => {
  const [category, setCategory] = useState("introduction");

  const filtered_story = project_story.find(
    (story) => story?.story_nav?.toLowerCase() === category?.toLowerCase()
  );
  const story_info = filtered_story?.story_info;
  console.log(story_info);

  /*
  |----------------------------------------
  | Return
  |----------------------------------------
  */
  return (
    <div className="story_section">
      <ProjectStoryTab story_tab={story_tab} setCategory={setCategory} />
      <div className="story_container">
        {story_info?.map((text, index) => {
          return (
            <p className="story_text" key={index}>
              {text}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default StorySection;
