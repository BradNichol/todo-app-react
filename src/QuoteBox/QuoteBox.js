import React from "react";
import "./QuoteBox.css";

function QuoteBox() {
  
  const getQuote = () => {

    // fetch API is used to get data from URL resources
    fetch('https://quotes.rest/qod?language=en')
    //.then returns a promise and data can be chained to next .then. 
    .then((response) => {
      //returns data in JSON format
      return response.json();
    })
    .then((data) => {
      console.log(data.contents.quotes[0].quote);
    });
  }
  
  

  return (
    <div className="row">
      <div className="col mt-4">
        <div className="quoteBox">
          <p>
            "It does not matter how slowly you go as long as you do not stop."
          </p>
        </div>
      </div>
    </div>
  );
}

export default QuoteBox;
