import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

function Nav() {
  const isSmallerScreen = useMediaQuery("(max-width:600px)");

  const [show, setShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else setShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    console.log(show);

    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <>
      {isSmallerScreen ? (
        <>
          {" "}
          <Box sx={show ? nav_contents : nav_black}>
            <Box
              component="img"
              sx={smallnav_logo}
              src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png"
              alt=""
            />
            <Box
              component="img"
              sx={smallnav_avtar}
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt=""
            />
          </Box>
        </>
      ) : (
        <>
          {" "}
          <Box sx={show ? nav_contents : nav_black}>
            <Box></Box>
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
        </>
      )}
    </>
  );
}

export default Nav;

const nav_contents = {
  display: "flex",
  background: "black",
  alignItem: "center",
  justifyContent: "space-between",
  position: "fixed",
  top: 0,
  width: "100%",
  height: "40px",
  padding: "5px",
  zIndex: 1,
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

const smallnav_logo = {
  position: "fixed",
  left: 0,
  width: "70px",
  cursor: "pointer",
  paddingLeft: "20px",
  height: "22px",
  objectFit: "contains",
};

const smallnav_avtar = {
  height: "22px",

  position: "fixed",
  right: "20px",
  width: "20px",

  cursor: "pointer",
};
