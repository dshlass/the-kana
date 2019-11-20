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
      style={{display:'none',visibility:'hidden', height: 0, width: 0}}></iframe></noscript>
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
