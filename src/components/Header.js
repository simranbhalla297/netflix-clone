import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Box>
      <Box sx={isScrolled ? nav_contents : nav_black}>
        <Box
          component="img"
          sx={nav_logo}
          src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png"
          alt=""
        />
        <Box
          component="img"
          sx={nav_avtar}
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </Box>
    </Box>
  );
}

export default Header;
const nav_logo = {
  position: "fixed",
  left: 0,
  width: "80px",
  cursor: "pointer",
  paddingLeft: "20px",
  height: "32px",
  objectFit: "contains",
};

const nav_avtar = {
  height: "32px",

  position: "fixed",
  right: "20px",
  width: "30px",

  cursor: "pointer",
};

const nav_contents = {
  display: "flex",
  background: "yellow",
  alignItem: "center",
  justifyContent: "space-between",
  position: "fixed",
  top: 0,
  width: "100%",
  height: "40px",
  zIndex: 1,
  padding: "5px",
  transitionTimingFunction: "ease-in",
  transition: "all 0.5s",
};
const nav_black = {
  display: "flex",
  background: "transparent",
  justifyContent: "space-between",
  position: "fixed",
  top: 0,
  alignItem: "center",

  width: "100%",
  height: "40px",
  padding: "20px",
  zIndex: 1,
  transitionTimingFunction: "ease-in",
  transition: "all 0.5s",
};
const nav_avta = {};
