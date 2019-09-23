import React, { useState, useEffect } from 'react';
import axios from 'axios'
import FlashCard from './FlashCard';

function Library() {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:8080/hg',
      );
      setCards(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="library">
      {
        cards.map((val, i) => (
          <div key={i}>
            <FlashCard data={val}/>
          </div>
        ))
      }
    </div>
  );
}

export default Library
