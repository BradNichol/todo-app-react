import React, { useState } from "react";
import "./App.css";
import Nav from "./Nav/Nav";
import QuoteBox from "./QuoteBox/QuoteBox";
import DatePeriod from "./DatePeriod/DatePeriod";
import Task from "./Task/Task";
import AddModal from "./AddModal/AddModal";
import { format } from "date-fns";
import ActionMessage from "./ActionMessage";

function App() {
  const [tasks, SetTasks] = useState([
    {
      id: 1,
      task: "Organise a meeting",
      type: "work",
      dueDate: "2020-03-04",
      completed: false,
    },
    {
      id: 2,
      task: "Quarantine",
      type: "work",
      dueDate: "2020-03-04",
      completed: false,
    },
    {
      id: 3,
      task: "Buy milk",
      type: "personal",
      dueDate: "2020-03-04",
      completed: false,
    },
    {
      id: 4,
      task: "go for a run",
      type: "personal",
      dueDate: "2020-03-05",
      completed: false,
    },
  ]);

  // function strike through tasks when complete
  const completeStrikethough = (id) => {
    const newTaskArr = tasks.map((task) => {
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

  const addNewTask = (text, type, dueDate) => {
    // create a new object for the task
    const newTaskObj = {
      id: Math.random() * 1000, // this value will come from database soon
      task: text,
      type: type,
      dueDate: format(dueDate, "dd/MM/yyyy"), // uses date-fns format
      completed: false,
    };

    // create new array to combine current tasks with the new task obj
    const allTasks = [...tasks, newTaskObj];

    SetTasks(allTasks);
  };

  // function to count 'todays' count only, not all days
  const taskCountFunc = () => {
    let count = 0;
    tasks.forEach((task) => {
      if (!task.completed && task.dueDate === todaysDate) {
        // TODO: get todays date
        count++;
      }
    });
    return count;
  };
  // function to "delete" tasks. Shows filtered list exluding task with deleted id
  const deleteTask = (id) => {
    const deletedTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    SetTasks(deletedTasks);
  };

  // get today's date dd/mm/yyyy
  const todaysDate = format(new Date(), "dd/MM/yyyy");

  return (
    <div className="App">
      <Nav taskCount={taskCountFunc()} />
      <main className="container">
        <QuoteBox />
        <DatePeriod title="TODAY" />
        {tasks.map((task) => {
          if (task.dueDate === todaysDate) {
            return (
              <Task
                key={task.id}
                id={task.id}
                text={task.task}
                type={task.type}
                completed={task.completed}
                dueDate={task.dueDate}
                markCompleteFunc={completeStrikethough}
                deleteTaskFunc={deleteTask}
              />
            );
          }
        })}
        <DatePeriod title="FUTURE" />
        {tasks.map((task) => {
          if (task.dueDate > todaysDate) {
            return (
              <Task
                key={task.id}
                id={task.id}
                text={task.task}
                type={task.type}
                completed={task.completed}
                dueDate={task.dueDate}
                markCompleteFunc={completeStrikethough}
                deleteTaskFunc={deleteTask}
              />
            );
          }
        })}
        <AddModal addNewTaskFunc={addNewTask} />
        <ActionMessage />
      </main>
    </div>
  );
}

export default App;
