import React, { useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';


function ActionMessage () {

    const [open, setOpen] = useState(true);


    return (
        <div>
            <Snackbar open={open} message="Action message">
                    
            </Snackbar>
        </div>
    )


};

export default ActionMessage;
