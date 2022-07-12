import { Box, Button, TextField } from "@mui/material";
import { useSnackbar } from "notistack";
import React from "react";
import { FC, useState } from "react";

const Logger: FC = () => {
  const [message, setMessage] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const handleInput: React.FormEventHandler<HTMLDivElement> = (event) => {
    const target = event.target as HTMLInputElement;
    setMessage(target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    enqueueSnackbar(message, {
      variant: "info",
      anchorOrigin: { vertical: "bottom", horizontal: "center" },
      autoHideDuration: 4000
    });
    setMessage("");
  };

  return (
    <Box
      component="form"
      padding={2}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        label="Text to Log"
        helperText="Log some text to the Snackbar Console"
        variant="outlined"
        fullWidth
        margin="dense"
        value={message}
        onInput={handleInput}
      />
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </Box>
  );
};

export default Logger;
