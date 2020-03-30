import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const AddModal = () => {
  const useStyles = makeStyles(theme => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    paper: {
      backgroundColor: "#ffffff",
      padding: theme.spacing(2, 4, 3),
      width: "80%"
    },
    fab: {
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    }
  }));

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <div>
      <Fab
        size="large"
        color="primary"
        aria-label="add"
        className={classes.fab}
        onClick={handleOpen}
      >
        <AddIcon />
      </Fab>

      <Modal open={open} className={classes.modal} onClose={handleClose}>
        <div className={classes.paper}>Test Modal</div>
      </Modal>
    </div>
  );
};

export default AddModal;
