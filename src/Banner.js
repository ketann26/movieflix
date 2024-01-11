import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  const fetchData = async () => {
    const request = await axios.get(requests.fetchNetflixOriginals);
    setMovie(
      request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
      ]
    );
  };

  useEffect(() => {
    fetchData();
  });

  console.log(movie);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-content">
        <h1 className="banner-title">{movie?.name}</h1>
        <div className="banner-buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="banner-desc">{movie?.overview}</h1>
      </div>
      <div className="banner-bottom"></div>
    </header>
  );
};

export default Banner;
