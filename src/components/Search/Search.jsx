import { useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";

import Card from "../Card/Card";
import Loading from "../Loading/Loading";
import ReposCard from "../ReposCard/ReposCard";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [userData, setUserData] = useState([]);
  const [userRepos, setUserRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUsers = async (username) => {
    setIsLoading(true);
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    setUserData(data);
    setIsLoading(false);
  };

  const fetchRepos = async (username) => {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`
    );
    const data = await response.json();
    setUserRepos(data);
  };

  const handleClick = () => {
    fetchUsers(inputValue);
    fetchRepos(inputValue);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <TextField
        label="Enter Username"
        variant="standard"
        onChange={handleInputChange}
        sx={{ marginTop: "100px", width: "50%" }}
      />
      <Button
        type="button"
        onClick={handleClick}
        sx={{ marginTop: "120px", marginLeft: "10px", color: "#24292f" }}
      >
        Search
      </Button>
      <Grid>
        {isLoading ? (
          <Loading />
        ) : userData && userData.login ? (
          <>
            <Card
              login={userData.login}
              avatar_url={userData.avatar_url}
              github_link={userData.html_url}
            />
            {userRepos.length > 0 ? (
              <Grid>
                <Typography variant="h6" fontStyle="italic" marginTop="20px">
                  Public Repositories:
                </Typography>
                {userRepos.map((repo) => (
                  <Grid key={repo.id}>
                    <ReposCard name={repo.name} repos_link={repo.html_url} />
                  </Grid>
                ))}
              </Grid>
            ) : (
              <div className="helper_text">No repositories found</div>
            )}
          </>
        ) : (
          <div className="helper_text">No user found</div>
        )}
      </Grid>
    </>
  );
};

export default Search;
