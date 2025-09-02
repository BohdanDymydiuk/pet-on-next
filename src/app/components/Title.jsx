import React from 'react';
import { TITLE_CLASSNAME } from '../constants';

const Title = ({text}) => {
  return (
    <h2 className={TITLE_CLASSNAME}>
      {text}
    </h2>
  );
};

export default Title;
