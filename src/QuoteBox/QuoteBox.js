import React from "react";
import "./QuoteBox.css";

function QuoteBox() {
  
  // fetch API is used to get data from URL resources
  fetch('https://quotes.rest/qod?language=en')
  //.then returns a promise and data can be chained to next .then. 
  .then((response) => {
    //returns data in JSON format
    return response.json();
  })
  .then((data) => {
    const obj = data.contents.quotes[0]
    document.getElementById('quote').innerText = obj.quote
    
  });

  

  return (
    <div className="row">
      <div className="col mt-4">
        <div className="quoteBox">
          <p id ="quote"></p>
        </div>
      </div>
    </div>
  );
}

export default QuoteBox;
