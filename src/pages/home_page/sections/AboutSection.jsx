// ... React modules

// ... Context

// ... Components
import AboutProfileSection from "@pages/home_page/sections/AboutProfileSection";
import AboutInfoSection from "@pages/home_page/sections/AboutInfoSection";
import AboutSkillSection from "@pages/home_page/sections/AboutSkillSection";

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/

const AboutSection = () => {
  /*
    |----------------------------------------
    | Return
    |----------------------------------------
  */
  return (
    <>
      <section id="about_section" className="bg_primary_2 bg_shape_grp_2 py-5">
        <div className="container-lg">
          <div className="row gap-3 justify-content-center">
            {/* Profile */}
            <AboutProfileSection />

            {/* About info */}
            <AboutInfoSection />

            {/* Skills */}
            <AboutSkillSection />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
