import React from 'react';
import PropTypes from 'prop-types';

const Grid = ({ cardData, index }) => {
  const track = React.createRef()
  const controlButton = React.createRef()
  function playPause() {
    if (track.current.paused) {
      track.current.play();
      controlButton.current.className = "pause";
  } else {
      track.current.pause();
      controlButton.current.className = "play";
  }
}

const playAudio = () => {
  var audio = new Audio(`./static/${cardData.table}/${cardData.letter}.mp3`);
  audio.play();
}



  return (
    <div className={`card card${index + 1}`}>
      <div role="button" className="card__top" onClick={() => playAudio()}>
        <p className="card__symbol">{cardData.symbol}</p>
        <p className="card__symbol">{cardData.letter}</p>
        {/* <div>
          <audio ref={track} id="track" onEnded={() => controlButton.current.className = "play"}>
            <source src={`${cardData.sound}` || ''} type="audio/mpeg" />
          </audio>

          <div ref={controlButton} id="player-container" onClick={() => playPause()}>
            <div id="play-pause" className="play">Play</div>
          </div>
        </div> */}
        {/* <button onClick={() => playAudio()}>Play</button> */}
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


