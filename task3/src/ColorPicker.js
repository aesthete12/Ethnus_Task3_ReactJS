import React, { useState } from 'react';

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState('');

  const handleColorChange = (color) => {
    setSelectedColor(color);
    document.body.style.backgroundColor = color;
  };

  return (
    <div>
      <h2>Select a Color</h2>
      <div>
        <button onClick={() => handleColorChange('red')}>Red</button>
        <button onClick={() => handleColorChange('green')}>Green</button>
        <button onClick={() => handleColorChange('blue')}>Blue</button>
        <button onClick={() => handleColorChange('yellow')}>Yellow</button>
        <button onClick={() => handleColorChange('orange')}>Orange</button>
        <button onClick={() => handleColorChange('purple')}>Purple</button>
        <button onClick={() => handleColorChange('pink')}>Pink</button>
        <button onClick={() => handleColorChange('brown')}>Brown</button>
        <button onClick={() => handleColorChange('cyan')}>Cyan</button>
        <button onClick={() => handleColorChange('teal')}>Teal</button>
      </div>
      <p>Selected Color: {selectedColor}</p>
    </div>
  );
};

export default ColorPicker;
