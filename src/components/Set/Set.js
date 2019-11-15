// import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Review from '../Review/review';

import Random from '../Random/Random';

const randomizeCards = arr => {
  var currentIndex = arr.length,
    temporaryValue,
    randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }

  return arr;
};

const Set = ({ selection, set, head, column, columnClass, headClass, libraryClass }) => {
  const [state, setState] = useState();
  useEffect(() => {
    setState([...set]);
  }, [set]);

  if (selection === 'review') {
    return (
      <Review
        set={set}
        head={head}
        column={column}
        columnClass={columnClass}
        headClass={headClass}
        libraryClass={libraryClass}
      />
    );
  } else if (selection === 'random') {
    return <Random set={randomizeCards([...state])} libraryClass={libraryClass} />;
  }
};

Set.propTypes = {
  selection: PropTypes.string,
  set: PropTypes.array,
  head: PropTypes.array,
  column: PropTypes.array,
  columnClass: PropTypes.string,
  headClass: PropTypes.string,
  libraryClass: PropTypes.string
};

export default Set;
