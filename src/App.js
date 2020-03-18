import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav/Nav'
import QuoteBox from './QuoteBox/QuoteBox'
import DatePeriod from './DatePeriod/DatePeriod'
import Task from './Task/Task'

function App() {
  return (
    <div className="App">
      <Nav / >
        <main className="container">
          <QuoteBox />
          <DatePeriod />
          <Task />

        </main>
    </div>
  );
}

export default App;
