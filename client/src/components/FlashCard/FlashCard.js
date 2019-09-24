import React from 'react';
import {Link} from 'react-router-dom'

function FlashCard({data, match, index}) {
  return (
    <div className={`card card${index+1}`}>
      <Link to={`/${match.params.character}/${data.letter}`}>
        <div className='card__top'>
          <p className="card__symbol">{data.symbol}</p>
        </div>
        <div className='card__bottom'>
          <p className="card__letter">{data.letter}</p>
        </div>
      </Link>
    </div>
  );
}

export default FlashCard
