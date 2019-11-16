import React from 'react';
import './grid.css';
import PropTypes from 'prop-types';

const Grid = ({ cardData, index }) => {
  // console.log(cardData)

  return (
    <div className={`card card${index + 1}`}>
      <div className="card__top">
        <p className="card__symbol">{cardData.symbol}</p>
      </div>
    </div>
  );
};

//CHANGE CARDDATA THE FUTURE!!
Grid.propTypes = {
  cardData: PropTypes.object,
  index: PropTypes.number
};

export default Grid;
