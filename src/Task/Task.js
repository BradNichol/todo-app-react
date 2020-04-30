import React from "react";
import "./Task.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

function Task(props) {
  const handleCompletedStrikethrough = () => {
    props.markCompleteFunc(props.id);
  };

  const handleDeleteTask = () => {
    props.deleteTaskFunc(props.id);
  };

  // obj to hold colour values per task type
  const typeTabColour = {
    1: "yellow", // work
    2: "green", // personal
  };

  const useStyles = makeStyles({
    root: {
      display: "flex",
      backgroundColor: "#224982",
      marginTop: 5,
    },
    content: {
      margin: "auto",
      color: "white",
    },
    typeTab: {
      width: 10,
      // colour pulled from obj
      backgroundColor: typeTabColour[props.type],
    },
  });
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <div className={classes.typeTab}>&nbsp;</div>
        <Checkbox color="default" onClick={handleCompletedStrikethrough} />
        <CardContent className={classes.content}>
          {props.completed === 1 ? <del>{props.text}</del> : props.text}
        </CardContent>
        <IconButton onClick={handleDeleteTask}>
          <DeleteIcon />
        </IconButton>
      </Card>
    </div>  
  );
}

export default Task;
