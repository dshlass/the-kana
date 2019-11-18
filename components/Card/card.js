import React from 'react';
// import './card.css';
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
      <style global jsx>{`
        /* entire container, keeps perspective */
        .flip-container {
          perspective: 1000px;
        }
        /* flip the pane when hovered */
        .flip-container:hover .flipper,
        .flip-container.hover .flipper {
          transform: rotateY(180deg);
        }

        .flip-container,
        .front,
        .back {
          width: 100%;
          height: 27px;
          text-align: center;
        }

        /* flip speed goes here */
        .flipper {
          transition: 0.6s;
          transform-style: preserve-3d;

          position: relative;
        }

        /* hide back of pane during swap */
        .front,
        .back {
          backface-visibility: hidden;
          border: 1px solid black;
          position: absolute;
          top: 0;
          left: 0;
        }

        /* front pane, placed above back */
        .front {
          z-index: 2;
          transform: rotateY(0deg);
        }

        /* back, initially hidden pane */
        .back {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

//CHANGE IN THE FUTURE!!
Card.propTypes = {
  cardData: PropTypes.object
};

export default Card;
