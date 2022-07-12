import {
  createTheme,
  CssBaseline,
  PaletteMode,
  Paper,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material";
import { FC, useState } from "react";
import Logger from "./components/Logger";
import Mode from "./components/Mode";
import Title from "./components/Title";

const makeTheme = (mode: PaletteMode) =>
  responsiveFontSizes(createTheme({ palette: { mode } }));

const chooseTheme = (lightMode: boolean) =>
  makeTheme(lightMode ? "light" : "dark");

const App: FC = () => {
  const lightModeState = useState(false);

  return (
    <ThemeProvider theme={chooseTheme(lightModeState[0])}>
      <CssBaseline />
      <Paper elevation={1} sx={{ margin: 3 }}>
        <Title
          title="Snackbar.log"
          description="Simple console viewer for the browser"
        />
        <Mode lightModeState={lightModeState} />
        <Logger callback={() => console.log("Button clicked!")} />
      </Paper>
    </ThemeProvider>
  );
};

export default App;
