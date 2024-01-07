// ... React modules

// ... Context

// ... Components

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const PageBannerSection = ({ pageName }) => {
  return (
    <div className="page_banner_container container-lg">
      <h1 className="page_name display-2">{pageName?.toUpperCase()}</h1>
    </div>
  );
};

PageBannerSection.defaultProps = [{ pageName: "Page" }];

export default PageBannerSection;
