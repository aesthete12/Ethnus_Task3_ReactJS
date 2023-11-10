import React, { useState } from 'react';

const ResponsiveParagraphWordCounter = () => {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleTextChange = (event) => {
    const newText = event.target.value;
    setText(newText);

    const newWordCount = newText.split(' ').filter((word) => word.length > 0).length;
    setWordCount(newWordCount);
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleTextChange}
        style={{ width: '100%', height: '200px' }}
      />
      <p>Word Count: {wordCount}</p>
    </div>
  );
};

export default ResponsiveParagraphWordCounter;