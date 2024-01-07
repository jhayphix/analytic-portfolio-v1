// ... React modules
import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaTwitter,
  FaGithub,
  FaFacebook,
  FaWrench,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

// ... Context

// ... Components

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/

const ContactCard = () => {
  /*
    |----------------------------------------
    | Return
    |----------------------------------------
  */
  return (
    <div className="row justify-content-center">
      <div className="col-10 card rounded-lg p-0 border-0 box-shadow">
        <div className="card-header bg_primary_3 text-center">
          <h3 className="fw-bold text_secondary_1">
            <span className="brand_name_highlight"> &#123; Jhay</span>Ph
            <span className="brand_name_highlight">
              <FaWrench className="brand_wrench" />
            </span>
            x <span className="brand_name_highlight"> &#125; </span>
          </h3>
        </div>

        {/*  */}
        <div className="card-body py-5 text_secondary_1 bg_primary_4">
          <h5 className="card-title text_secondary_1 mb-4">
            Let's talk about a project
          </h5>

          <div className="card-text text_secondary_1">
            <div className="text_container">
              <FaMapMarkerAlt className="me-3" />
              <span className="">Kumasi - Ghana</span>
            </div>
            <div className="text_container">
              <FaPhone className="me-3" />
              <span className="">+233 248 359 918</span>
            </div>
            <div className="text_container">
              <FaEnvelope className="me-3" />
              <span className="">jhayphix05@gmail.com</span>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="card-footer bg_primary_2 text-center">
          <div className="contact_social_icons_container">
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
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
