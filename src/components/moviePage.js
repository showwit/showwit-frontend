import "./moviePage.css";
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
import AddIcon from "@mui/icons-material/Add";
import Search from "./Search";
import { useEffect, useState } from "react";
import HighQualityIcon from "@mui/icons-material/HighQuality";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import Loading from "./loading";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Player from "./player";

const MoviePage = () => {
  const history = useHistory();
  const { id } = useParams();
  const [movie, setMovie] = useState(false);
  const [movieData, setMovieData] = useState([]);
  const [movieCreds, setMovieCreds] = useState([]);
  const [style, useStyle] = useState({});
  const [videoPlayer, setVideoPlayer] = useState(false);
  console.log(id);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=6aab1858b44b398c6f7708edd4e9c9b6&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovieCreds(data.cast.slice(0, 4));
      });
  }, []);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=6aab1858b44b398c6f7708edd4e9c9b6&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovieData(data);
        setMovie(true);
      });
  }, []);
  const playButtonClicked = () => {
    history.push(`/player/movie/${movieData.id}/blob/6C033ffvvnoo`);
  };
  if (movie) {
    return (
      <div
        className="movie-page"
        style={{
          backgroundImage: `linear-gradient(to bottom, #000000c2, #000000b7),
    url("https://image.tmdb.org/t/p/original${movieData.backdrop_path}")`,
        }}
      >
        {/* {videoPlayer && <Player />} */}
        <div className="movie-back-button">
          <ArrowBackIcon
            fontSize="64px"
            className="back-icon"
            onClick={() => {
              history.go(-1);
            }}
          />
        </div>
        <div className="movie-page-content">
          <div className="movie__details__mov">
            <div className="movie_details_inside_mov">
              <h1>{movieData.title}</h1>
              <div className="movie_details_top_level">
                <p>{movieData.release_date.slice(0, 4)}</p>|<p>Comedy</p>|
                <p>{movieData.runtime}m</p>
              </div>
              <div className="imdb_rating">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
                  alt=""
                  className="imdb_logo"
                />
                <p className="imdb_rate">{movieData.vote_average}/10</p>
              </div>
              <p className="top_level_desc">{movieData.overview}</p>
              <div className="buttons-movie-page">
                {/* <button className="button">
              <PlayArrowIcon fontSize="48px" className="play__icons" />
              Warch Now
            </button>{" "} */}
                <button className="button button2" onClick={playButtonClicked}>
                  <PlayArrowIcon fontSize="48px" className="play__icons" />
                  Play
                </button>{" "}
                <button className="button button2 trailer-btn">
                  <PlayCircleFilledWhiteIcon
                    fontSize="48px"
                    className="play__icons"
                  />
                  Watch Trailer
                </button>{" "}
                <FavoriteIcon fontSize="48px" className="movie-heart-icon" />
              </div>
              <div className="available-in">
                <h3>Available in:</h3>
                <div className="available-in-content">
                  <span className="qualities">
                    <HighQualityIcon />
                    720p
                  </span>
                  <span className="qualities">
                    <HighQualityIcon /> 1080p
                  </span>
                </div>
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
          <div className="cast-section">
            <div className="cast-section-inside">
              <h1>Casting</h1>
              <div className="cast-content">
                <div className="cast-columns">
                  {movieCreds.slice(0, 2).map((el) => (
                    <div className="cast-prop">
                      <img
                        src={`https://image.tmdb.org/t/p/original${el.profile_path} `}
                        alt="
              "
                      />

                      <span>{el.original_name}</span>
                    </div>
                  ))}
                </div>
                <div className="cast-columns">
                  {movieCreds.slice(2, 4).map((el) => (
                    <div className="cast-prop">
                      <img
                        src={`https://image.tmdb.org/t/p/original${el.profile_path} `}
                        alt="
              "
                      />

                      <span>{el.original_name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
};

export default MoviePage;
