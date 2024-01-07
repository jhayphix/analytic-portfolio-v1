// ... React modules
import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaTwitter,
  FaGithub,
  FaFacebook,
  FaWrench,
} from "react-icons/fa";
// import { FaWrench, FaHandPaper, FaPencilAlt } from "react-icons/fa";

// ... Context

// ... Components
import AutoWriteText from "@components/config/AutoWriteText";
import HandHoldPenSvg from "@components/svg_icons/HandHoldPenSvg";

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const HeroSection = () => {
  /*
    |----------------------------------------
    | Return
    |----------------------------------------
  */
  return (
    <section id="hero_section" className="p-0">
      <div className="hero_section_container">
        <div className="brand_container text-center">
          {/* Brand */}
          <h2 className="fw-bolder text_secondary_1 display-2">
            <span className="brand_name_highlight"> &#123; Jhay</span>
            Ph
            <span className="brand_name_highlight">
              <FaWrench className="brand_wrench" />
            </span>
            x <span className="brand_name_highlight"> &#125; </span>
          </h2>

          {/* AutoRight text */}
          <h2
            className="my-3 fw-semibold text_secondary_1"
            style={{ height: "2.5rem" }}
          >
            A <AutoWriteText />
            {/* <FaPencilAlt className="brand_pencil_write" /> */}
            <HandHoldPenSvg />
            <span className=""></span>
          </h2>

          {/* Hero icons container */}
          <div className="hero_social_icons_container mb-5">
            <Link
              to="https://wa.me/233248359918?text=Hello Jhay, I need your service!!"
              target="_blank"
              rel="noreferrer"
              className="social_link text_whatsapp"
            >
              <FaWhatsapp className="social_icon" />
            </Link>

            <Link
              to="https://wa.me/233248359918?text=Hello Jhay, I need your service!!"
              target="_blank"
              rel="noreferrer"
              className="social_link text_twitter"
            >
              <FaTwitter className="social_icon" />
            </Link>

            <Link
              to="https://github.com/jhayphix"
              target="_blank"
              rel="noreferrer"
              className="social_link text_secondary_1"
            >
              <FaGithub className="social_icon" />
            </Link>

            <Link
              to="https://wa.me/233248359918?text=Hello Jhay, I need your service!!"
              target="_blank"
              rel="noreferrer"
              // className="social_link text_primary_color_1"
              className="social_link text_facebook"
            >
              <FaFacebook className="social_icon" />
            </Link>
          </div>

          {/* Action buttons */}
          <div className="hero_btn_container">
            <Link to="" className="btn btn-lg btn_accent_1 me-2" role="button">
              Learn More
            </Link>

            <Link
              to=""
              className="btn btn-lg btn_unchanged_primary"
              role="button"
            >
              Download CV
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
