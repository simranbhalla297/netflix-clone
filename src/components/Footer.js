import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
function Footer() {
  const isSmallerScreen = useMediaQuery("(max-width:600px)");

  return (
    <>
      {isSmallerScreen ? (
        <>
          <Box sx={smallfooterWrapper}>
            <Grid
              container
              spacing={2}
              style={{ color: "white", marginBottom: "10px" }}
            >
              <Grid item>
                <FacebookIcon />
              </Grid>
              <Grid item>
                <InstagramIcon />
              </Grid>
              <Grid item>
                <TwitterIcon />
              </Grid>

              <Grid item>
                <YouTubeIcon />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={6}>
                <Grid container direction="column">
                  <Grid item>
                    <Typography sx={text}>Audio Description</Typography>
                  </Grid>
                  <Grid item>
                    <Typography sx={text}>Gift Cards</Typography>
                  </Grid>{" "}
                  <Grid item>
                    <Typography sx={text}>Inverstor Relations</Typography>
                  </Grid>
                  <Grid item>
                    <Typography sx={text}>Terms of Use</Typography>
                  </Grid>{" "}
                  <Grid item>
                    <Typography sx={text}>Legal Notice</Typography>
                  </Grid>
                  <Grid item>
                    <Typography sx={text}>Corporate Information</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={6}>
                <Grid container direction="column">
                  <Grid item>
                    <Typography sx={text}>Help Center</Typography>
                  </Grid>{" "}
                  <Grid item>
                    <Typography sx={text}>Media Center</Typography>
                  </Grid>{" "}
                  <Grid item>
                    <Typography sx={text}>Jobs</Typography>
                  </Grid>{" "}
                  <Grid item>
                    <Typography sx={text}>Privacy</Typography>
                  </Grid>{" "}
                  <Grid item>
                    <Typography sx={text}>Cookie Preferences</Typography>
                  </Grid>
                  <Grid item>
                    <Typography sx={text}>Contact us</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Box sx={serviceButton}>
              <button
                style={{
                  fontSize: "13px",
                  padding: "0.5em",
                  marginBottom: "5px",
                  color: "grey",
                  background: "transparent",
                  border: "1px solid grey",
                }}
              >
                Service code
              </button>
            </Box>
            <Typography sx={footerText}>© 1997-2023 Netflix, Inc.</Typography>
          </Box>
        </>
      ) : (
        <>
          {" "}
          <Box sx={footerWrapper}>
            <Grid
              container
              spacing={2}
              style={{ color: "white", marginBottom: "10px" }}
            >
              <Grid item>
                <FacebookIcon />
              </Grid>
              <Grid item>
                <InstagramIcon />
              </Grid>
              <Grid item>
                <TwitterIcon />
              </Grid>

              <Grid item>
                <YouTubeIcon />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={3} md={3}>
                <Grid container direction="column">
                  <Grid item>
                    <Typography sx={text}>Audio Description</Typography>
                  </Grid>
                  <Grid item>
                    <Typography sx={text}>Inverstor Relations</Typography>
                  </Grid>
                  <Grid item>
                    <Typography sx={text}>Legal Notice</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={3}>
                <Grid container direction="column">
                  <Grid item>
                    <Typography sx={text}>Help Center</Typography>
                  </Grid>{" "}
                  <Grid item>
                    <Typography sx={text}>Jobs</Typography>
                  </Grid>{" "}
                  <Grid item>
                    <Typography sx={text}>Cookie Preferences</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={3}>
                <Grid container direction="column">
                  <Grid item>
                    <Typography sx={text}>Gift Cards</Typography>
                  </Grid>{" "}
                  <Grid item>
                    <Typography sx={text}>Terms of Use</Typography>
                  </Grid>{" "}
                  <Grid item>
                    <Typography sx={text}>Corporate Information</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={3}>
                <Grid container direction="column">
                  <Grid item>
                    <Typography sx={text}>Media Center</Typography>
                  </Grid>{" "}
                  <Grid item>
                    <Typography sx={text}>Privacy</Typography>
                  </Grid>{" "}
                  <Grid item>
                    <Typography sx={text}>Contact us</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Box sx={serviceButton}>
              <button
                style={{
                  fontSize: "13px",
                  padding: "0.5em",
                  marginBottom: "5px",
                  color: "grey",
                  background: "transparent",
                  border: "1px solid grey",
                }}
              >
                Service code
              </button>
            </Box>
            <Typography sx={footerText}>© 1997-2023 Netflix, Inc.</Typography>
          </Box>
        </>
      )}
    </>
  );
}

export default Footer;

const footerWrapper = {
  color: "grey",
  margin: "20px auto 0",
  maxWidth: "980px",
  padding: "0 4%",
};
const smallfooterWrapper = {
  color: "grey",
  margin: "auto",
  maxWidth: "980px",

  paddingTop: "10%",
  paddingLeft: "10%",
};
const text = {
  fontSize: "13px",
  margin: "0 0 14px",
};

const footerText = {
  color: "grey",
  fontSize: "13px",
  marginTop: "10px",
};

const serviceButton = {
  marginTop: "10px",
  background: "transparent",
};

const footerButton = {
  fontSize: "13px",
  padding: "0.5em",
  marginBottom: "20px",
  background: "transparent",
};
