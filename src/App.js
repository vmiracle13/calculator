import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [a, setA] = useState();
  const [b, setB] = useState();
  const [result, setResult] = useState();

  const setNumber = (number) => {
    if (a) {
      setB(number);
    } else {
      setA(number);
    }
  };
  const calculate = () => {
    setResult(a + b);
    setA();
    setB();
  };
  const reset = () => {
    setA(); setB(); setResult();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <main>
        {[...Array(10).keys()].map((number) => (
          <button onClick={() => setNumber(number)} key={number}>{number}</button>
        ))}

        <div>
          <button type="button">+</button>
          <button type="button" onClick={calculate}>=</button>
        </div>

        <p style={{ fontSize: 30, color: "green" }}>result = {result}</p>

        <button type="button" onClick={reset}>Reset</button>
      </main>
    </div>
  );
}

export default App;
