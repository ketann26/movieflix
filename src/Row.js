import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

const poster_base_url = "https://image.tmdb.org/t/p/original";

const Row = ({ title, fetchURL, isLargeRow }) => {
	const [movies, setMovies] = useState([]);

	const fetchData = async () => {
		const request = await axios.get(fetchURL);
		setMovies(request.data.results);
		return request;
	};

	useEffect(() => {
		fetchData();
	}, [fetchURL]);

	return (
		<div className="row">
			<h2>{title}</h2>
			<div className="row-item-container">
				{movies.map((movie) => (
					<img
						key={movie.id}
						className={`row-item ${isLargeRow && "poster-lg"}`}
						src={`${poster_base_url}${
							isLargeRow ? movie.poster_path : movie.backdrop_path
						}`}
						alt={movie.name}
					/>
				))}
			</div>
		</div>
	);
};

export default Row;
