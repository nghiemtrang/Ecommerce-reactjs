import { Box, CircularProgress } from "@mui/material";
import React from "react";

export default function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "30vh",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <CircularProgress />
    </Box>
  );
}
