import React from 'react';
import './Task.css';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';



function AddButton() {
    return(
        
        <Fab position="left-top" size="large" color="primary" aria-label="add">
            <AddIcon />
        </Fab>
        
    
    );
}

export default AddButton;