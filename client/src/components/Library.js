import React from 'react';

function Library({match}) {
  return (
    <div className="library">
      <a href={`http://localhost:3000/hg`}>
        <div className='card__top'>
          <p>Hiragana</p>
        </div>
      </a>
      <a href={`http://localhost:3000/kk`}>
        <div className='card__top'>
          <p>Katakana</p>
        </div>
      </a>
    </div>
  );
}

export default Library
