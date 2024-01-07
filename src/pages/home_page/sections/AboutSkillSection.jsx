// ... React modules

// ... Context

// ... Components
import AnimatedProgressBar from "@components/cards/AnimatedProgressBar";

// ... Assets
import { skills_stat } from "@data/profile_db.js";

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/

const AboutSkillSection = () => {
  /*
    |----------------------------------------
    | Return
    |----------------------------------------
  */
  return (
    <div className="col-md-10 col-sm-9 col-11">
      <p className="h3 my-3">Skill</p>

      <div className="row skill-mf mb-5">
        {/* Column one */}
        <div className="col-md-6 col-12">
          {skills_stat?.group_a?.map(({ name, rate }, index) => {
            return (
              <div key={index}>
                <div className="text_muted_1 mt-4 mb-2">
                  {name.toUpperCase()} {rate}%
                </div>
                <AnimatedProgressBar
                  valueNow={rate}
                  valueMin="0"
                  valueMax="100"
                />
              </div>
            );
          })}
        </div>

        {/* Column Two */}
        <div className="col-md-6 col-12">
          {skills_stat?.group_b?.map(({ name, rate }, index) => {
            return (
              <div key={index}>
                <div className="text_muted_1 mt-4 mb-2">
                  {name.toUpperCase()} {rate}%
                </div>
                <AnimatedProgressBar
                  valueNow={rate}
                  valueMin="0"
                  valueMax="100"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutSkillSection;
