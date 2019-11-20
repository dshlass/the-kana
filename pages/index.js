import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Header from "../components/Header";
// export const config = { amp: true }

const Home = () => (
  <>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="Speed up your Hiragana and Katakana learning!"
      />
      <title>Home | The Kana</title>

      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-142294407-2"></script>
      <script dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-142294407-2');`,
      }}>
      </script>
    </Head>

      <Nav />
      <Header />
      <div className="hero">
        <h1 className="title">Welcome to The-Kana!</h1>
        <p className="description">
          Please select a Libray to study.
        </p>
      </div>
  </>
);

export default Home
