import React, { useState } from "react";
import "./App.css";

function expensiveRandom(a: number) {
  let k = 0;
  for (let i = 0; i < 10_000_000; i++) k += Math.random();
  return k + a;
}

function App() {
  const [a, setA] = useState(1000);
  const [b, setB] = useState(1000);

  return (
    <div className="App">
      <div>
        <input
          value={a}
          onChange={(e) => setA(parseInt(e.target.value))}
          type="number"
        />
        {expensiveRandom(a)}
      </div>
      <div>
        <input
          value={b}
          onChange={(e) => setB(parseInt(e.target.value))}
          type="number"
        />
        {b}
      </div>
    </div>
  );
}

export default App;
