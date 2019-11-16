import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { useHiragana } from '../hooks/useHiragana';
import Set from '../components/Set/Set';

import Layout from '../components/Layouts/layout';
import SEO from '../components/seo';

//grid columns
const gojuonColumn = ['', '', 'k', 's', 't', 'n', 'h', 'm', 'y', 'r', 'w', 'n'];
const yoonColumn = ['', 'k', 's', 'c', 'n', 'h', 'm', 'r', 'g', 'j', 'j', 'b', 'p'];
const dakuonColumn = ['', 'g', 'z', 'd', 'b'];
const handakuonColumn = ['', 'p'];

//grid heads
const gojuonHead = ['a', 'i', 'u', 'e', 'o'];
const dakuonHead = ['a', 'i', 'u', 'e', 'o'];
const handakuonHead = ['a', 'i', 'u', 'e', 'o'];
const yoonHead = ['ya', 'yu', 'yo'];

const initialState = {
  loading: true,
  gojuonSelection: 'review',
  dakuonSelection: 'review',
  handakuonSelection: 'review',
  yoonSelection: 'review'
};

const Hiragana = () => {
  const data = useHiragana().nodes;
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const gojuon = data.filter(item => item.table === 'gojuon');
    const dakuon = data.filter(item => item.table === 'dakuon');
    const handakuon = data.filter(item => item.table === 'handakuon');
    const yoon = data.filter(item => item.table === 'yoon');

    setState({ ...initialState, gojuon, dakuon, handakuon, yoon, loading: false });
  }, [data]);

  const changeMethod = e => {
    e.preventDefault();
    const set = e.currentTarget.name;
    const selection = e.currentTarget.id;

    setState({ ...state, [set]: selection });
  };
  // console.log(state);
  return state.loading ? (
    <div>Loading</div>
  ) : (
    <Layout>
      <SEO title="Hiragana" />
      <h1>Hiragana</h1>
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
        toPage="hiragana"
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
        toPage="hiragana"
      />

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
        toPage="hiragana"
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
        toPage="hiragana"
      />

      <Link to="/">Back</Link>
      <Link to="/test" state={{ state }}>
        Test
      </Link>
    </Layout>
  );
};

export default Hiragana;
