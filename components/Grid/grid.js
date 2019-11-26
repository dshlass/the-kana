import React from 'react';
import PropTypes from 'prop-types';

const Grid = ({ cardData, index }) => {
  const playAudio = () => {
    var audio = new Audio(`./static/${cardData.table}/${cardData.letter}.mp3`);
    audio.play();
  };

  return (
    <div role="button" className={`card card${index + 1}`} onClick={() => playAudio()}>
      <div className="card__top">
        <p className="card__symbol">{cardData.symbol}</p>
        <p className="card__letter">{cardData.letter}</p>
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
