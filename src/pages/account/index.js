import { useState } from "react";
import { Typography } from "@mui/material";
import { LanguageContext } from "../../LanguageContext";
import NavBar from "../../components/NavBar/NavBar";

export default function Account() {
  const [language, setLanguage] = useState("en");

  const value = {
    language,
    setLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      <NavBar />
      <Typography marginTop="100px" padding="0 24px" variant="h5">
        Account
      </Typography>
    </LanguageContext.Provider>
  );
}
