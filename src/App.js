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
          <Task text="Call the buyer" />
          <Task text="Organise the shipment" />
          <Task text="Order stock" />
          <DatePeriod title="TOMORROW" />
          <Task text="Meeting at 9am" />
          <Task text="send notes to team" />
          <AddButton />

        </main>
    </div>
  );
}

export default App;
