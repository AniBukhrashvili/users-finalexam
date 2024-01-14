import { Grid, Link, Typography } from "@mui/material";
import styles from "./ReposCard.module.scss";

const ReposCard = ({ name, repos_link }) => {
  return (
    <Grid
      className={styles.ReposCard}
      container
      justifyContent="center"
      width="60%"
    >
      <Typography sx={{ color: "#24292f" }}>Repository Name: {name}</Typography>
      <hr />
      <Link
        target="_blank"
        href={repos_link}
        sx={{ textDecoration: "none", color: "#0000EE", cursor: "pointer" }}
      >
        {repos_link}
      </Link>
    </Grid>
  );
};

export default ReposCard;
