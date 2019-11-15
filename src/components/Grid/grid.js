import React from "react"
import "./grid.css"

const Grid = ({ cardData, index }) => {
  // console.log(cardData)

  return (
    <div className={`card card${index + 1}`}>
      <div>
        <div className="card__top">
          <p className="card__symbol">{cardData.symbol}</p>
        </div>
        {/* <div className="card__bottom">
          <p className="card__letter">{cardData.letter}</p>
        </div> */}
      </div>
    </div>
  )
}

export default Grid
