import React from "react"
import "./style.css"

const Card = ({ cardData }) => {
  console.log(cardData)

  // const toggleClass = e => {
  //   console.log(e)
  //   // ontouchstart = "this.classList.toggle('hover');"
  // }
  return (
    <div className="flip-container" key={cardData.id}>
      <div className="flipper">
        <div className="front">
          <p>{cardData.symbol}</p>
        </div>
        <div className="back">
          <p>{cardData.letter}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
