import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';

const AddModal = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <button type="button" onClick={handleOpen}>Click</button>
            <Modal open={open} onClose={handleClose}>Test Modal</Modal>
        </div>

    );
}

export default AddModal;