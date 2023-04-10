import { useState } from "react";
import { Box, Typography } from "@mui/material";

import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/theme";
import "./App.css";
import useMediaQuery from "@mui/material/useMediaQuery";

import Nav from "./components/Nav";
import Grid from "@mui/material/Grid";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function App() {
  const isSmallerScreen = useMediaQuery("(max-width:600px)");

  const [freetrial, setFreeTrial] = useState(false);

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        {freetrial ? (
          <Home />
        ) : (
          <>
            {" "}
            <Box sx={hero}>
              <Nav />
              <Box
                component="img"
                sx={background_image}
                src={"https://i.ibb.co/vXqDmnh/background.jpg"}
                style={{
                  objectFit: "cover",
                }}
              />{" "}
              <Box
                sx={isSmallerScreen ? smallshowcasewrapper : showcasewrapper}
              >
                <Typography
                  sx={isSmallerScreen ? smallshowCaseHeading : showCaseHeading}
                >
                  See what's next.
                </Typography>
                <Typography
                  sx={isSmallerScreen ? smallshowCaseTitle : showCaseTitle}
                >
                  WATCH ANYWHERE. CANCEL ANYTIME.
                </Typography>
                <Typography
                  sx={isSmallerScreen ? smallshowCasepara : showCasepara}
                >
                  JOIN FREE FOR A MONTH
                </Typography>{" "}
                <button onClick={() => setFreeTrial(true)} className="startBtn">
                  <h2>Try 30 days free </h2>
                  <ChevronRightIcon
                    style={{
                      fontSize: "30px",
                      marginLeft: "3px",
                      fontWeight: "bold",
                    }}
                  />
                </button>
              </Box>
              <Box sx={section}>
                <Box style={{ background: "black", marginTop: "10px" }}>
                  <Grid container direction="row" sx={sectionContainer}>
                    <Grid item md={6}>
                      <Box sx={sectionContent}>
                        <Typography sx={title}>Enjoy on your TV</Typography>{" "}
                        <Typography sx={paragraph}>
                          {" "}
                          Watch on smart TVs, PlayStation, Xbox, Chromecast,
                          Apple TV, Blu-ray players and more.
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item container md={6} justifyContent="flex-end">
                      {" "}
                      <img
                        src={process.env.PUBLIC_URL + "/images/part1.png"}
                        alt=""
                        style={{ width: "350px", height: "300px" }}
                      />
                    </Grid>
                  </Grid>
                </Box>
                <Box style={{ background: "black", marginTop: "10px" }}>
                  <Grid container direction="row" sx={sectionContainer}>
                    <Grid item md={6}>
                      {" "}
                      <img
                        src={process.env.PUBLIC_URL + "/images/part2.jpg"}
                        alt=""
                        style={{ width: "350px", height: "300px" }}
                      />
                    </Grid>
                    <Grid item container md={6} justifyContent="flex-end">
                      <Box sx={sectionContent}>
                        <Typography sx={title}>Enjoy on your TV</Typography>{" "}
                        <Typography sx={paragraph}>
                          {" "}
                          Watch on smart TVs, PlayStation, Xbox, Chromecast,
                          Apple TV, Blu-ray players and more.
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
                <Box style={{ background: "black", marginTop: "10px" }}>
                  <Grid container direction="row" sx={sectionContainer}>
                    <Grid item md={6}>
                      <Box sx={sectionContent}>
                        <Typography sx={title}>Enjoy on your TV</Typography>{" "}
                        <Typography sx={paragraph}>
                          {" "}
                          Watch on smart TVs, PlayStation, Xbox, Chromecast,
                          Apple TV, Blu-ray players and more.
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item container md={6} justifyContent="flex-end">
                      {" "}
                      <img
                        src={process.env.PUBLIC_URL + "/images/part3.png"}
                        alt=""
                        style={{ width: "350px", height: "300px" }}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Box>
              <Box>
                <Footer />
              </Box>
            </Box>{" "}
          </>
        )}
      </ThemeProvider>
    </div>
  );
}

export default App;

const showcasewrapper = {
  position: "absolute",
  top: "10%",
  left: "40%",
  textAlign: "center",
  maxWidth: "calc(100% - 4rem)",
};
const smallshowcasewrapper = {
  position: "absolute",
  top: "5%",
  left: "10%",
  textAlign: "center",
  maxWidth: "calc(100% - 4rem)",
};
const sectionContainer = {
  padding: "40px",
  alignItem: "center",
  display: "flex",
  itemAlign: "center",
  width: "80%",
  margin: "auto",
};
const showCaseTitle = {
  fontSize: "1.5rem",
  fontWeight: "400",
  margin: "1rem 0 0",
};
const showCasepara = {
  fontSize: "1.25rem",
  fontWeight: "400",
  lineHeight: "1.875rem",
};
const showCaseHeading = { fontSize: "3rem", fontWeight: "900" };
const smallshowCaseTitle = {
  fontSize: "18px",
  fontWeight: "400",
  margin: "10px 0 0",
};
const smallshowCasepara = {
  fontSize: "14pxrem",
  fontWeight: "400",
};
const smallshowCaseHeading = { fontSize: "2rem", fontWeight: "900" };
const section = {
  // width: "70%",
  // margin: "auto",
};
const hero = {
  position: "relative",
  color: "white",
  backgroundColor: "rgba(45, 45, 45, 1) !important",
};

const background_image = {
  filter: "brightness(60%)",
  height: "70vh",
  width: "100vw",
};
const text = {
  position: "absolute",
  top: "10%",
};
// const section = {
//   width: "70%",
//   margin: "auto",
// };
const sectionContent = {
  alignItem: "center",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
};
const paragraph = {
  fontsize: "1.5rem",
  fontWeight: "400",
  margin: "16px 0 0",
};
const title = {
  fontsize: "3rem",
  fontWeight: "900",
};
