import React from 'react';
import './Task.css'

function AddButton() {
    return(
        <div className="row mt-4">
            <div className="col">
                <button className="addButton" type="submit">+</button>
            </div>
        </div>
    );
}

export default AddButton;