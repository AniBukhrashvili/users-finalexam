import { Grid, Link, Typography } from "@mui/material";
import styles from "./Card.module.scss";

export default function Card({ login, avatar_url, github_link }) {
  return (
    <Grid className={styles.Card}>
      <Grid>
        <img className={styles.Card__Img} src={avatar_url} alt="" />
      </Grid>
      <Grid container justifyContent="center">
        <Typography sx={{ marginRight: "50px" }}>UserName: {login}</Typography>
        <Link
          target="_blank"
          href={github_link}
          sx={{
            textDecoration: "none",
            cursor: "pointer",
            color: "#848094",
          }}
        >
          Visit GitHub
        </Link>
      </Grid>
    </Grid>
  );
}
