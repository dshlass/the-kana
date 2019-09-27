import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import hiragana from '../../data/hiragana.js';
import katakana from '../../data/katakana.js';

const sortLibrary = (library) => {
  let sortedLibrary = []
  for (let char of library) {
    if (!sortedLibrary.includes(char['table'])) {
      sortedLibrary.push(char['table'])
    }
  }
  return sortedLibrary
}

function SetSelection({match}) {

  const [set, setSet] = useState([])

  useEffect(() => {
   const startUp = (match) => {
    switch(match.params.library) {
          case 'hiragana':
            setSet(sortLibrary(hiragana))
            break;
          
          case 'katakana':
            setSet(sortLibrary(hiragana))
            break;

          case 'random':
            setSet(sortLibrary([...hiragana,...katakana]))
            break;

          default: 
            setSet([])
        }
      }
    startUp(match) 
  }, [match])

  return (
    <div className="library">
      {
        set.map((set,index) => (
          <div key={index}>
            <Link to={`/${match.params.library}/${set}`}>
              {set}
            </Link>
          </div>

        )
        )
      }
    </div>
  );
}

export default SetSelection
