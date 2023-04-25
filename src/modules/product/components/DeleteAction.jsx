import React from "react";
import DeleteModal from "./DeleteModal";
import { IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function DeleteAction({id}) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Tooltip title="Delete" placement="top">
        <IconButton onClick = {handleOpen}  aria-label="Delete">
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <DeleteModal id={id} open={open}  onClose={handleClose}/>
    </div>
  );
}
