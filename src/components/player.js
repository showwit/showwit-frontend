import "./player.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import VideoPlayer from "react-video-js-player";
import { useState } from "react";
import OtpInput from "react-otp-input";

const Player = () => {
  const history = useHistory();
  const { media, id, season, episode } = useParams();
  const [url, setUrl] = useState();
  console.log(media, id);
  const vidSrc = "";
  if (media == "tv") {
    return (
      <div className="video-player">
        <div className="video-player-inside">
          <div className="player-back-button">
            <ArrowBackIcon
              fontSize="64px"
              className="back-icon"
              onClick={() => {
                history.go(-1);
              }}
            />
          </div>

          <iframe
            src={`https://www.2embed.ru/embed/tmdb/tv?id=${id}&s=${season}&e=${episode}`}
            className="video-content"
            frameborder="0"
            allowfullscreen="allowfullscreen"
          ></iframe>
        </div>
      </div>
    );
  } else {
    return (
      <div className="video-player">
        <div className="video-player-inside">
          <div className="player-back-button">
            <ArrowBackIcon
              fontSize="64px"
              className="back-icon"
              onClick={() => {
                history.go(-1);
              }}
            />
          </div>

          <iframe
            src={`https://www.2embed.ru/embed/tmdb/movie?id=${id}`}
            className="video-content"
            frameborder="0"
            allowfullscreen="allowfullscreen"
          ></iframe>
          {/* <iframe
            src={`https://www.2embed.ru/embed/tmdb/tv?id=${id}&s=${season}&e=${episode}`}
            className="video-content"
            frameborder="0"
          ></iframe> */}
        </div>
      </div>
    );
  }
};

export default Player;
