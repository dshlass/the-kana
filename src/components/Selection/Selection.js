import React from 'react';
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
  return filteredCards
}

const sortSet = (cards, assign) => {
  let sortedSet = []
  for (let char of cards) {
    if (!sortedSet.includes(char[assign]) && char[assign] !== 'n') {
      sortedSet.push(char[assign])
    }
  }
  return sortedSet
}



  //randomizes the cards
  const randomizeCards = (arr) => {
    var currentIndex = arr.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
    while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }

  return arr
}




class Selection extends React.Component {

  state={
    row: [],
    column:[]
  }

  componentDidMount() {
    let cards = setLibrary(this.props.match)
    let row = sortSet(cards, 'row')
    let column = sortSet(cards, 'column')

    console.log(row)
    console.log(column)

    this.setState({row: row, column: column})
  }

  // updateCards = () => {
  //   let newCards = randomizeCards(this.state.cards)
  //   this.setState({cards: newCards})
  // }




  render () {
    const {row, column} = this.state
    const {match} = this.props

    return (
      <div >
        <h2>Rows</h2>
        {
          row.map((val, index) => (
            <div key={index}>
             <p className="card__symbol">{val}</p>
            </div>
          ))
        }
        <h2>Columns</h2>
        {
          column.map((val, index) => (
            <div key={index}>
             <p className="card__symbol">{val}</p>
            </div>
          ))
        }
        {/* <button onClick={this.updateCards}>Randomize</button> */}
      </div>
    );
  }
}

export default Selection
