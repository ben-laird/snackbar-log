import { createTheme, CssBaseline, Paper, ThemeProvider } from "@mui/material";
import { FC, useState } from "react";
import Logger from "./components/Logger";
import Mode from "./components/Mode";
import Title from "./components/Title";

const lightTheme = createTheme({ palette: { mode: "light" } });
const darkTheme = createTheme({ palette: { mode: "dark" } });

const chooseTheme = (lightMode: boolean) =>
  lightMode ? lightTheme : darkTheme;

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
