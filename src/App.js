import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Nav from "./Nav/Nav";
import QuoteBox from "./QuoteBox/QuoteBox";
import DatePeriod from "./DatePeriod/DatePeriod";
import Task from "./Task/Task";
import Modal from "./AddModal/Modal";
import { format } from "date-fns";
import Snackbar from "@material-ui/core/Snackbar";
import { makeStyles } from "@material-ui/core/styles";
import { SnackbarContent } from "@material-ui/core";

function App() {
  const [tasks, SetTasks] = useState([]);

  useEffect(() => {
    // fetch tasks from backend
    axios
      .get("https://2ss5e0jzw2.execute-api.eu-west-2.amazonaws.com/dev/tasks")
      .then((response) => {
        console.log(response.data);
        SetTasks(response.data);
      })
      .catch((err) => {});
  }, []);

  // state to control message box (snackbar)
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const handleClose = () => setOpen(false);

  // function strike through tasks when complete
  const completeStrikethough = (id) => {
    const newTaskArr = tasks.map((task) => {
      if (task.id === id) {
        if (task.completed) {
          task.completed = false;
        } else {
          setMessage("Task completed");
          setOpen(true);
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
    setMessage(`${newTaskObj.type} task created`);
    setOpen(true);
    SetTasks(allTasks);
  };

  // function to count 'todays' count only, not all days
  const taskCountFunc = () => {
    let count = 0;
    tasks.forEach((task) => {
      if (!task.completed && task.dueDate === todaysDate) {
        count++;
      }
    });
    return count;
  };
  // function to "delete" tasks. Shows filtered list exluding task with deleted id
  const deleteTask = (id) => {
    axios
      .delete(
        `https://2ss5e0jzw2.execute-api.eu-west-2.amazonaws.com/dev/tasks/${id}`
      )
      .then((response) => {
        const deletedTasks = tasks.filter((task) => {
          setMessage("Task deleted");
          setOpen(true);
          return task.task_id !== id;
        });
        SetTasks(deletedTasks);
      })
      .catch((err) => {
        console.log("API error", err);
      });
  };

  // get today's date dd/mm/yyyy
  const todaysDate = format(new Date(), "dd/MM/yyyy");

  // styles for components
  const useStyles = makeStyles((theme) => ({
    snackbar: {
      color: "green",
      [theme.breakpoints.down("xs")]: {
        bottom: 90,
      },
    },
    content: {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "black",
    },
  }));
  const classes = useStyles();

  return (
    <div className="App">
      <Nav taskCount={taskCountFunc()} />
      <main className="container">
        <QuoteBox />
        <DatePeriod title="TODAY" />
        {tasks.map((task) => {
          if (task.due_date === "2020-04-29T00:00:00.000Z") {
            return (
              <Task
                key={task.task_id}
                id={task.task_id}
                text={task.task}
                type={task.type_id}
                completed={task.completed}
                dueDate={task.due_date}
                markCompleteFunc={completeStrikethough}
                deleteTaskFunc={deleteTask}
              />
            );
          }
        })}
        <DatePeriod title="FUTURE" />
        {tasks.map((task) => {
          if (task.due_date > todaysDate) {
            return (
              <Task
                key={task.task_id}
                id={task.task_id}
                text={task.task}
                type={task.type_id}
                completed={task.completed}
                dueDate={task.due_date}
                markCompleteFunc={completeStrikethough}
                deleteTaskFunc={deleteTask}
              />
            );
          }
        })}
        <Modal addNewTaskFunc={addNewTask} />
        <Snackbar
          className={classes.snackbar}
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
        >
          <SnackbarContent className={classes.content} message={message} />
        </Snackbar>
      </main>
    </div>
  );
}

export default App;
