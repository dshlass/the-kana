import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { useKatakana } from '../hooks/useKatakana';
import Review from '../components/Review/review';

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

const Katakana = () => {
  const data = useKatakana().nodes;
  const [state, setState] = useState({ loading: true });

  useEffect(() => {
    const gojuon = data.filter(item => item.table === 'gojuon');
    const dakuon = data.filter(item => item.table === 'dakuon');
    const handakuon = data.filter(item => item.table === 'handakuon');
    const yoon = data.filter(item => item.table === 'yoon');
    setState({ gojuon, dakuon, handakuon, yoon, loading: false });
  }, [data]);
  console.log(state);
  return state.loading ? (
    <div>Loading</div>
  ) : (
    <Layout>
      <SEO title="Home" />
      <h1>Katakana</h1>
      {/* GOJUON */}
      <Review
        set={state.gojuon}
        head={gojuonHead}
        column={gojuonColumn}
        columnClass={'library__column'}
        headClass={'library__row'}
        libraryClass={'library'}
      />
      <Review
        set={state.dakuon}
        head={dakuonHead}
        column={dakuonColumn}
        columnClass={'library__column--dakuon'}
        headClass={'library__row'}
        libraryClass={'library'}
      />
      <Review
        set={state.handakuon}
        head={handakuonHead}
        column={handakuonColumn}
        columnClass={'library__column--handakuon'}
        headClass={'library__row'}
        libraryClass={'library'}
      />
      <Review
        set={state.yoon}
        head={yoonHead}
        column={yoonColumn}
        columnClass={'library__column--yoon'}
        headClass={'library__row--yoon'}
        libraryClass={'library--yoon'}
      />
      <button>Study</button>
      <Link to="/">Back</Link>
    </Layout>
  );
};

export default Katakana;
