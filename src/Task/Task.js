import React from 'react';
import './Task.css';

function Task(props) {
    return (
        <div className="row ">
            <div className="col">
                <div className="card shadow-sm task">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-2">
                                <input className="form-check-input" type="checkbox" value="" />
                            </div>
                            <div className="col-10">
                                {props.text}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Task;