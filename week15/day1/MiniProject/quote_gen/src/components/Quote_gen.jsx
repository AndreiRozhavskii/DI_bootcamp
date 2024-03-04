import { useState, useEffect } from "react";
import quotes from '../quotes.js';

const Quote_gen = (props) =>{
  
  const [quote, setQuote] = useState(quotes[0]);
  const [shown, setShown] = useState(new Set());
  const [bgColor, setBgColor] = useState('#000000');
  const [quoteColor, setQuoteColor] = useState('#000000');
  const [btnColor, setBtnColor] = useState('#000000');

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

  const generateColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  }
  

  useEffect(() => {
 
    setBgColor(generateColor());
    setQuoteColor(generateColor());
    setBtnColor(generateColor());

 
  }, []);
  

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>

      <h1 style={{ color: quoteColor }}>{quote.quote}</h1>
      <p style={{ color: quoteColor }}>- {quote.author}</p>

    <button onClick={() => {
        generateQuote();
        setBgColor(generateColor());
        setQuoteColor(generateColor());
        setBtnColor(generateColor());
        }} style={{ backgroundColor: btnColor }}>New Quote</button>
    </div>
);
}

export default Quote_gen;
