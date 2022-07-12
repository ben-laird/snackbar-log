import {
  createTheme,
  CssBaseline,
  PaletteMode,
  Paper,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material";
import { FC, useState } from "react";
import Logger, { LoggerProps } from "./components/Logger";
import Mode from "./components/Mode";
import Title from "./components/Title";

const makeTheme = (mode: PaletteMode) =>
  responsiveFontSizes(createTheme({ palette: { mode } }));

const chooseTheme = (lightMode: boolean) =>
  makeTheme(lightMode ? "light" : "dark");

const App: FC = () => {
  const lightModeState = useState(false);

  const handleSubmit: LoggerProps["handleSubmit"] = (message) => (event) => {
    event.preventDefault();
    console.log(`Button clicked! Value: ${message}`);
  };

  return (
    <ThemeProvider theme={chooseTheme(lightModeState[0])}>
      <CssBaseline />
      <Paper elevation={1} sx={{ margin: 3 }}>
        <Title
          title="Snackbar.log"
          description="Simple console viewer for the browser"
        />
        <Mode lightModeState={lightModeState} />
        <Logger handleSubmit={handleSubmit} />
      </Paper>
    </ThemeProvider>
  );
};

export default App;
