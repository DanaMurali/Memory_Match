import {useState} from 'react'
import './App.css';


//creating array of cards. Creating out of component as it will always remain constant. So we have 6 image objects within the array
const cardImages = [
  { "src": "/img/helmet-1.png" },
  { "src": "/img/potion-1.png" },
  { "src": "/img/ring-1.png" },
  { "src": "/img/scroll-1.png" },
  { "src": "/img/shield-1.png" },
  { "src": "/img/sword-1.png" },
]

function App() {

  //create state to store cards in for a particular game. We need a function to update them -> setCards. The initial value is going to be an empty array.

  const [cards, setCards] = useState([])

  //now creating a state for every turn the player takes, which increases each turn.

  const [turns, setTurns] = useState(0)

  //shuffle cards - duplicate each card once - as we need two of each for the game. Using sort method to randomise the order of cards. Apply random ID to each of cards to use later.

  const shuffleCards = () => {
    //... spread syntax to spread them in the array.
    const shuffledCards = [...cardImages, ...cardImages]
    //fire a function for each pair of items inside the array. If number is > 0 order of items is mixed up (+ve no.), but if number is < 0 order of items is the same (-ve no.).
    .sort(() => Math.random() - 0.5)
    //want to fire a function for each item in new sorted array. For each item we want to add on an ID property. {} - we are returning an object. End point we have a constant shuffledCards with an id property alongside the src associated with it.  
    .map((card) => ({...card, id: Math.random}))

  //passing in the shuffled cards inside array
  setCards(shuffledCards)
  setTurns(0)
  //every time we start a new game by clicking button we call function shuffleCards which will shuffle the cards, its going to set the shuffled cards to the shuffled cards constant. And it's going to set the turns to 0 each time.

  }

  console.log(cards, turns)

  return (
    <div className="App">
      <h1>Memory Matcher</h1>

      {/* linking our button in with the shuffle Cards function */}
      <button onClick={shuffleCards}>New Game</button>
      {/* creating a card grid */}
      

    </div>
  );
}

export default App;
