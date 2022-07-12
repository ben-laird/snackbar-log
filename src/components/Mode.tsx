import FormControlLabel from "@mui/material/FormControlLabel";
import React, { FC } from "react";
import MuiSwitch from "./MuiSwitch";

interface ModeProps {
  lightModeState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

const Mode: FC<ModeProps> = ({ lightModeState }) => {
  const [lightMode, setLightMode] = lightModeState;

  return (
    <FormControlLabel
      control={<MuiSwitch sx={{ margin: 1 }} defaultChecked />}
      label={`Switch to ${lightMode ? "Dark" : "Light"} Mode`}
      onChange={() => setLightMode(!lightMode)}
      sx={{ margin: 1, display: "flex", justifyContent: "center" }}
    />
  );
};

export default Mode;
