import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Nav from "../../components/nav";

// import { useHiragana } from "../hooks/useHiragana";
import Set from "../../components/Set/Set";
import katakana from "../../data/katakana.json";
import Header from "../../components/Header";


//grid columns
const gojuonColumn = ["", "", "k", "s", "t", "n", "h", "m", "y", "r", "w", "n"];
const yoonColumn = ["", "k", "s", "c", "n", "h", "m", "r", "g", "j", "b", "p"];
const dakuonColumn = ["", "g", "z", "d", "b", "p"];

//grid heads
const gojuonHead = ["a", "i", "u", "e", "o"];
const dakuonHead = ["a", "i", "u", "e", "o"];
const yoonHead = ["ya", "yu", "yo"];

const initialState = {
  loading: true,
  gojuon: [
    {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
    {}, {}, {}, {}, {},{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
    {}, {}, {}, {}
  ],
  dakuon: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
    {}, {}, {}, {} ,{}],
  yoon: [
    {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
    {}, {}, {}, {}, {},{}, {}, {}, {}, {}, {}],
  gojuonSelection: "review",
  dakuonSelection: "review",
  yoonSelection: "review"
};

const Katakana = () => {
  const data = katakana
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const gojuon = data.filter(item => item.table === "gojuon");
    const dakuon = data.filter(item => item.table === "dakuon");
    const yoon = data.filter(item => item.table === "yoon");

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
        <title>Katakana</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn Katakana fast!!" />
        <title>Katakana | The Kana</title>
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WBWHN5N');`,
        }}>
        </script>
      </Head>
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WBWHN5N"
        style={{ display: 'none', visibility: 'hidden', height: 0, width: 0 }}></iframe></noscript>
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
            library={'katakana'}
            setName={'gojuon'}
          />

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
            library={'katakana'}
            setName={'dakuon'}
          />

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
            library={'katakana'}
            setName={'yoon'}
          />


        <Link href="/" as="/">
          <a>Back</a>
        </Link>>
    </>
  );
};

export default Katakana;
