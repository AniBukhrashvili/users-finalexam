import { useState } from "react";
import { LanguageContext } from "../../LanguageContext";
import NavBar from "../../components/NavBar/NavBar";
import Search from "../../components/Search/Search";

export default function Home() {
  const [language, setLanguage] = useState("en");

  const value = {
    language,
    setLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      <NavBar />
      <Search />
    </LanguageContext.Provider>
  );
}
