import React from "react"
import { Link } from "gatsby"
// import { useHiragana } from "../hooks/useHiragana"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/card"

const randomizeCards = arr => {
  var currentIndex = arr.length,
    temporaryValue,
    randomIndex
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = arr[currentIndex]
    arr[currentIndex] = arr[randomIndex]
    arr[randomIndex] = temporaryValue
  }

  return arr
}

const Random = ({ location }) => {
  const { data } = location.state
  const cardData = randomizeCards(data)

  return (
    <Layout>
      <SEO title="Random" />
      <h1>Random</h1>
      {cardData.map(item => {
        return <Card cardData={item} />
      })}

      <Link to="/">Back</Link>
    </Layout>
  )
}

export default Random

//   //randomizes the cards
