import React, { useState } from 'react';

import './calculator.css';

const Calculator = () => {
  const [result, setResult] = useState('');

  const handleClick = (event) => {
    const buttonText = event.target.textContent;
    if (buttonText === '=') {
      setResult(eval(result));
    } else if (buttonText === 'C') {
      setResult('');
    } else {
      setResult(result + buttonText);
    }
  };

  return (
    <div className="calculator">
      <div className="display">{result}</div>
      <div className="buttons">
        <button onClick={handleClick}>7</button>
        <button onClick={handleClick}>8</button>
        <button onClick={handleClick}>9</button>
        <button onClick={handleClick}>+</button>
        <button onClick={handleClick}>4</button>
        <button onClick={handleClick}>5</button>
        <button onClick={handleClick}>6</button>
        <button onClick={handleClick}>-</button>
        <button onClick={handleClick}>1</button>
        <button onClick={handleClick}>2</button>
        <button onClick={handleClick}>3</button>
        <button onClick={handleClick}>*</button>
        <button onClick={handleClick}>.</button>
        <button onClick={handleClick}>0</button>
        <button onClick={handleClick}>=</button>
        <button onClick={handleClick}>C</button>
      </div>
    </div>
  );
};

export default Calculator;