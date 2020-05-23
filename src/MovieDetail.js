import React from "react";
import Axios from "axios";
import Movie from "./Movie";
import moment from "moment";

class MovieDetail extends React.Component {
  // KOFIC API
  KOFIC = {
    API_URL:
      " https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json",
    KEY: "c74d1e3ccf220bb37d0dea10acafcfa5",
  };

  // TMDB API
  TMDB = {
    API_URL: "https://api.themoviedb.org/3/search/movie",
    KEY: "6c409635f74a4bd9994b16639685e73d",
  };

  state = {
    isLoading: true,
    movie: [],
    poster: "https://image.tmdb.org/t/p/w500",
  };

  getMoviesDetail = async () => {
    // KOFIC MOVIE DETAIL API
    const {
      data: {
        movieInfoResult: { movieInfo },
      },
    } = await Axios.get(this.KOFIC.API_URL, {
      params: {
        key: this.KOFIC.KEY,
        movieCd: this.props.movieCd,
      },
    });

    // TMDB MOVIE DETAIL API
    const {
      data: { results },
    } = await Axios.get(this.TMDB.API_URL, {
      params: {
        api_key: this.TMDB.KEY,
        language: "kr-KR",
        query: movieInfo.movieNm,
        year: moment(movieInfo.openDt).format("YYYY"),
      },
    });

    this.setState({
      isLoading: false,
      movie: movieInfo,
      poster: results.length
        ? `${this.state.poster}${results[0].poster_path}`
        : "http://via.placeholder.com/185x278/000000?text=Not found Poster",
    });
  };

  componentDidMount() {
    this.getMoviesDetail();
  }

  render() {
    const { isLoading, movie, poster } = this.state;
    if (!isLoading) {
      return (
        <div className="movies">
          <Movie
            key={movie.movieCd}
            title={movie.movieNm}
            title_en={movie.movieNmEn}
            year={moment(movie.openDt).format("YYYY-MM-DD")}
            showTm={movie.showTm}
            nations={movie.nations}
            genres={movie.genres}
            directors={movie.directors}
            poster={poster}
          />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default MovieDetail;
