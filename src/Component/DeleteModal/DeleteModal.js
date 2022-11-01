import React from "react";
import CustomModal from "../CustomModal/CustomModal";
import { Typography, Button } from "@mui/material";

export default function DeleteModal(props) {
  const { openModal, closeModal, title } = props;

  return (
    <CustomModal open={openModal} onClose={closeModal}>
      <Typography className="fw-semibold" sx={{fontSize:17}}>
        {title}
      </Typography>
      <div className="form-create-edit-user mt-5">
        <Button
          type="button"
          name="submitted"
          color="error"
          variant="contained"
          className="btn-save me-3"
        >
          Delete
        </Button>
        <Button
          type="button"
          name="cancel"
          color="error"
          variant="outlined"
          className="btn-cancel"
          onClick={closeModal}
        >
          Cancel
        </Button>
      </div>
    </CustomModal>
  );
}
