import logo from './logo.svg';
import './App.css';
import React from 'react'
import Header from './Header';
import styles from './Test.module.css'

const styleH1 ={
  backgroundColor:'blue'
}

function App() {

  return (
      <>
        <h1 style={{ backgroundColor:'red' }}>1</h1>
        <h1 className={styles.Test}>2</h1>
      </>
  );
}

export default App;
