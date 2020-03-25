import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav/Nav'
import QuoteBox from './QuoteBox/QuoteBox'
import DatePeriod from './DatePeriod/DatePeriod'
import Task from './Task/Task'
import AddButton from './Task/AddButton'


function App() {

  const [tasks, SetTasks] = useState([
    {
      id: 1,
      task: "Organise a meeting",
      type: "work",
      dueDate: "2020-03-04",
      completed: false
    },
    {
      id: 2,
      task: "Quarantine",
      type: "work",
      dueDate: "2020-03-04",
      completed: false
    },
    { 
      id: 3,
      task: "Buy milk",
      type: "personal",
      dueDate: "2020-03-04",
      completed: false
    }
  
  ]);

  return (
    <div className="App">
      <Nav / >
        <main className="container">
          <QuoteBox />
          <DatePeriod title="TODAY" />
          {tasks.map(task => {
            if(task.dueDate == "2020-03-04") {
            return (
              <Task
                key={task.id}
                text={task.task}
              />
            );
          }
          })}
          <DatePeriod title="TOMORROW" />
          <Task text="Meeting at 9am" />
          <Task text="send notes to team" />
          <AddButton />

        </main>
    </div>
  );
}

export default App;
