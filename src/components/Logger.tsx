import { Box, Button, TextField } from "@mui/material";
import { FC } from "react";

interface LoggerProps {
  callback: () => void;
}

const Logger: FC<LoggerProps> = ({ callback }) => (
  <Box
    component="form"
    padding={2}
    noValidate
    autoComplete="off"
    onSubmit={callback}
  >
    <TextField
      label="Text to Log"
      helperText="Log some text to the Snackbar Console"
      variant="outlined"
      fullWidth
      multiline
      margin="dense"
    />
    <Button onClick={callback} variant="contained">
      Submit
    </Button>
  </Box>
);

export default Logger;
