import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { useKatakana } from '../hooks/useKatakana';
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

const Katakana = () => {
  const data = useKatakana().nodes;
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
      <SEO title="Home" />
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
      />

      <button name="gojuonSelection" id="review" onClick={e => changeMethod(e)}>
        Review
      </button>

      <button name="gojuonSelection" id="random" onClick={e => changeMethod(e)}>
        Random
      </button>
      <Set
        set={state.dakuon}
        head={dakuonHead}
        column={dakuonColumn}
        columnClass={'library__column--dakuon'}
        headClass={'library__row'}
        libraryClass={'library'}
        selection={state.dakuonSelection}
      />

      <button name="dakuonSelection" id="review" onClick={e => changeMethod(e)}>
        Review
      </button>

      <button name="dakuonSelection" id="random" onClick={e => changeMethod(e)}>
        Random
      </button>

      <Set
        set={state.handakuon}
        head={handakuonHead}
        column={handakuonColumn}
        columnClass={'library__column--handakuon'}
        headClass={'library__row'}
        libraryClass={'library'}
        selection={state.handakuonSelection}
      />

      <button name="handakuonSelection" id="review" onClick={e => changeMethod(e)}>
        Review
      </button>

      <button name="handakuonSelection" id="random" onClick={e => changeMethod(e)}>
        Random
      </button>
      <Set
        set={state.yoon}
        head={yoonHead}
        column={yoonColumn}
        columnClass={'library__column--yoon'}
        headClass={'library__row--yoon'}
        libraryClass={'library--yoon'}
        selection={state.yoonSelection}
      />

      <button name="yoonSelection" id="review" onClick={e => changeMethod(e)}>
        Review
      </button>

      <button name="yoonSelection" id="random" onClick={e => changeMethod(e)}>
        Random
      </button>

      <Link to="/">Back</Link>
    </Layout>
  );
};

export default Katakana;
