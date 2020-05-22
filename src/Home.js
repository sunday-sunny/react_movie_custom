import React from "react";
import axios from "axios";
import moment from "moment";
import MovieDetail from "./MovieDetail";
import "./Home.css";

class Home extends React.Component {
  // KOFIC API
  KOFIC = {
    API_URL:
      "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json",
    KEY: "c74d1e3ccf220bb37d0dea10acafcfa5",
  };

  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    // KOFIC BOXOFFICE API
    const yesterday = moment().subtract(1, "d").format("YYYYMMDD");
    const {
      data: {
        boxOfficeResult: { dailyBoxOfficeList },
      },
    } = await axios.get(this.KOFIC.API_URL, {
      params: {
        key: this.KOFIC.KEY,
        targetDt: yesterday,
        multiMovieYn: "N",
      },
    });
    this.setState({ movies: dailyBoxOfficeList, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div className="container">
        {isLoading ? (
          <div className="container__loader">
            <span className="loader_text">isLoading...</span>
          </div>
        ) : (
          <div className="container__movies">
            {movies.map((movie) => (
              <MovieDetail key={movie.movieCd} movieCd={movie.movieCd} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Home;
