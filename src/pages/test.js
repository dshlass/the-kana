import React, { useState, useEffect } from 'react';
// import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Layout from '../components/Layouts/layout';
import SEO from '../components/seo';

const initialState = {
  loading: true
};

//shuffling the answerArray
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

//TO IMPLEMENT
// input starting array and full array
// for loop from 1 to 4 (4 times)
// get random number
// push 1 from placeholder array to answer array && question then remove value from placeholder array
// generate random number and select a associated in the full array
// check to see if the symbol of the obj selected matches any of the symbols in the answer array
// if it does, generate new number and try again. if not push to answrer array and remove va from placeholder array
// return {question, answerArray, placeholder}
//
const gamify = (remainderArray, fullSet) => {
  const placeholder = [...remainderArray];
  const answerArray = [];
  let question = '';

  //random value from placeholder array
  const val = Math.floor(Math.random() * placeholder.length);
  question = placeholder[val];
  answerArray.push(placeholder[val]);
  placeholder.splice(val, 1);
  let count = 0;

  while (answerArray.length <= 3 || count === 50) {
    // random val from fullSet array
    const val = Math.floor(Math.random() * fullSet.length);
    let fullArraySelected = fullSet[val];
    let match = false;

    answerArray.forEach(item => {
      if (fullArraySelected.symbol === item.symbol) {
        match = true;
      }
    });

    if (match === false) {
      answerArray.push(fullArraySelected);
    }
  } //end of while

  return {
    question,
    answerArray: randomizeCards(answerArray),
    placeholder
  };
};

const Test = ({ location }) => {
  const { set, toPage } = location.state;
  const [state, setState] = useState(initialState);

  useEffect(() => {
    setState({ ...initialState, loading: false, test: gamify(set, set) });
  }, [set]);

  const handleGame = (index, placeholder, fullSet) => {
    const question = state.test.question.symbol;
    const answer = state.test.answerArray[index].symbol;
    if (answer === question && placeholder.length > 0) {
      setState({ ...state, test: gamify(placeholder, fullSet) });
    }
  };

  return state.loading ? (
    <div>Loading</div>
  ) : (
    <Layout>
      <SEO title="Test" />
      <h1>Test</h1>

      {state.test.placeholder.length ? (
        <>
          <p>{state.test.question.symbol}</p>
          <ul>
            {(state.test.answerArray || []).map((item, index) => (
              <button onClick={() => handleGame(index, state.test.placeholder, set)} key={index}>
                {item.letter}
              </button>
            ))}
          </ul>
        </>
      ) : (
        <p>Game completed</p>
      )}

      <Link to={`/${toPage}`}>Back</Link>
    </Layout>
  );
};

Test.propTypes = {
  location: PropTypes.object
};

export default Test;
