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
      if (task.task_id === id) {
        if (task.completed) {
          task.completed = 0;
        } else {
          task.completed = 1;
        }
        axios
          .put(
            `https://2ss5e0jzw2.execute-api.eu-west-2.amazonaws.com/dev/tasks/${id}`,
            {
              completed: task.completed,
            }
          )
          .then((response) => {
            console.log(response);
            setMessage("Task updated");
            setOpen(true);
          })
          .catch((err) => {
            console.log("Error updating", err);
          });
      }
      return task;
    });
    SetTasks(newTaskArr);
  };

  const addNewTask = (text, type, dueDate) => {
    // cpass object into axios post directly
    axios
      .post(
        "https://2ss5e0jzw2.execute-api.eu-west-2.amazonaws.com/dev/tasks",
        {
          task: text,
          type_id: type,
          due_date: dueDate,
        }
      )
      .then((response) => {
        const newTask = response.data;
        const allTasks = [...tasks, newTask];
        setMessage("Task created");
        setOpen(true);
        SetTasks(allTasks);
      })
      .catch((err) => {
        console.log("Error creating task", err);
      });
  };

  // function to count 'todays' count only, not all days
  const taskCountFunc = () => {
    let count = 0;
    tasks.forEach((task) => {
      if (!task.completed && task.due_date === todaysDate) {
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
  const todaysDate = format(new Date(), "yyyy-MM-dd'T'00:00:00.000") + "Z";

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
          if (task.due_date === todaysDate) {
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
          // display dates in future, but also older tasks that haven't been completed
          if (task.due_date > todaysDate || (task.due_date < todaysDate && task.completed === 0)) {
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
