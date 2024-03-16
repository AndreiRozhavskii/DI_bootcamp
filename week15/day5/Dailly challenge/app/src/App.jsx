import React, { useState, useEffect } from 'react';
import './App.css'; 
import superheroes from './supreheroes.json'





function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
}
}

function App() {  
  const [cards, setCards] = useState(superheroes);
  const [currentScore, setCurrentScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

useEffect(() => {
  shuffleArray(cards);
  setCards([...cards]);
}, [currentScore]);

const handleCardClick = (id) => {
  if (clickedCards.includes(id)) {
    setCurrentScore(0);
    setClickedCards([]);
} else {
    setCurrentScore(currentScore + 1);
    setTopScore(Math.max(currentScore + 1, topScore));
    setClickedCards([...clickedCards, id]);
}
};

return (
<div className="App">
    <nav>
      <div>Current Score: {currentScore}</div>
      <div>Top Score: {topScore}</div>
    </nav>
  <div className="card-container">
    {cards.map((card) => (
    <div key={card.id} className="card" onClick={() => handleCardClick(card.id)}>
      <img src={card.image} alt="Superhero" />
    </div>
))} 
  </div>
</div>
);
}

export default App;
