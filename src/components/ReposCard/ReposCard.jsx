import { Grid, Link, Typography } from "@mui/material";
import styles from "./ReposCard.module.scss";

export default function ReposCard({ name, repos_link }) {
  return (
    <Grid className={styles.ReposCard} justifyContent="center">
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
}
