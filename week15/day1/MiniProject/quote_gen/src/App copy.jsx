import { useState,useEffect } from 'react'
import './App.css'
import quotes from './quotes.js'

function App() {

const [quote, setQuote] = useState(quotes[0]);
const [shown, setShown] = useState(new Set());
const [colorQ, setColorQ] = useState('#000000');
const [colorA, setColorA] = useState('#000000');
const [colorB, setColorB] = useState('#000000');

const generateQuote = () => {

let remaining = quotes.filter(q => !shown.has(q));

if (remaining.length === 0) {
setShown(new Set());
remaining = [...quotes];
}

const randomIndex = Math.floor(Math.random() * remaining.length);

setQuote(remaining[randomIndex]);
setShown(shown.add(remaining[randomIndex]));
};


const generateColorQ = () => {
 
  const randomColorQ = '#' + Math.floor(Math.random() * 16777215).toString(16);
  setColorQ(randomColorQ);
  };

const generateColorA = () => {
 
  const randomColorA = '#' + Math.floor(Math.random() * 16777215).toString(16);
  setColorA(randomColorA);
  }; 

 const generateColorB = () => {
 
  const randomColorB = '#' + Math.floor(Math.random() * 16777215).toString(16);
  setColorB(randomColorB);
  }; 

useEffect(() => {
 
  generateQuote();
  generateColorQ();
  generateColorA();
  generateColorB();
 
  }, []);
  

  return (
    <div className="App" style={{ backgroundColor: 'whight' }}>
    
    <h1 style={{ color: colorQ }}>{quote.quote}</h1>
    <p style={{ color: colorA }}>- {quote.author}</p>

    <button onClick={() => {
    generateQuote();
    generateColorQ();
    generateColorA();
    }} style={{ backgroundColor: colorB }}>New Quote</button>
    </div>
    );
}


export default App
