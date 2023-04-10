const API_KEY = "2d1510863c8d17edfdfcc428c15c31b6";

const requests = {
  fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`,
  fetchTopRated: `https://api.themoviedb.org/3movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&page=1&timezone=%20Europe%2FIstanbul&with_networks=213`,
  fetchHistoryMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=36`,
  fetchAnimationMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchFantasyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=14`,
  fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
};
export default requests;
{
  /* <Movies
            title={"Netflix Originaks"}
            fetchUrl={requests.fetchNetflixOriginals}
          />

          <Movies
            title={"History Movies"}
            fetchUrl={requests.fetchHistoryMovies}
          />
          <Movies
            title={"Animation Movies"}
            fetchUrl={requests.fetchAnimationMovies}
          />
          <Movies
            title={"Fantasy Movies"}
            fetchUrl={requests.fetchFantasyMovies}
          />
          <Movies
            title={"Romantic Movis"}
            fetchUrl={requests.fetchRomanceMovies}
          /> */
}
