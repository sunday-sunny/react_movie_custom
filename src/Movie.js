import React from "react";

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
        <h5 className="movie__title_en">{title_en}</h5>
        <h5 className="movie__year">{year}</h5>
        <h5 className="movie__director">
          {directors.map((director) => director.peopleNm)}
        </h5>
        <div className="movie__time">{showTm}분</div>
        <ul className="movie__nation">
          {nations.map((nation) => (
            <li>{nation.nationNm}</li>
          ))}
        </ul>
        <ul className="moive__genre">
          {genres.map((genre) => (
            <li>{genre.genreNm}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Movie;
