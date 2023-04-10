import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import requests from "../request";
import Movies from "../components/Movies";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <Nav />
      <Banner />
      <div style={{ paddingBottom: "10px", marginTop: "30px" }}>
        <Movies
          title={"NETFLIX ORIGINALS"}
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow={true}
        />
        <Movies title={"Trending Now"} fetchUrl={requests.fetchTrending} />

        <Movies
          title={"Animation Movies"}
          fetchUrl={requests.fetchAnimationMovies}
        />

        <Movies
          title={"Romantic Movies"}
          fetchUrl={requests.fetchRomanceMovies}
        />
        <Movies
          title={"History Movies"}
          fetchUrl={requests.fetchHistoryMovies}
        />
        <Movies
          title={"Fantasy Movies"}
          fetchUrl={requests.fetchFantasyMovies}
        />
        <Footer />
      </div>
    </>
  );
}

export default Home;
