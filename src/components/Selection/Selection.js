import React, { useState, useEffect } from 'react';
import FlashCard from '../FlashCard/FlashCard';
import hiragana from '../../data/hiragana.js';
import katakana from '../../data/katakana';


  const setLibrary = (match) => {
    switch(match.params.library) {
      case 'hiragana':
        return filterCards(hiragana, match)

      case 'katakana': 
        return filterCards(katakana, match)

      case 'random':
       return filterCards([...hiragana,...katakana], match)
      
      default: 
    }
  }

const filterCards = (library, match) => {
  let filteredCards = library.filter(set => set.table === match.params.selection)
  console.log(filteredCards)
  return filteredCards
}

function Selection({match}) {
  const [cards, setCards] = useState([]);
  console.log(match)
  useEffect(() => {
    const startUp = (match) => {
     setCards(setLibrary(match))
      }
    startUp(match) 
  }, [match])


  // console.log(cards)

  return (
    <div className="library">
      {
        cards.map((val, index) => (
          <div key={index}>
            <FlashCard data={val} match={match} index={index}/>
          </div>
        ))
      }
      {/* <button onClick={getNewSet}>Dakuon</button> */}
    </div>
  );
}

export default Selection
