import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';

const Home = () => (
  <>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="Speed up your Hiragana and Katakana learning!" />
      <title>Home | The Kana</title>
    </Head>

    <Header />
    <div className="hero">
      <h1 className="title">Welcome to The-Kana!</h1>
      <p className="description">Please select a Libray to study.</p>
    </div>
  </>
);

export default Home;
