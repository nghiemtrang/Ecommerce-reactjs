import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query";
import supabase from "../../../config/supabase";

export default function DeleteModal({ open, onClose, id }) {
  const queryClient =useQueryClient()
  const deleteProductMutation = useMutation({
    mutationFn: () => supabase.from("product").delete().eq("id", id),
    onSuccess: () => {
      onClose(),
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Use Google's location service?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Do you really wan to delete this product? This process cannot be
          undone.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => deleteProductMutation.mutate()}>Delete</Button>
        <Button onClick={onClose} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
}
