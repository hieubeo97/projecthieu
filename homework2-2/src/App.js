import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from "react";
export default function App() {
  const [value, setValue] = useState("");
  const [length, setValueLength] = useState(0);

  useEffect(() => {
    let timer1 = setTimeout(() => setValueLength(value.length), 5 * 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, [value]);
  return (
    <div className="App">
      <input value={value} onChange={(e) => setValue(e.target.value)}></input>
      <div>length: {length}</div>
    </div>
  );
}
