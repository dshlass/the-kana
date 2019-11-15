import React, { useState, useEffect } from 'react';
// import React from "react"
import { Link } from 'gatsby';
import { useKatakana } from '../hooks/useKatakana';
import Grid from '../components/Grid/grid';

import Layout from '../components/Layouts/layout';
// import Image from "../components/image"
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
      <div className="flex">
        <div className="library__column">
          {gojuonColumn.map((item, index) => (
            <p key={index} className="library__column-item">
              {item}
            </p>
          ))}
        </div>
        <div>
          <div className="library__row">
            {gojuonHead.map((item, index) => (
              <p key={index} className="library__column-item">
                {item}
              </p>
            ))}
          </div>
          <div className="library">
            {state.gojuon.map((item, index) => {
              return <Grid key={item.id} index={index} cardData={item} />;
            })}
          </div>
        </div>
      </div>
      {/* DAKUON */}
      <div className="flex">
        <div className="library__column--dakuon">
          {dakuonColumn.map((item, index) => (
            <p key={index} className="library__column_item">
              {item}
            </p>
          ))}
        </div>
        <div>
          <div className="library__row">
            {dakuonHead.map((item, index) => (
              <p key={index} className="library__column-item">
                {item}
              </p>
            ))}
          </div>
          <div className="library">
            {state.dakuon.map((item, index) => {
              return <Grid key={item.id} index={index} cardData={item} />;
            })}
          </div>
        </div>
      </div>
      {/* HANDAKUON */}
      <div className="flex">
        <div className="library__column--handakuon">
          {handakuonColumn.map((item, index) => (
            <p key={index} className="library__column-item">
              {item}
            </p>
          ))}
        </div>
        <div>
          <div className="library__row">
            {handakuonHead.map((item, index) => (
              <p key={index} className="library__column-item">
                {item}
              </p>
            ))}
          </div>
          <div className="library">
            {state.handakuon.map((item, index) => {
              return <Grid key={item.id} index={index} cardData={item} />;
            })}
          </div>
        </div>
      </div>
      {/* YOON */}
      <div className="flex">
        <div className="library__column--yoon">
          {yoonColumn.map((item, index) => (
            <p key={index} className="library__column-item">
              {item}
            </p>
          ))}
        </div>
        <div>
          <div className="library__row--yoon">
            {yoonHead.map((item, index) => (
              <p key={index} className="library__column-item">
                {item}
              </p>
            ))}
          </div>
          <div className="library--yoon">
            {state.yoon.map((item, index) => {
              return <Grid key={item.id} index={index} cardData={item} />;
            })}
          </div>
        </div>
      </div>
      <button>Study</button>
      <Link to="/">Back</Link>
    </Layout>
  );
};

export default Katakana;
