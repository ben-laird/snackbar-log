import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { FC, useState } from "react";

export interface LoggerProps {
  handleSubmit: (message: string) => React.FormEventHandler<HTMLFormElement>;
}

const Logger: FC<LoggerProps> = ({ handleSubmit }) => {
  const [message, setMessage] = useState("");

  const handleInput: React.FormEventHandler<HTMLDivElement> = (event) => {
    const target = event.target as HTMLInputElement;
    setMessage(target.value);
  };

  return (
    <Box
      component="form"
      padding={2}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(message)}
    >
      <TextField
        label="Text to Log"
        helperText="Log some text to the Snackbar Console"
        variant="outlined"
        fullWidth
        multiline
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
