// ... React modules

// ... Context

// ... Components

// ... Assets

/*
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
*/
const EmbedIframe = ({ iframe_src, iframe_height, iframe_width }) => {
  /*
  |----------------------------------------
  | return
  |----------------------------------------
  */

  return (
    <div>
      <iframe
        className="iframe_outer_container"
        title="Excel embed"
        width={iframe_width}
        height={iframe_height}
        // frameBorder="0"
        // scrolling="no"
        srcDoc={`<iframe width=${iframe_width} height=${iframe_height} frameborder="0" scrolling="no" src="${iframe_src}"></iframe>`}
      ></iframe>
    </div>
  );
};

EmbedIframe.defaultProps = [
  {
    iframe_height: "600",
    iframe_width: "100%",
  },
];

export default EmbedIframe;
