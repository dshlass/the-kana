// import React from 'react';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Review from '../Review/review';
// import Link from "next/link";

import Random from '../Random/Random';

const Set = ({
  buttonName,
  changeMethod,
  selection,
  set,
  head,
  column,
  columnClass,
  headClass,
  libraryClass,
}) => {
  const [state, setState] = useState();
  useEffect(() => {
    setState([...set]);
  }, [set]);

  if (selection === 'review') {
    return (
      <>
        <Review
          set={set}
          head={head}
          column={column}
          columnClass={columnClass}
          headClass={headClass}
          libraryClass={libraryClass}
        />
        <button name={buttonName} className="button" id="random" onClick={e => changeMethod(e)}>
          Random
        </button>
        {/* <Link to="/test" state={{ set, toPage }}>
          Test
        </Link> */}
      </>
    );
  } else if (selection === 'random') {
    return (
      <>
        <Random set={state} libraryClass={libraryClass} />
        <button name={buttonName} className="button" id="review" onClick={e => changeMethod(e)}>
          Review
        </button>
        {/* <Link to="/test" state={{ set, toPage }}>
          Test
        </Link> */}
      </>
    );
  }
};

Set.propTypes = {
  selection: PropTypes.string,
  set: PropTypes.array,
  head: PropTypes.array,
  column: PropTypes.array,
  columnClass: PropTypes.string,
  headClass: PropTypes.string,
  libraryClass: PropTypes.string,
  buttonName: PropTypes.string,
  changeMethod: PropTypes.func
};

export default Set;
