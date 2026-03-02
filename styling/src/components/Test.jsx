import React from 'react';

function App() {
  const [highlight, setHighlight] = React.useState();

  function handleClick(color) {
    setHighlight(color)
  }

  return (
    <div id="app">
      <h1 className={highlight && `highlight-${highlight}`}>CSS is great!</h1>
      <menu>
        <li>
          <button onClick={() => handleClick('green')}>Yes</button>
        </li>
        <li>
          <button onClick={() => handleClick('red')}>No</button>
        </li>
      </menu>
    </div>
  );
}

export default App;
