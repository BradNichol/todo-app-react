import React from 'react';
import Modal from '@material-ui/core/Modal';

const AddModal = () => {
    return (
        <div>
            <button type="button" onClick={handleOpen}>Click</button>
            <Modal open={open} onClose={handleClose}>Test Modal</Modal>
        </div>

    );
}

export default AddModal;