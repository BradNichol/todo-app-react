import React from "react";
import "./Task.css";

function Task(props) {
  const handleCompletedStrikethrough = () => {
    props.markCompleteFunc(props.id);
  };

  return (
    <div className="row ">
      <div className="col">
        <div className="card shadow-sm task">
          <div className="card-body">
            <div className="row">
              <div className="col-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  onClick={handleCompletedStrikethrough}
                />
              </div>
              <div className="col-10">
                {props.completed === false ? (props.text) : ( <del>{props.text}</del>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;
