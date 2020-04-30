import React, { useState } from "react";
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

const Form = (props) => {
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
    props.handleCloseFunc();
  };

  return (
    <form onSubmit={handleAddTask}>
        <FormGroup style={{padding:5}}>
        <TextField
            id="task"
            label="Task"
            value={taskText}
            onChange={handleTaskTextChange}
            required
        />
        <InputLabel id="task-type">Task Type</InputLabel>
        <Select
            labelId="task-type"
            id="task-type-select"
            value={type}
            onChange={handleTypeChange}
        >
            <MenuItem value="1">Work</MenuItem>
            <MenuItem value="2">Personal</MenuItem>
        </Select>

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
            value={selectedDate}
            label="Due Date"
            onChange={handleDateChange}
            />
        </MuiPickersUtilsProvider>
        <Button
            style={{marginTop: 40}}
            variant="contained"
            color="primary"
            type="submit"
        >
            Add Task
        </Button>
        </FormGroup>
  </form>
  )
};

export default Form;
