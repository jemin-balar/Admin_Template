import React from "react";
import CustomModal from "../../Component/CustomModal/CustomModal";
import { Typography, FormControl, TextField, Button } from "@mui/material";

export default function Religion(props) {
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
            label="Religion ID"
            name="religionid"
            variant="standard"
            placeholder="Religion ID"
            value={fields.religionid}
            onChange={handleChange}
          />
          <TextField
            className="form-control mt-3"
            label="Religion"
            name="religion"
            variant="standard"
            placeholder="Religion"
            value={fields.religion}
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
