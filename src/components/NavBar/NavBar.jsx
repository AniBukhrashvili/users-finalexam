import { AppBar, Toolbar, Grid, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function NavBar() {
  return (
    <AppBar component="nav" sx={{ backgroundColor: "#24292f" }}>
      <Toolbar>
        <Link
          href="/"
          sx={{ textDecoration: "none", color: "white", fontSize: "14px" }}
        >
          <GitHubIcon />
        </Link>
        <Grid container justifyContent="end" gap="12px">
          <Link
            href="/feedback"
            sx={{ textDecoration: "none", color: "white", fontSize: "14px" }}
          >
            Feedback
          </Link>

          <Link
            href="/account"
            sx={{ textDecoration: "none", color: "white", fontSize: "14px" }}
          >
            Account
          </Link>

          <Link
            href="/user"
            sx={{ textDecoration: "none", color: "white", fontSize: "14px" }}
          >
            User
          </Link>

          <Link
            href="https://github.com/about"
            sx={{ textDecoration: "none", color: "gray", fontSize: "14px" }}
          >
            About GitHub
          </Link>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
