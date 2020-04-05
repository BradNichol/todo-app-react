import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import FormGroup from "@material-ui/core/FormGroup";

const AddModal = (props) => {
  const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: "#ffffff",
      padding: theme.spacing(2, 4, 3),
      width: "auto",
      [theme.breakpoints.up("lg")]: {
        width: "50%",
      },
    },
    fab: {
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    modalForm: {
      padding: 10,
    },
    modalButton: {
      marginTop: 40,
    },
  }));

  // state to control open / close of modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // state to control task input field
  const [taskText, setTaskText] = useState("");
  const handleTaskTextChange = (event) => setTaskText(event.target.value);

  // state to control date picker change
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => setSelectedDate(date);

  // state to control type select change
  const [type, setType] = useState("");
  const handleTypeChange = (event) => setType(event.target.value);

  const handleAddTask = () => {
    props.addNewTaskFunc(taskText, type, selectedDate);
    setTaskText("");
    setType();
    setSelectedDate(new Date());
    setOpen(false);
  };

  const classes = useStyles("");

  return (
    <div>
      <Fab
        size="large"
        color="primary"
        aria-label="add"
        className={classes.fab}
        onClick={handleOpen}
      >
        <AddIcon />
      </Fab>

      <Modal open={open} className={classes.modal} onClose={handleClose}>
        <div className={classes.paper}>
          <h3>Add A Task</h3>
          <form>
            <FormGroup className={classes.modalForm}>
              <TextField
                id="task"
                label="Task"
                value={taskText}
                onChange={handleTaskTextChange}
              />
              <InputLabel id="task-type">Task Type</InputLabel>
              <Select
                labelId="task-type"
                id="task-type-select"
                value={type}
                onChange={handleTypeChange}
              >
                <MenuItem value="Work">Work</MenuItem>
                <MenuItem value="Personal">Personal</MenuItem>
              </Select>

              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  value={selectedDate}
                  label="Due Date"
                  onChange={handleDateChange}
                />
              </MuiPickersUtilsProvider>
              <Button
                className={classes.modalButton}
                variant="contained"
                color="primary"
                onClick={handleAddTask}
              >
                Add Task
              </Button>
            </FormGroup>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AddModal;
