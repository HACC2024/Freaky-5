import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  // Function to handle the click event
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      {/* Button with onClick event */}
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}

export default App;

let width = 0; // Starting width of the bar

function increaseSize() {
  if (width < 100) { // Limit the width to 100%
    width += 10; // Increase the width by 10%
    updateBar();
  }
}

function decreaseSize() {
  if (width > 0) { // Ensure width doesn't go below 0%
    width -= 10; // Decrease the width by 10%
    updateBar();
  }
}

function resetSize() {
  width = 0; // Reset width to 0%
  updateBar();
}

function updateBar() {
  const bar = document.getElementById('resizable-bar');
  bar.style.width = width + '%'; // Update the bar's width
  bar.innerText = width + '%'; // Display the percentage in the bar
}
