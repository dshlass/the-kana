import React from 'react';
// import './card.scss';
import PropTypes from 'prop-types';

const Card = ({ cardData }) => {
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
  );
};


Card.propTypes = {
  cardData: PropTypes.object
};

export default Card;
