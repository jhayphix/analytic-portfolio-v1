// ... React modules

// ... Context

// ... Components

// ... Assets
import { about_me_text } from "@data/profile_db.js";

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/

const AboutInfoSection = () => {
  /*
    |----------------------------------------
    | Return
    |----------------------------------------
  */

  return (
    <>
      <div className="col-md-5 col-sm-9 col-11 text_secondary_1">
        <h2
          className="text-light mt-md-0 mt-3 mb-4 text_secondary_1"
          style={{ width: "145px" }}
        >
          <span className="fw-bold text_accent_1">About</span> me
        </h2>

        <div>
          {about_me_text.map(({ text }, index) => {
            return (
              <p className="lead text_secondary_1 mb-3" key={index}>
                {text}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AboutInfoSection;
