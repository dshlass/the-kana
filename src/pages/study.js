import React from "react"
import { Link } from "gatsby"
// import { useHiragana } from "../hooks/useHiragana"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/card"

const Study = ({ location }) => {
  const { data, first } = location.state
  console.log(first)
  return (
    <Layout>
      <SEO title="Study" />
      <h1>Study</h1>
      {data.map(item => {
        return <Card key={item.id} cardData={item} />
      })}

      <Link to="/randomize" state={{ data }}>
        Randomize
      </Link>
    </Layout>
  )
}

export default Study

//   //randomizes the cards
