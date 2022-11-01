import React from "react";
import CustomModal from "../../Component/CustomModal/CustomModal";
import { Typography, FormControl, TextField, Button } from "@mui/material";

export default function PurposeOfRegistration(props) {
  const { openModal, closeModal, title, fields, handleChange } = props;

  return (
    <CustomModal open={openModal} onClose={closeModal}>
      <Typography variant="h4" className="fw-semibold">
        {title}
      </Typography>
      <div className="form-create-edit-user mt-5">
        <FormControl fullWidth>          
          <TextField
            className="form-control"
            label="Purpose Of Registration ID"
            name="purposeofregistrationid"
            variant="standard"
            placeholder="Purpose Of Registration ID"
            value={fields.purposeofregistrationid}
            onChange={handleChange}
          />
          <TextField
            className="form-control mt-3"
            label="Purpose Of Registration"
            name="purposeofregistration"
            variant="standard"
            placeholder="Purpose Of Registration"
            required
            value={fields.purposeofregistration}
            onChange={handleChange}
          />
          <div className="mt-5">
            <Button
              type="button"
              name="submitted"
              color="primary"
              variant="contained"
              className="btn-save me-3"
            >
              Save
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
        </FormControl>
      </div>
    </CustomModal>
  );
}
