import React from "react";
import "./QuoteBox.css";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";


function QuoteBox() {
  // fetch API is used to get data from URL resources
  fetch("https://quotes.rest/qod?language=en")
    //.then returns a promise and data can be chained to next .then.
    .then((response) => {
      //returns data in JSON format
      return response.json();
    })
    .then((data) => {
      const obj = data.contents.quotes[0];
      document.getElementById("quote").innerText = `"${obj.quote}"`;
      document.getElementById("author").innerText = ` - ${obj.author}`;
    });

  
  const useStyles = makeStyles(() => ({
    expansionpanel: {
      backgroundColor: '#2071C2'
    }
  
  }))

  const classes = useStyles();

  return (
    <ExpansionPanel className={classes.expansionpanel}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        Quote of the day
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div className="quoteBox">
          <p id="quote"></p>
          <p id="author"></p>
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

export default QuoteBox;
