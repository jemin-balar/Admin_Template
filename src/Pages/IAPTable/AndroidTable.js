import React from "react";
import CustomModal from "../../Component/CustomModal/CustomModal";
import {
  Typography,
  FormControl,
  TextField,
  Button,
  MenuItem,
  Input,
  InputLabel,
  InputAdornment,
} from "@mui/material";

export default function AndroidTable(props) {
  const { openModal, closeModal, title, fields, handleChange } = props;

  return (
    <CustomModal open={openModal} onClose={closeModal}>
      <Typography variant="h4" className="fw-semibold">
        {title}
      </Typography>
      <div className="form-create-edit-user mt-2">
        <FormControl fullWidth>
          <TextField
            className="form-control mt-5"
            select
            label="Type"
            name="producttype"
            value={fields.producttype}
            onChange={handleChange}
          >
            <MenuItem value={"Consumable"}>Consumable</MenuItem>
            <MenuItem value={"Non-consumable"}>Non-consumable</MenuItem>
            <MenuItem value={"Auto-renewable-subscriptions"}>
              Auto-renewable subscriptions
            </MenuItem>
            <MenuItem value={"Non-renewing-subscriptions"}>
              Non-renewing subscriptions
            </MenuItem>
          </TextField>
          <TextField
            className="form-control mt-3"
            label="Product Name"
            name="productname"
            variant="standard"
            placeholder="Product Name"
            required
            value={fields.productname}
            onChange={handleChange}
          />
          <TextField
            className="form-control mt-3"
            label="Product ID"
            name="productid"
            variant="standard"
            placeholder="Product ID"           
            value={fields.productid}
            onChange={handleChange}
          />
          <TextField
            type="number"
            className="form-control mt-3"
            label="Price"
            name="price"
            variant="standard"
            placeholder="$"
            required
            value={fields.price}
            onChange={handleChange}
          />
          <TextField
            className="form-control mt-5"
            select
            label="Status"
            name="status"
            value={fields.status}
            onChange={handleChange}
          >
            <MenuItem value={"Active"}>Active</MenuItem>
            <MenuItem value={"In-Active"}>In-Active</MenuItem>
          </TextField>
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
