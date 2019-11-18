import React from 'react';
// import './grid.css';
import PropTypes from 'prop-types';

const Grid = ({ cardData, index }) => {
  // console.log(cardData)

  return (
    <div className={`card card${index + 1}`}>
      <div className="card__top">
        <p className="card__symbol">{cardData.symbol}</p>
        <p className="card__symbol">{cardData.letter}</p>
      </div>
      <style global jsx>{`
        p {
          margin: 0;
          font-size: 20px;
        }

        .button {
          border: none;
          display: block;
          padding: 10px 20px;
          width: 85px;
          margin-bottom: 50px;
        }
        .card {
          text-align: center;
          border: 1px solid black;
          height: 50px;
        }
        .card__top {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .card__symbol {
          margin: 0;
          font-size: 20px;
        }
        .card37 {
          grid-column-start: 3;
          grid-column-end: 4;
        }

        .card38 {
          grid-column-start: 5;
          grid-column-end: 6;
        }
        .card45 {
          grid-column-start: 5;
          grid-column-end: 6;
        }
        .card46 {
          grid-column-start: 1;
          grid-column-end: 6;
        }

      `}</style>
    </div>
  );
};

//CHANGE CARDDATA THE FUTURE!!
Grid.propTypes = {
  cardData: PropTypes.object,
  index: PropTypes.number
};

export default Grid;
