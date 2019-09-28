import React from 'react';
import { Link } from 'react-router-dom'
import hiragana from '../../data/hiragana.js';
import katakana from '../../data/katakana';


//sets the library to Hiragana, Katakana or Random
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

//Sets the view to the table within the hiragana or katakana library
const filterCards = (library, match) => {
  let filteredCards = library.filter(set => set.table === match.params.selection)
  if (match.params.rowcol === 'row') {
    let filteredRow = filteredCards.filter(set => set.row === match.params.cards)
    return filteredRow
  }
  else if (match.params.rowcol === 'column') {
    let filteredColumn = filteredCards.filter(set => set.column === match.params.cards)
    return filteredColumn
  }
}

// const setCards = (cards, assign) => {
//   let sortedSet = []
//   for (let char of cards) {
//     if (!sortedSet.includes(char[assign]) && char[assign] !== 'n') {
//       sortedSet.push(char[assign])
//     }
//   }
//   return sortedSet
// }



//   //randomizes the cards
//   const randomizeCards = (arr) => {
//     var currentIndex = arr.length, temporaryValue, randomIndex;
//   // While there remain elements to shuffle...
//     while (0 !== currentIndex) {

//     // Pick a remaining element...
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;

//     // And swap it with the current element.
//     temporaryValue = arr[currentIndex];
//     arr[currentIndex] = arr[randomIndex];
//     arr[randomIndex] = temporaryValue;
//   }

//   return arr
// }




class Cards extends React.Component {

  state={
    cards: [],
  }

  componentDidMount() {
    let cards = setLibrary(this.props.match)
    this.setState({cards: cards})
  }






  render () {
    const {cards} = this.state
    const {match} = this.props

    return (
      <div className='cards'>
        {
          cards.map((val, index) => (
            <div key={index} className="selection__card">
              <Link to={`/${match.params.library}/${match.params.selection}/${val}`} className="selection__label">{val.symbol}</Link>
              <p>{val.letter}</p>
            </div>
          ))
        }
        {/* <button onClick={this.updateCards}>Randomize</button> */}
    </div>
    );
  }
}

export default Cards
