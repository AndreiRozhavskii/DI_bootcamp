import React, { useRef, useState } from "react";

function CharacterCounter() {
    const inputRef = useRef(null);
    const [charCount, setCharCount] = useState(0);
  
    const handleInputChange = () => {
      const textLength = inputRef.current.value.length;
      setCharCount(textLength); 
    };
  
    return (
      <div>
        <h1>Character Counter</h1>
        <textarea
          ref={inputRef}
          onChange={handleInputChange}
          placeholder="Type something..."></textarea>
        <p>Character Count: {charCount}</p> 
      </div>
    );
  };

  export default CharacterCounter;