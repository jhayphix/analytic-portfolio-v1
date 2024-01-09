// ... React modules

// ... Context

// ... Components

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const StoryList = ({ style, list }) => {
  /*
  |----------------------------------------
  | Return
  |----------------------------------------
  */
  return (
    <ul>
      {list?.map((list_item, index) => {
        return (
          // <li key={index} className="mb-2 lead">
          <li key={index} className={style}>
            {list_item}
          </li>
        );
      })}
    </ul>
  );
};

export default StoryList;
