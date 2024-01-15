import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { LanguageContext } from "../../LanguageContext";
import NavBar from "../../components/NavBar/NavBar";

export default function User() {
  const [searchedValue, setSearchedValue] = useState("");
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const value = localStorage.getItem("searchedValue");
    if (value) {
      setSearchedValue(value);
    }
  }, []);

  const value = {
    language,
    setLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      <NavBar />
      <Typography marginTop="100px" padding="0 24px" variant="h5">
        User
      </Typography>
      <Typography variant="h6" marginTop="30px" padding="0 24px" color="red">
        Your last searched user is: {searchedValue}
      </Typography>
    </LanguageContext.Provider>
  );
}
