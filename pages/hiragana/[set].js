import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import Head from 'next/head';
import Nav from '../../components/nav';
import Link from 'next/link'

import { useRouter } from 'next/router';
import Header from '../../components/Header';
import hiragana from '../../data/hiragana.json';

const setLibrary = (set, data) => {
  if (set === 'gojuon') {
    return data.filter(item => item.table === 'gojuon');
  }
  if (set === 'dakuon') {
    return data.filter(item => item.table === 'dakuon');
  }
  if (set === 'handakuon') {
    return data.filter(item => item.table === 'handakuon');
  }
  if (set === 'yoon') {
    return data.filter(item => item.table === 'yoon');
  } else return data;
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

// //TO IMPLEMENT
// // input starting array and full array
// // for loop from 1 to 4 (4 times)
// // get random number
// // push 1 from placeholder array to answer array && question then remove value from placeholder array
// // generate random number and select a associated in the full array
// // check to see if the symbol of the obj selected matches any of the symbols in the answer array
// // if it does, generate new number and try again. if not push to answrer array and remove va from placeholder array
// // return {question, answerArray, placeholder}
// //
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

const initialState = {
  loading: true,
  score: 0,
  click: 0
};

const Set = () => {
  const router = useRouter();
  const { set } = router.query;
  const data = hiragana;
  let test = setLibrary(set, data);
  // console.log(test)
  // console.log(router);
  const [state, setState] = useState(initialState);

  useEffect(() => {
    setState({ ...initialState, loading: false, test: gamify(test, test) });
  }, [set]);

  const handleGame = (index, placeholder, fullSet, e) => {
    const question = state.test.question.symbol;
    const answer = state.test.answerArray[index].symbol;
    let button = e.currentTarget;
    let score = state.score;
    if (answer !== question && placeholder.length > 0) {
      e.currentTarget.style.backgroundColor = 'red';
      setTimeout(() => {
        button.style.backgroundColor = '';
        setState({ ...state, click: state.click + 1 });
      }, 500);
    }
    if (answer === question && placeholder.length > 0) {
      e.currentTarget.style.backgroundColor = 'green';
      setTimeout(() => {
        button.style.backgroundColor = '';
        if (state.click === 0) {
          score = score + 1;
        }
        setState({
          ...state,
          test: gamify(placeholder, fullSet),
          score,
          click: 0
        });
      }, 500);
    }
  };

  return state.loading ? (
    <div>Loading</div>
  ) : (
    <>
      <Head>
        <title>Hiragana Test</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Free hiragana test." />
        <title>Hiragana Test | The Kana</title>
      </Head>
      <Nav />
      <Header />
      <h1>Test</h1>
      <h3>You receive a point if you correctly select the answer the first time. </h3>
      <p>
        Score: {state.score}/{test.length}
      </p>
      {state.test.placeholder.length ? (
        <>
          <p>{state.test.question.symbol}</p>
          <ul>
            {(state.test.answerArray || []).map((item, index) => (
              <button
                className="answerButton"
                onClick={e => handleGame(index, state.test.placeholder, test, e)}
                key={index}
              >
                {item.letter}
              </button>
            ))}
          </ul>
        </>
      ) : (
        <p>Game completed</p>
      )}
      <Link href="/hiragana">
        <a
          onMouseEnter={() => {
            router.prefetch('/hiragana');
          }}
        >
          Back
        </a>
      </Link>
    </>
  );
};

// Set.propTypes = {
//   data: PropTypes.object
// };

// Set.getInitialProps = () => {
//   return { data: hiragana };
// };

export default Set;

// const Test = ({ location }) => {

// export default Test;
