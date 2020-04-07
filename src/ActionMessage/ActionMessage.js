import React, { useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';


function ActionMessage () {

    const [open, setOpen] = useState(true);

    const actionMessage = (action) => {
        const message = {
          add: 'New task added',
          deleted: 'Task deleted'
        }
        return message[action];
      }
    
    actionMessage('add')

    return (
        <div>
            <Snackbar open={open} message="Action message">
                    
            </Snackbar>
        </div>
    )


};

export default ActionMessage;
