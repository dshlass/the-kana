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

//CHANGE IN THE FUTURE!!
Card.propTypes = {
  cardData: PropTypes.object
};

export default Card;


// <style jsx>{`
//   .flip-container {
//   perspective: 1000px;
// }

// .flip-container:hover .flipper,
// .flip-container:hover .flipper {
//   transform: rotateY(180deg);
// }

// .flip-container,
// .front,
// .back {
//   width: 100%;
//   height: 50px;
//   text-align: center;
// }


// .flipper {
//   transition: 0.6s;
//   transform-style: preserve-3d;

//   position: relative;
// }


// .front,
// .back {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   line-height: 2.25;
//   backface-visibility: hidden;
//   border: 1px solid black;
//   position: absolute;
//   top: 0;
//   left: 0;
// }


// .front {
//   z-index: 2;
//   transform: rotateY(0deg);
// }


// .back {
//   transform: rotateY(180deg);
// }`}</style>
