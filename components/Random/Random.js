import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/card';

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

const Random = ({ set, libraryClass }) => {
  const [state, setState] = useState();

  const blankArray = set.map((item, index) => (item[index] = {}));

  useEffect(() => {
    setState(randomizeCards(set));
  }, [set]);
  if (!state) {
    return (
      <div className="flex">
        <div className={libraryClass}>
          {blankArray.map((item, index) => {
            return <Card key={index} cardData={item} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex">
        <div className={libraryClass}>
          {state.map((item, index) => {
            return <Card key={index} cardData={item} />;
          })}
        </div>
      </div>
    );
  }
};

Random.propTypes = {
  set: PropTypes.array,
  libraryClass: PropTypes.string
};

export default Random;
