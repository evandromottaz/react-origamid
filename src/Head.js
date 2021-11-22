import React from 'react';

const Head = (props) => {
  React.useEffect(() => {
    document.title = 'Reacticia <3 ' + props.title;
  }, [props]);

  return <></>;
};

export default Head;
