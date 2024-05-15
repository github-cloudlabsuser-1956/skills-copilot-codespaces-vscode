import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
  const [markdownText, setMarkdownText] = useState('type markdown here');

  const handleTextChange = (event) => {
    setMarkdownText(event.target.value);
  };

  return (
    <div>
      <textarea 
        value={markdownText} 
        onChange={handleTextChange} 
      />
      <ReactMarkdown>
        {markdownText}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownEditor;

// take a sentence as input
  // reverse the input sentence
  // the start of the sentence must start with a capital
  // for javascript
  const reverseSentence = (sentence) => { const reversed = sentence.split('').reverse().join(''); return reversed.charAt(0).toUpperCase() + reversed.slice(1); };

  //const sentence = "Hello, world!"; const reversedSentence = reverseSentence(sentence); console.log(reversedSentence); // Output: !dlrow ,olleH

  const data = [
    [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 }
    ],
    [
      { name: 'Bob', age: 40 }
    ]
  ];

const names = data.flatMap(arr => arr.map(obj => obj.name));
console.log(names); // Output: ['John', 'Jane', 'Bob']