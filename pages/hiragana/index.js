import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
// import { useHiragana } from "../hooks/useHiragana";
import Set from '../../components/Set/Set';
import hiragana from '../../data/hiragana.json';
import Header from '../../components/Header';
import Nav from '../../components/nav';

//grid columns
const gojuonColumn = ['', '', 'k', 's', 't', 'n', 'h', 'm', 'y', 'r', 'w', 'n'];
const yoonColumn = ['', 'k', 's', 'c', 'n', 'h', 'm', 'r', 'g', 'j', 'b', 'p'];
const dakuonColumn = ['', 'g', 'z', 'd', 'b', 'p'];

//grid heads
const gojuonHead = ['a', 'i', 'u', 'e', 'o'];
const dakuonHead = ['a', 'i', 'u', 'e', 'o'];
const yoonHead = ['ya', 'yu', 'yo'];

const initialState = {
  loading: true,
  gojuon: [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  dakuon: [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  yoon: [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  gojuonSelection: 'review',
  dakuonSelection: 'review',
  yoonSelection: 'review'
};

const Hiragana = () => {
  const data = hiragana;

  const [state, setState] = useState(initialState);

  useEffect(() => {
    const gojuon = data.filter(item => item.table === 'gojuon');
    const dakuon = data.filter(item => item.table === 'dakuon');
    const yoon = data.filter(item => item.table === 'yoon');

    setState({
      ...initialState,
      gojuon,
      dakuon,
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
        <title>Hiragana</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn Hiragana fast!!" />
        <title>Hiragana | The Kana</title>
      </Head>

      <Header />
      <h1>Hiragana</h1>
      {/* GOJUON */}
      <h2>Gojuon</h2>

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
        library={'hiragana'}
        setName={'gojuon'}
      />
      <h2>Dakuon with Handakuon</h2>
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
        library={'hiragana'}
        setName={'dakuon'}
      />
      <h2>Yoon</h2>

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
        library={'hiragana'}
        setName={'yoon'}
      />

      <Link href="/" as="/">
        <a>Back</a>
      </Link>
    </>
  );
};

export default Hiragana;
