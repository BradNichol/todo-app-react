import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav/Nav";
import QuoteBox from "./QuoteBox/QuoteBox";
import DatePeriod from "./DatePeriod/DatePeriod";
import Task from "./Task/Task";
import AddModal from "./AddModal/AddModal";

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

  const completeStrikethough = id => {
    const newTaskArr = tasks.map(task => {
      if (task.id === id) {
        if (task.completed) {
          task.completed = false;
        } else {
          task.completed = true;
        }
      }
      return task;
    });

    SetTasks(newTaskArr);
  };
  
  const taskCountFunc = () => {
    let count = 0;
    tasks.forEach(task => {
      if (!task.completed) {
        count++;
      }
    })
    console.log(count)
    return count;
  }
  
  return (
    <div className="App">
      <Nav taskCount={taskCountFunc()} />
      <main className="container">
        <QuoteBox />
        <DatePeriod title="TODAY" />
        {tasks.map(task => {
          if (task.dueDate === "2020-03-04") {
            return (
              <Task
                key={task.id}
                id={task.id}
                text={task.task}
                completed={task.completed}
                dueDate={task.dueDate}
                markCompleteFunc={completeStrikethough}
              />
            );
          }
        })}
        <DatePeriod title="TOMORROW" />
        <Task text="Meeting at 9am" />
        <Task text="send notes to team" />
        <AddModal />
      </main>
    </div>
  );
}

export default App;
