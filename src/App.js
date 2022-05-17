import React, { useState } from 'react';
import './App.css';

const qoutes = [
  "In the jungle",
  "We're no strangers to love",
  "We could all use a little change"
]

function App() {
  
  
  const [counter , setCounter] = useState(2);
  return (
    <div
      onClick={(event) => setCounter(counter + 1)}
      className="App"
    >
      {qoutes[counter % qoutes.length ]}
    </div> 
  );
}

export default App;
