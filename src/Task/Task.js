import React from 'react';
import './Task.css';

function Task(props) {
    return (
        <div className="row mt-4">
            <div className="col">
                <div className="card shadow-sm task">
                    <div className="card-body">
                        {props.text}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Task;