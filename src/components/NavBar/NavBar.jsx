import { AppBar, Toolbar, Grid, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const NavBar = () => {
  return (
    <AppBar component="nav" sx={{ backgroundColor: "#24292f" }}>
      <Toolbar>
        <Link
          href="/"
          sx={{ textDecoration: "none", color: "white", fontSize: "14px" }}
        >
          <GitHubIcon />
        </Link>
        <Grid container justifyContent="end">
          <Link
            width="7%"
            href="https://github.com/about"
            textAlign="right"
            sx={{ textDecoration: "none", color: "white", fontSize: "14px" }}
          >
            About GitHub
          </Link>

          <Link
            width="7%"
            textAlign="right"
            sx={{ textDecoration: "none", color: "white", fontSize: "14px" }}
          >
            Feedback
          </Link>

          <Link
            width="7%"
            textAlign="right"
            sx={{ textDecoration: "none", color: "white", fontSize: "14px" }}
          >
            Account
          </Link>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
