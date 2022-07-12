import Typography from "@mui/material/Typography";
import { FC, Fragment } from "react";

interface TitleProps {
  title: string;
  description?: string;
}

const Title: FC<TitleProps> = ({ title, description }) => (
  <Fragment>
    <Typography variant="h1" align="center" padding={3}>
      {title}
    </Typography>
    <Typography variant="h5" align="center">
      {description}
    </Typography>
  </Fragment>
);

export default Title;
