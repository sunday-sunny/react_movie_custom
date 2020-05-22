import React from "react";
import "./Movie.css";

function Movie({
  title,
  title_en,
  year,
  showTm,
  nations,
  genres,
  directors,
  poster,
}) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title}></img>
      <div class="movie__data">
        <h3 className="movie__title">{title}</h3>
        <span className="movie__title_en">{title_en}</span>
        <hr></hr>
        <div className="movie__year">
          <span>개봉일</span> {year}
        </div>
        <ul className="movie__nation">
          <span>제작국가</span>
          {nations.map((nation) => (
            <li>{nation.nationNm}</li>
          ))}
        </ul>
        <div className="movie__time">
          <span>러닝타임 </span>
          {showTm}분
        </div>
        <div className="movie__director">
          <span>감독</span> {directors.map((director) => director.peopleNm)}
        </div>
        <hr></hr>
        <ul className="movie__genre">
          <span>장르</span>
          {genres.map((genre) => (
            <li>{genre.genreNm}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Movie;
