import React from 'react';
import { Link } from 'react-router-dom'

function Library({match}) {
  return (
    <div className="library">
      <Link to='/hiragana'>
        <div className='library__selection'>
          <p>Hiragana</p>
        </div>
      </Link>
      <Link to='/katakana'>
        <div className='library__selection'>
          <p>Katakana</p>
        </div>
      </Link>
      <Link to='/random'>
        <div className='library__selection'>
          <p>Random</p>
        </div>
      </Link>
    </div>
  );
}

export default Library
