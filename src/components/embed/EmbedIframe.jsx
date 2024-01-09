// ... React modules

// ... Context

// ... Components

// ... Assets

/*
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
*/
const EmbedIframe = ({ iframeSrc, height, width }) => {
  /*
  |----------------------------------------
  | return
  |----------------------------------------
  */

  return (
    <iframe
      title="Excel embed"
      width={width}
      height={height}
      // frameBorder="0"
      // scrolling="no"
      srcDoc={`<iframe width=${width} height=${height} frameborder="0" scrolling="no" src="${iframeSrc}"></iframe>`}
    ></iframe>
  );
};

EmbedIframe.defaultProps = [
  {
    height: "600",
    width: "95%",
  },
];

export default EmbedIframe;
