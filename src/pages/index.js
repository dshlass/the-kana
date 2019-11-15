import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>The Kana</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/hiragana/">Hiragana</Link>
      <Link to="/katakana/">Katakana</Link>
    </Layout>
  );
};

export default IndexPage;
