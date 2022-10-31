import React from "react";
import CustomModal from "../../Component/CustomModal/CustomModal";
import { Typography, FormControl, TextField, Button } from "@mui/material";

export default function Occupation(props) {
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
            label="Occupation ID"
            name="occupationid"
            variant="standard"
            placeholder="Occupation ID"
            value={fields.occupationid}
            onChange={handleChange}
          />
          <TextField
            className="form-control mt-3"
            label="Occupation"
            name="occupation"
            variant="standard"
            placeholder="Occupation"
            value={fields.occupation}
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
