import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

const AddModal = (props) => {
  const useStyles = makeStyles(theme => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    paper: {
      backgroundColor: "#ffffff",
      padding: theme.spacing(2, 4, 3),
      width: "80%"
    },
    fab: {
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    }
  }));

  // state to control open / close of modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // state to control date picker change
  const [selectedDate, setSelectedDate] = useState();
  const handleDateChange = date => setSelectedDate(date);

  // state to control type select change
  const [type, setType] = useState();
  const handleTypeChange = event => setType(event.target.value)

  const handleAddTask = () => props.addNewTaskFunc();

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
          <form>
            <h3>Add A Task</h3>
            <TextField id="task" label="Task" />
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
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AddModal;
