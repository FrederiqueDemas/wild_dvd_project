import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Slider() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=0387bbafeb178c8385a6bb7f71b05ec5&language=en-US&page=1`
      )
      .then((res) => setMovieData(res.data.results));
  }, []);

  return (
    <div className="data">
      {movieData.map((movie) => (
        <div className="slider-img" key={movie.id}>
          <h1>{movie.title}</h1>
          <h2>{movie.vote_average}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt=""
          />
        </div>
      ))}
    </div>
  );
}
