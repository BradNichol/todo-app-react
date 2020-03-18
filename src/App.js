import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav/Nav'
import QuoteBox from './QuoteBox/QuoteBox'

function App() {
  return (
    <div className="App">
      <Nav / >
        <main className="container">
          <QuoteBox />

        </main>
    </div>
  );
}

export default App;
