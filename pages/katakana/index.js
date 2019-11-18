import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Nav from "../../components/nav";

// import { useHiragana } from "../hooks/useHiragana";
import Set from "../../components/Set/Set";
import katakana from "../../data/katakana.json";
import Header from "../../components/Header";
import { useRouter } from 'next/router';


//grid columns
const gojuonColumn = ["", "", "k", "s", "t", "n", "h", "m", "y", "r", "w", "n"];
const yoonColumn = ["", "k", "s", "c", "n", "h", "m", "r", "g", "j", "b", "p"];
const dakuonColumn = ["", "g", "z", "d", "b"];
const handakuonColumn = ["", "p"];

//grid heads
const gojuonHead = ["a", "i", "u", "e", "o"];
const dakuonHead = ["a", "i", "u", "e", "o"];
const handakuonHead = ["a", "i", "u", "e", "o"];
const yoonHead = ["ya", "yu", "yo"];

const initialState = {
  loading: true,
  gojuon: [
    {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
    {}, {}, {}, {}, {},{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
    {}, {}, {}, {}, {}, {}
  ],
  dakuon: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
  handakuon: [{}, {}, {}, {}, {}],
  yoon: [
    {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
    {}, {}, {}, {}, {},{}, {}, {}, {}, {}, {}, {}, {}, {}],
  gojuonSelection: "review",
  dakuonSelection: "review",
  handakuonSelection: "review",
  yoonSelection: "review"
};
// const Katakana = ({ data }) => {
const Katakana = () => {
  const router = useRouter()
  const data = katakana
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const gojuon = data.filter(item => item.table === "gojuon");
    const dakuon = data.filter(item => item.table === "dakuon");
    const handakuon = data.filter(item => item.table === "handakuon");
    const yoon = data.filter(item => item.table === "yoon");

    setState({
      ...initialState,
      gojuon,
      dakuon,
      handakuon,
      yoon,
      loading: false
    });
  }, [data]);

  const changeMethod = e => {
    e.preventDefault();
    const set = e.currentTarget.name;
    const selection = e.currentTarget.id;

    setState({ ...state, [set]: selection });
  };
  return (
    <>
      <Head>
        <title>Katakana</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn Katakana fast!!" />
        <title>Katakana | The Kana</title>
      </Head>
      <Nav />
      <Header />
      <h1>Katakana</h1>
      {/* GOJUON */}
      <Set
        set={state.gojuon}
        head={gojuonHead}
        column={gojuonColumn}
        columnClass={'library__column'}
        headClass={'library__row'}
        libraryClass={'library'}
        selection={state.gojuonSelection}
        buttonName={'gojuonSelection'}
        changeMethod={changeMethod}
      />
      <Link href="/katakana/[set]" as={`/katakana/gojuon`}>
        <a
          onMouseEnter={() => {
            router.prefetch('/katakana/[set]');
          }}
        >
          Test
        </a>
      </Link>
      <Set
        set={state.dakuon}
        head={dakuonHead}
        column={dakuonColumn}
        columnClass={'library__column--dakuon'}
        headClass={'library__row'}
        libraryClass={'library'}
        selection={state.dakuonSelection}
        buttonName={'dakuonSelection'}
        changeMethod={changeMethod}
      />
      <Link href="/katakana/[set]" as={`/katakana/dakuon`}>
        <a
          onMouseEnter={() => {
            router.prefetch('/katakana/[set]');
          }}
        >
          Test
        </a>
      </Link>
      <Set
        set={state.handakuon}
        head={handakuonHead}
        column={handakuonColumn}
        columnClass={'library__column--handakuon'}
        headClass={'library__row'}
        libraryClass={'library'}
        selection={state.handakuonSelection}
        buttonName={'handakuonSelection'}
        changeMethod={changeMethod}
      />
      <Link href="/katakana/[set]" as={`/katakana/handakuon`}>
        <a
          onMouseEnter={() => {
            router.prefetch('/katakana/[set]');
          }}
        >
          Test
        </a>
      </Link>
      <Set
        set={state.yoon}
        head={yoonHead}
        column={yoonColumn}
        columnClass={'library__column--yoon'}
        headClass={'library__row--yoon'}
        libraryClass={'library--yoon'}
        selection={state.yoonSelection}
        buttonName={'yoonSelection'}
        changeMethod={changeMethod}
      />
      <Link href="/katakana/[set]" as={`/katakana/yoon`}>
        <a
          onMouseEnter={() => {
            router.prefetch('/katakana/[set]');
          }}
        >
          Test
        </a>
      </Link>

      <Link href="/" as="/">
        <a>Back</a>
      </Link>
    </>
  );
};

// Katakana.getInitialProps = () => {
//   return { data: katakana };
// };

export default Katakana;
