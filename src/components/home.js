import "./home.css";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Avatar from "@mui/material/Avatar";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import TextField from "@mui/material/TextField";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import Search from "./Search";
import { useState } from "react";
import Header from "./header";
const HomePage = () => {
  const [search, setSearch] = useState(false);
  return (
    <div className="home__page">
      <Header />
      <div className="movie__details">
        <div className="movie_details_inside">
          <h1>పుష్పా - The Rise</h1>
          <div className="movie_details_top_level">
            <p>2021</p>|<p>Action, Drama, Thriller</p>|<p>179m</p>
          </div>
          <div className="imdb_rating">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
              alt=""
              className="imdb_logo"
            />
            <p className="imdb_rate">7.6/10</p>
          </div>
          <p className="top_level_desc">
            Pushpa Raj is a coolie who rises in the world of red sandalwood
            smuggling. Along the way, he doesn’t shy from making an enemy or
            two.
          </p>
          <div className="buttons">
            {/* <button className="button">
              <PlayArrowIcon fontSize="48px" className="play__icons" />
              Warch Now
            </button>{" "} */}
            <Link to="/movie/690957" className="link_remover">
              <button className="button button2">
                <AddIcon fontSize="48px" className="play__icons" />
                More
              </button>{" "}
            </Link>
          </div>

          {/* <img
            src="https://image.tmdb.org/t/p/original///1D08zCXr1VVg1tu3hvHvmy0XCAu.jpg"
            alt=""
            className="movie-detail-sec"
          /> */}
          {/* <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
            alt=""
          /> */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
