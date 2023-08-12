import { Avatar } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const SearchUser = () => {
  const [userGit, setUserGit] = useState([]);

  const linkApi = "https://api.github.com/users/lilDre7";

  useEffect(() => {
    axios
      .get(linkApi)
      .then((res) => {
        setUserGit(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    axios
      .get(`https://api.github.com/users/${search}`)
      .then((res) => {
        setUserGit(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        e.target.reset();
      });
  };

  return (
    <>
      <form className="search__container" onSubmit={handleSubmit}>
        <i className="bx bx-search-alt"></i>
        <input
          autoFocus
          className="search__input"
          type="text"
          name="search"
          id="search"
          placeholder="Search"
        />
        <button className="search__button" type="submit">
          Search
        </button>
      </form>

      <section className="user__container">
        <div className="user__info">
          <div className="user__info__img">
            <Avatar
              sx={{ width: 100, height: 100 }}
              alt="Remy Sharp"
              src={userGit.avatar_url}
            />
          </div>

          <ul className="user_info__personal">
            <li className="user__info__"> {userGit.login} </li>
            <a href={userGit.html_url} className="user__info__">
              <li className="user__info__">{userGit.html_url}</li>
            </a>
            <li className="user__info__">{userGit.created_at}</li>
            <li className="user__info__">{userGit.updated_at}</li>
          </ul>
        </div>

        <div>
          <p>
            {userGit.bio
              ? userGit.bio
              : "No hay información sobre este usuario"}
          </p>
          <div>
            <p>Repositorios:</p>
            <span>
              {userGit.public_repos
                ? userGit.public_repos
                : "No hay repositorios"}
            </span>
            <p>Followers:</p>
            <span>
              {userGit.followers ? userGit.followers : "No hay followers"}
            </span>

            <p>Following:</p>
            <span>
              {userGit.following ? userGit.following : "No hay following"}
            </span>
          </div>
        </div>

        <div>
          <ul>
            <a href="">
              <li>
                <i className="bx bx-current-location"></i>
                <span>
                  {userGit.location ? userGit.location : "No hay información"}
                </span>
              </li>
            </a>
            <a href="">
              <li>
                <i className="bx bx-link"></i>
                <span>
                  {userGit.blog
                    ? userGit.blog
                    : "No hay información sobre este usuario"}
                </span>
              </li>
            </a>
            <a href="">
              <li>
                <i className="bx bxl-twitter"></i>
                <span>
                  {userGit.twitter_username
                    ? userGit.twitter_username
                    : "Not available"}
                </span>
              </li>
            </a>
            <a href={userGit.html_url} className="user__info__">
              <li className="user__info__">{userGit.html_url}</li>
            </a>
          </ul>
        </div>
      </section>
    </>
  );
};

export default SearchUser;
