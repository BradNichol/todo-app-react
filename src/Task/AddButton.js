import React from 'react';
import './Task.css';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';



function AddButton() {

    const useStyles = makeStyles((button) => ({
        fab: {
          position: 'fixed',
          bottom: button.spacing(2),
          right: button.spacing(2),
        },
      }));
    
    const classes = useStyles();
    
    return(
        
        <Fab size="large" color="primary" aria-label="add" className={classes.fab}>
            <AddIcon />
        </Fab>
        
    
    );
}

export default AddButton;