import React, { useState } from "react";
import Box from "@mui/material/Box";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import AddIcon from "@mui/icons-material/Add";
import { Hidden } from "@mui/material";
const baseUrl = "https://image.tmdb.org/t/p/original";

function ListItem({ movie, index, isLargeRow }) {
  console.log(isLargeRow);
  const [isHovered, setIsHovered] = useState(false);
  const movietrailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <>
      {isLargeRow ? (
        <>
          <div
            style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
            className="listItemContainerLarge"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img src={`${baseUrl}${movie.poster_path}`} alt="" />
          </div>
        </>
      ) : (
        <>
          <div
            style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
            className="listItemContainer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img src={`${baseUrl}${movie.backdrop_path}`} alt="" />

            {isHovered && (
              <>
                <video src={movietrailer} autoPlay={true} loop />

                <div className="itemInfo">
                  <div className="icons">
                    <PlayArrowIcon className="icon" />
                    <ThumbUpIcon className="icon" />
                    <AddIcon className="icon" />
                  </div>
                  <div className="itemInfoTop">
                    <span>{movie.popularity}</span>
                    <span className="limit">{movie.vote_count}</span>
                    <span>{movie.release_date}</span>
                  </div>
                  <div className="desc">{truncate(movie?.overview, 90)}</div>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default ListItem;
