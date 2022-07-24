import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from "react";
export default function App() {
  const [toTop, setToTop] = useState(false);
  const [hideToTop, setHideToTop] = useState(false);
  const content="Hieu beo"
  const list = []
  for(let i=1;i<100;i++)
  {
    list.push(content)
  }
  useEffect(() => {
    console.log(window.pageYOffset);
    document.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        setHideToTop(true);
      } else setHideToTop(false);
    });
  });
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [toTop]);
  return (
    <div className="App">
      {hideToTop && (
        <button
          style={{
            position: "fixed",
            right: "5px",
            bottom: "50px",
            backgroundColor: "red",
            color: "#fff"
          }}
          onClick={() => setToTop(!toTop)}
        >
          top
        </button>
      )}
      <div >
        {list.map(e => <div>{e}</div>)}
      </div>
    </div>
  );
}