import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import axios from "axios";
import useMediaQuery from "@mui/material/useMediaQuery";

import ListItem from "./ListItem";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import { Typography } from "@mui/material";

function Movies({ title, fetchUrl, isLargeRow }) {
  const isSmallerScreen = useMediaQuery("(max-width:600px)");

  console.log(isLargeRow);

  const [movies, setMovies] = useState([]);

  // const [trailer, setTrailerUrl] = useState("");
  const [slideNumber, setSlideNumber] = useState(0);
  const [ismove, setIsMove] = useState(false);

  const listRef = useRef();
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log(movies);
  const handleClick = (direction) => {
    setIsMove(true);

    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  return (
    <Box sx={row}>
      <Typography sx={textcolr}>{title}</Typography>
      <Box sx={wrapper}>
        {isSmallerScreen ? (
          <>
            {" "}
            <ChevronLeftIcon
              style={{
                fontSize: "17px",
                position: "absolute",
                top: 0,
                width: "20px",
                backgroundColor: "rgb(22, 22, 22, 0.5)",
                color: "white",
                margin: "auto",
                zIndex: 99,

                bottom: 0,
                left: 0,
                height: "100%",
                cursor: "pointer",
                display: !ismove && "none",
              }}
              onClick={() => handleClick("left")}
            />
          </>
        ) : (
          <>
            {" "}
            <ChevronLeftIcon
              style={{
                position: "absolute",
                top: 0,
                width: "50px",
                backgroundColor: "rgb(22, 22, 22, 0.5)",
                color: "white",
                margin: "auto",
                zIndex: 99,

                bottom: 0,
                left: 0,
                height: "100%",
                cursor: "pointer",
                display: !ismove && "none",
              }}
              onClick={() => handleClick("left")}
            />
          </>
        )}

        <Box
          sx={isSmallerScreen ? smallMovieContainer : MovieContainer}
          ref={listRef}
        >
          {movies.map((movie, index) => {
            return (
              <ListItem movie={movie} index={index} isLargeRow={isLargeRow} />
            );
          })}
        </Box>
        {isSmallerScreen ? (
          <>
            {" "}
            <ChevronRightIcon
              style={{
                fontSize: "17px",
                position: "absolute",
                top: 0,
                width: "20px",
                backgroundColor: "rgb(22, 22, 22, 0.5)",
                color: "white",
                margin: "auto",
                zIndex: 99,
                bottom: 0,
                right: 0,
                height: "100%",
                cursor: "pointer",
              }}
              onClick={() => handleClick("right")}
            />
          </>
        ) : (
          <>
            {" "}
            <ChevronRightIcon
              style={{
                position: "absolute",
                top: 0,
                width: "50px",
                backgroundColor: "rgb(22, 22, 22, 0.5)",
                color: "white",
                margin: "auto",
                zIndex: 99,
                bottom: 0,
                right: 0,
                height: "100%",
                cursor: "pointer",
              }}
              onClick={() => handleClick("right")}
            />
          </>
        )}
      </Box>
    </Box>
  );
}

export default Movies;

const row = {
  width: "100%",
  marginTop: "10px",
};
const wrapper = { position: "relative" };
const MovieContainer = {
  marginLeft: "50px",
  display: "flex",
  width: "max-content",
  marginTop: "10px",
  transform: "translateX(0px)",
  transition: "all 1s ease",
};
const smallMovieContainer = {
  marginLeft: "20px",
  display: "flex",
  width: "max-content",
  marginTop: "10px",
  transform: "translateX(0px)",
  transition: "all 1s ease",
};

const textcolr = {
  color: "white",
  fontSize: "16px",
  fontWeight: 500,
  marginLeft: "20px",
  marginTop: "10px",
};
