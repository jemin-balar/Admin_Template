import React from "react";
import { Modal,Box } from "@mui/material";

const customStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  p: 4,
  boxShadow: "0 4px 24px 0 rgb(34 41 47 / 10%)"
};

export default function CustomModal(props) {
  return (
    <>
      <Modal
        {...props}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={customStyle}>{props.children}</Box>
      </Modal>
    </>
  );
}
