import React from "react";
import "./Task.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

function Task(props) {
  const handleCompletedStrikethrough = () => {
    props.markCompleteFunc(props.id);
  };

  const useStyles = makeStyles({
    root: {
      display: "flex",
      minWidth: "auto",
      backgroundColor: "#224982",
      marginTop: 5,
    },
    content: {
      margin: "auto",
      color: "white",
    },
  });
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root} boxShadow={3}>
        <CardContent className={classes.content}>
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            onClick={handleCompletedStrikethrough}
          />
          {props.completed === false ? props.text : <del>{props.text}</del>}
        </CardContent>
      </Card>
    </div>
  );
}

export default Task;
