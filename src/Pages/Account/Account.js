import React from "react";
import CustomModal from "../../Component/CustomModal/CustomModal";
import {
  Typography,
  FormControl,
  TextField,
  Button,
  Input,
} from "@mui/material";

export default function Account(props) {
  const {
    openModal,
    closeModal,
    title,
    fields,
    image,
    handleChange,
    handleFileUpload,
  } = props;

  return (
    <CustomModal open={openModal} onClose={closeModal}>
      <Typography variant="h4" className="fw-semibold">
        {title}
      </Typography>
      <div className="form-create-edit-user mt-5">
        <FormControl fullWidth>
          <TextField
            className="form-control"
            label="Account ID"
            name="accountid"
            variant="standard"
            placeholder="Account ID"
            value={fields.accountid}
            onChange={handleChange}
          />
          <TextField
            className="form-control mt-3"
            label="Account"
            name="account"
            variant="standard"
            placeholder="Account"
            value={fields.account}
            onChange={handleChange}
          />         
          <input
            accept="image/*"
            type="file"
            className="mt-4"
            name="image"
            // value={image}
            onChange={handleFileUpload}
          />
          {image && (
            <span className="mt-3">
              <img src={image} alt={image.name} height="100px" />
            </span>
          )}
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
