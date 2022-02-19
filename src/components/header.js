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
import PersonIcon from "@mui/icons-material/Person";
import Search from "./Search";
import { useState } from "react";
import { useHistory } from "react-router-dom";
const Header = () => {
  const [search, setSearch] = useState(false);
  const history = useHistory();
  return (
    <div className="top__header">
      <div className="top_header_inside">
        {/* <div className="top_header_elements_search">
      <div className="search_feild">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search title, movies"
        />    
      </div>
    </div> */}
        <div
          className="top_header_elements"
          onClick={(e) => history.push("/search")}
        >
          <SearchIcon fontSize="48px" className="top__icons" />
          <span>Search</span>
        </div>
        <div className="top_header_elements">
          <FavoriteIcon fontSize="48px" className="top__icons" />
          <span>Favorites</span>
        </div>
        <div className="top_header_elements">
          <LocalMoviesIcon fontSize="48px" className="top__icons" />
          <span>Genres</span>
        </div>
        <Link to="/login" className="link_remover">
          <div className="top_header_elements">
            <PersonIcon fontSize="48px" className="top__icons" />
            <span>Login</span>
            {/* <Avatar
            sx={{ width: 60, height: 60 }}
            alt="Remy Sharp"
            src="https://i.pinimg.com/550x/f1/4e/49/f14e4900a0e245a157bb6ce73b8a06aa.jpg"
          />
          <KeyboardArrowDownIcon /> */}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
