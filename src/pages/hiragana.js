import React, { useState, useEffect } from "react"
// import React from "react"
import { Link } from "gatsby"
import { useHiragana } from "../hooks/useHiragana"
import Grid from "../components/grid"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

//grid columns
const gojuonColumn = ["", "", "k", "s", "t", "n", "h", "m", "y", "r", "w", "n"]
const dakuonColumn = ["", "g", "z", "d", "b"]
const handakuonColumn = ["", "p"]
const yoonColumn = [
  "",
  "k",
  "s",
  "c",
  "n",
  "h",
  "m",
  "r",
  "g",
  "j",
  "j",
  "b",
  "p",
]
//grid heads
const gojuonHead = ["a", "i", "u", "e", "o"]
const dakuonHead = ["a", "i", "u", "e", "o"]
const handakuonHead = ["a", "i", "u", "e", "o"]
const yoonHead = ["ya", "yu", "yo"]

const Hiragana = () => {
  const data = useHiragana().nodes
  const [state, setState] = useState({ loading: true })

  useEffect(() => {
    const gojuon = data.filter(item => item.table === "gojuon")
    const dakuon = data.filter(item => item.table === "dakuon")
    const handakuon = data.filter(item => item.table === "handakuon")
    const yoon = data.filter(item => item.table === "yoon")
    setState({ gojuon, dakuon, handakuon, yoon, loading: false })
  }, [data])
  console.log(state)
  return state.loading ? (
    <div>Loading</div>
  ) : (
    <Layout>
      <SEO title="Home" />
      <h1>Hiragana</h1>
      {/* GOJUON */}
      <div className="flex">
        <div className="library-column">
          {gojuonColumn.map(item => (
            <p className="library-column__item">{item}</p>
          ))}
        </div>
        <div>
          <div className="library-row">
            {gojuonHead.map(item => (
              <p className="library-column__item">{item}</p>
            ))}
          </div>
          <div className="library">
            {state.gojuon.map((item, index) => {
              return <Grid key={item.id} index={index} cardData={item} />
            })}
          </div>
        </div>
      </div>
      {/* DAKUON */}
      <div className="flex">
        <div className="library-column">
          {dakuonColumn.map(item => (
            <p className="library-column__item">{item}</p>
          ))}
        </div>
        <div>
          <div className="library-row">
            {dakuonHead.map(item => (
              <p className="library-column__item">{item}</p>
            ))}
          </div>
          <div className="library">
            {state.dakuon.map((item, index) => {
              return <Grid key={item.id} index={index} cardData={item} />
            })}
          </div>
        </div>
      </div>
      {/* HANDAKUON */}
      <div className="flex">
        <div className="library-column">
          {handakuonColumn.map(item => (
            <p className="library-column__item">{item}</p>
          ))}
        </div>
        <div>
          <div className="library-row">
            {handakuonHead.map(item => (
              <p className="library-column__item">{item}</p>
            ))}
          </div>
          <div className="library">
            {state.handakuon.map((item, index) => {
              return <Grid key={item.id} index={index} cardData={item} />
            })}
          </div>
        </div>
      </div>
      {/* YOON */}
      <div className="flex">
        <div className="library-column--yoon">
          {yoonColumn.map(item => (
            <p className="library-column__item">{item}</p>
          ))}
        </div>
        <div>
          <div className="library-row--yoon">
            {yoonHead.map(item => (
              <p className="library-column__item">{item}</p>
            ))}
          </div>
          <div className="library--yoon">
            {state.yoon.map((item, index) => {
              return <Grid key={item.id} index={index} cardData={item} />
            })}
          </div>
        </div>
      </div>
      <button>Study</button>
      <Link to="/">Back</Link>
    </Layout>
  )
}

export default Hiragana
