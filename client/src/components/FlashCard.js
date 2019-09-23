import React from 'react';

function FlashCard({data}) {
  console.log(data)
  return (
    <div className="card">
      <div className='card__top'>
        <p>{data.symbol}</p>
      </div>
      <div className='card__bottom'>
        <p>{data.letter}</p>
      </div>
    </div>
  );
}

export default FlashCard
