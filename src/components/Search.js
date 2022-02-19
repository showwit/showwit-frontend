import "./Search.css";
import CloseIcon from "@mui/icons-material/Close";
import { display } from "@mui/system";
import { useState } from "react";
import NetSlider from "netslider";
import SliderContainer from "./SliderContainer";
import data from "./data.json";
import SearchIcon from "@mui/icons-material/Search";
import Loading from "./loading";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const Search = ({ value }) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const searchClicked = (e) => {
    setLoading(true);
    let initData = [];
    e.preventDefault();
    if (searchValue == "") {
      alert("Please Enter Something in the search");
    } else {
      const searchURL = `https://api.themoviedb.org/3/search/multi?api_key=6aab1858b44b398c6f7708edd4e9c9b6&query=${searchValue}&page=1&include_adult=false`;
      fetch(searchURL)
        .then((response) => response.json())
        .then((data) => {
          data.results.forEach((element) => {
            if (element.poster_path != null) {
              initData.push(element);
            }
          });
          console.log(initData);
          setSearchData(initData);
          setLoading(false);
        });
    }
  };
  const moviePosterClicked = (e) => {
    const mediaType = e.target.getAttribute("data");
    const movieId = e.target.getAttribute("id");
    if (mediaType == "movie") {
      history.push(`/movie/${movieId}`);
    } else if (mediaType == "tv") {
      history.push(`/tv/${movieId}`);
    }
    console.log(mediaType);
    // history.push(`/movie/${movieId}`);
  };
  return (
    <div
      className="search-page"
      // style={value ? { left: "0px" } : { left: "-10000px" }}
    >
      {loading && <Loading />}
      <div className="search-inside">
        <div className="movie-back-button">
          <ArrowBackIcon
            fontSize="64px"
            className="back-icon"
            onClick={() => {
              history.go(-1);
            }}
          />
        </div>
        {/* <CloseIcon fontSize="48px" className="icon-search-page" /> */}
        <div className="search-page-content">
          <h1>Search here</h1>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search Titles, Movies, TV Shows"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
            <SearchIcon
              fontSize="64px"
              className="search-icon"
              onClick={searchClicked}
            />
          </div>
        </div>
        <div className="search-page-value">
          {searchData.map((val) => (
            <div className="movie-result-poster">
              <img
                key={val.id}
                id={val.id}
                data={val.media_type}
                src={`https://image.tmdb.org/t/p/original${val.poster_path}`}
                className="search-posters"
                onClick={moviePosterClicked}
              ></img>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
