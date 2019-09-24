import React, { useState, useEffect } from 'react';
import axios from 'axios'
import FlashCard from '../FlashCard/FlashCard';


function Selection({match}) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
      const fetchData = async (match) => {
        const result = await axios(
          `http://localhost:8080/${match.params.character}`
        );
        setCards(result.data);
      };
      fetchData(match);
  }, []);

  const getNewSet = () => {
    console.log(match)
    axios.get(`http://localhost:8080/${match.params.character}/dakuon`)
    .then(resp => {
      console.log(resp)
      setCards(resp.data);
    })
  }

  return (
    <div className="library">
      {
        cards.map((val, index) => (
          <div className={`card${index+1}`} key={index}>
            <FlashCard data={val} match={match} index={index}/>
          </div>
        ))
      }
      <button onClick={getNewSet}>Dakuon</button>
    </div>
  );
}

export default Selection
