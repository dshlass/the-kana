import React, { useState, useEffect } from 'react';
// import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Layout from '../components/Layouts/layout';
import SEO from '../components/seo';

const initialState = {
  loading: true
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
const gamify = (arr, full) => {
  console.log(arr);
  const placeholder = [...arr];
  console.log(full);
  const answerArray = [];
  let question = '';
  if (typeof arr === undefined || arr === [])
    return { question: { symbol: '' }, answerArray: [], placeholder: [] };

  //random value from placeholder array
  const val = Math.floor(Math.random() * placeholder.length);
  question = placeholder[val];
  answerArray.push(placeholder[val]);
  placeholder.splice(val, 1);
  let count = 0;

  while (answerArray.length <= 3 || count === 50) {
    //random val from full array
    const val = Math.floor(Math.random() * full.length);
    let fullSelected = full[val];
    let match = false;

    answerArray.forEach(item => {
      if (fullSelected.symbol === item.symbol) {
        match = true;
      }
    });

    if (match === false) {
      answerArray.push(fullSelected);
    }
  }
  // for (let i = 1; i <= 4; i++) {
  //   if (i < 4) {
  //     const val = Math.floor(Math.random() * placeholder.length);
  //     if (!placeholder[val]) break;
  //     answerArray.push(placeholder[val]);

  //     // If it's the last value, show the last value
  //     if (placeholder.length === 1) {
  //       question = placeholder[val];
  //       break;
  //     }
  //     placeholder.splice(val, 1);
  //   }
  //   if (i === 4) {
  //     const val = Math.floor(Math.random() * placeholder.length);
  //     question = placeholder[val];
  //     answerArray.push(placeholder[val]);
  //     placeholder.splice(val, 1);
  //   }
  // }
  return {
    question,
    answerArray,
    placeholder
  };
};

// const gamify = (arr, full) => {
//   // console.log(arr);
//   const placeholder = [...arr];
//   console.log(full);
//   const answerArray = [];
//   let question = '';
//   if (typeof arr === undefined || arr === [])
//     return { question: { symbol: '' }, answerArray: [], placeholder: [] };
//   for (let i = 1; i <= 4; i++) {
//     if (i < 4) {
//       const val = Math.floor(Math.random() * placeholder.length);
//       if (!placeholder[val]) break;
//       answerArray.push(placeholder[val]);

//       // If it's the last value, show the last value
//       if (placeholder.length === 1) {
//         question = placeholder[val];
//         break;
//       }
//       placeholder.splice(val, 1);
//     }
//     if (i === 4) {
//       const val = Math.floor(Math.random() * placeholder.length);
//       question = placeholder[val];
//       answerArray.push(placeholder[val]);
//       placeholder.splice(val, 1);
//     }
//   }
//   return {
//     question,
//     answerArray,
//     placeholder
//   };
// };

const Test = ({ location }) => {
  const { set, toPage } = location.state;
  const [state, setState] = useState(initialState);

  useEffect(() => {
    setState({ ...initialState, loading: false, test: gamify(set, set) });
  }, [set]);

  const handleClick = () => {
    setState({ ...state, test: gamify(state.test.placeholder, set) });
  };

  console.log(state);
  return state.loading ? (
    <div>Loading</div>
  ) : (
    <Layout>
      <SEO title="Test" />
      <h1>Test</h1>
      <p>{state.test.question.symbol || 'GAME COMPLETE'}</p>
      <ul>
        {(state.test.answerArray || []).map((item, index) => (
          <li key={index}>{item.letter}</li>
        ))}
      </ul>
      {!state.test.placeholder.length ? null : <button onClick={() => handleClick()}>GAME</button>}
      <Link to={`/${toPage}`}>Back</Link>
    </Layout>
  );
};

Test.propTypes = {
  location: PropTypes.object
};

export default Test;
