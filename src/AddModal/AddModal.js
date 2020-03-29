import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const AddModal = () => {

    const useStyles = makeStyles((theme) => ({
        modal: {
            display: 'flex',
            padding: theme.spacing(2, 4, 3)
        },
    }));

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const classes = useStyles()

    return (
        <div>
            <button type="button" onClick={handleOpen}>Click</button>
            <Modal open={open} className={classes.modal} onClose={handleClose}><div>Test Modal</div></Modal>
        </div>

    );
}

export default AddModal;