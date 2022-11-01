import React from "react";
import CustomModal from "../../Component/CustomModal/CustomModal";
import { Typography, FormControl, TextField, Button } from "@mui/material";

export default function MotherTongue(props) {
  const { openModal, closeModal, title, fields, handleChange, motherTongueError, handleSubmit } = props;

  return (
    <CustomModal open={openModal} onClose={closeModal}>
      <Typography variant="h4" className="fw-semibold">
        {title}
      </Typography>
      <div className="form-create-edit-user mt-5">
        <FormControl fullWidth>
          <TextField
            className="form-control"
            label="Mother Tongue ID"
            name="mothertongueid"
            variant="standard"
            placeholder="Mother Tongue ID"
            value={fields.mothertongueid}
            onChange={handleChange}                                 
          />
          <TextField
            className="form-control mt-3"
            label="Mother Tongue"
            name="mothertongue"
            variant="standard"
            placeholder="Mother Tongue"
            value={fields.mothertongue}
            onChange={handleChange}
            required           
            error={!!motherTongueError}
            helperText={motherTongueError}
          />         
          <div className="mt-5">
            <Button
              type="button"
              name="submitted"
              color="primary"
              variant="contained"
              className="btn-save me-3"
              onClick={handleSubmit}
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
