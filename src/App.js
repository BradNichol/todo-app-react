import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav/Nav'
import QuoteBox from './QuoteBox/QuoteBox'
import DatePeriod from './DatePeriod/DatePeriod'
import Task from './Task/Task'
import AddButton from './Task/AddButton'

function App() {
  return (
    <div className="App">
      <Nav / >
        <main className="container">
          <QuoteBox />
          <DatePeriod title="TODAY" />
          <Task text="Complete proposal" />
          <DatePeriod title="TOMORROW" />
          <AddButton />

        </main>
    </div>
  );
}

export default App;
