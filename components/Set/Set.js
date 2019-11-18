// import React from 'react';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Review from '../Review/review';
import Link from "next/link";
import { useRouter } from 'next/router';

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
  library,
  setName
}) => {
  const router = useRouter()
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
        <Link href={`/${library}/[set]`} as={`/${library}/${setName}`}>
          <a
            onMouseEnter={() => {
              router.prefetch(`/${library}/[set]`);
            }}
          >
            Test
          </a>
        </Link>
      </>
    );
  } else if (selection === 'random') {
    return (
      <>
        <Random set={state} libraryClass={libraryClass} />
        <button name={buttonName} className="button" id="review" onClick={e => changeMethod(e)}>
          Review
        </button>
        <Link href={`/${library}/[set]`} as={`/${library}/${setName}`}>
          <a
            onMouseEnter={() => {
              router.prefetch(`/${library}/[set]`);
            }}
          >
            Test
          </a>
        </Link>
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
  changeMethod: PropTypes.func,
  library: PropTypes.string,
  setName: PropTypes.string
};

export default Set;
