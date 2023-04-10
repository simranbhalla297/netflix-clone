import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoIcon from "@mui/icons-material/Info";
import axios from "axios";
import requests from "../request";
function Banner() {
  const isSmallerScreen = useMediaQuery("(max-width:600px)");

  const [bannermovie, setBannerMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setBannerMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(bannermovie);
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <Box sx={hero}>
      <Box
        component="img"
        sx={background_image}
        src={
          "https://image.tmdb.org/t/p/original/" + bannermovie?.backdrop_path
        }
        style={{ width: "100vw" }}
      />

      <Box sx={isSmallerScreen ? smallbannerContents : bannerContents}>
        {" "}
        <Typography sx={isSmallerScreen ? smallbannerText : bannerText}>
          {truncate(
            bannermovie?.title ||
              bannermovie?.name ||
              bannermovie?.original_name,
            20
          )}

          {/* {bannermovie?.title ||
            bannermovie?.name ||
            bannermovie?.original_name} */}
        </Typography>
        <Typography
          sx={isSmallerScreen ? smallbannerParagraph : bannerparagraph}
        >
          {truncate(bannermovie?.overview, 150)}
        </Typography>
        <Box sx={banner__buttons}>
          <button className="banner__button">
            <PlayArrowIcon style={{ fontSize: "20px" }} />
            <Typography style={{ marginLeft: "4px" }}> Play</Typography>
          </button>
          <button className="banner__button">
            <InfoIcon style={{ fontSize: "20px" }} />
            <Typography style={{ marginLeft: "4px" }}>My List</Typography>
          </button>
        </Box>
      </Box>
      <div className="banner__fadeBottom" />
    </Box>
  );
}

export default Banner;

const hero = { position: "relative", color: "white" };
const background_image = { filter: "brightness(60%)" };
const banner__buttons = {
  display: "flex",
  marginTop: "10px",
  ">:first-child": {
    background: "white",
    color: "black",
  },
};

const bannerContents = {
  position: "absolute",
  bottom: "35%",
  left: "4%",
  paddingTop: "140px",
  height: "190px",
  width: "36%",
  zIndex: 10,
  alignItem: "center",
};
const smallbannerContents = {
  position: "absolute",
  bottom: "10%",
  left: "4%",
  height: "190px",
  top: "22%",
  zIndex: 10,
};
const smallbannerText = {
  fontWeight: 800,
  fontSize: "14px",
  marginTop: "8px",
};
const bannerText = {
  fontWeight: 800,
  paddingBottom: "0.3rem",
  fontSize: "2rem",
};
const smallbannerParagraph = {
  paddingTop: "10px",
  fontSize: "10px",
  width: "45rem",
  maxWidth: "80vw",
  lineHeight: "normal",
  height: " 50px",

  textShadow: "2px 2px 4px rgba(0,0,0,.45)",
};
const bannerparagraph = {
  paddingTop: "1rem",
  fontSize: "18px",
  width: "45rem",
  maxWidth: "80vw",
  lineHeight: 1.3,
  height: " 80px",
};

const fade_button = {
  height: "7.5rem",
  backgroundImage:
    "linear-gradient(180 deg,transparent,rgba(37,37,37,0.61),#111)",
};
