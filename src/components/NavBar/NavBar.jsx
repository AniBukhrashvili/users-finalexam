import {
  AppBar,
  Toolbar,
  Grid,
  Link,
  Box,
  Select,
  MenuItem,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useContext } from "react";
import { LanguageContext } from "../../LanguageContext";
import { translations } from "../../translations";

export default function NavBar() {
  const { language, setLanguage } = useContext(LanguageContext);
  const menu = translations[language].navbar;

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
            {menu.feedback}
          </Link>

          <Link
            href="/account"
            sx={{ textDecoration: "none", color: "white", fontSize: "14px" }}
          >
            {menu.account}
          </Link>

          <Link
            href="/user"
            sx={{ textDecoration: "none", color: "white", fontSize: "14px" }}
          >
            {menu.user}
          </Link>

          <Link
            href="https://github.com/about"
            sx={{ textDecoration: "none", color: "gray", fontSize: "14px" }}
          >
            {menu.aboutGithub}
          </Link>
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            color: "white",
          }}
        >
          <Select
            sx={{
              fontSize: "14px",
              marginLeft: "20px",
              color: "#fff",
              ".MuiOutlinedInput-notchedOutline": {
                border: 0,
              },
            }}
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <MenuItem
              sx={{
                fontSize: "14px",
              }}
              value="en"
            >
              EN
            </MenuItem>
            <MenuItem
              sx={{
                fontSize: "14px",
              }}
              value="ge"
            >
              GE
            </MenuItem>
          </Select>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
