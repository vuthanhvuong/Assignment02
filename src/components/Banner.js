import React, { useState, useEffect } from "react";
import useHttp from "../hooks/use-http";
import { useCallback } from "react";

const Banner = () => {
  const [movies, setMovies] = useState("");
  const [randomMovie, setRandomMovie] = useState([]);

  const {
    isLoading: isLoading,
    error: error,
    sendRequest: fetchMovies,
  } = useHttp();

  useEffect(() => {
    const transformMovies = (movieObj) => {
      console.log(movieObj);
      const loadedMovies = [];

      for (const movieKey in movieObj.results) {
        loadedMovies.push({
          id: movieObj.results[movieKey].id,
          name: movieObj.results[movieKey].name,
          backdrop: movieObj.results[movieKey].backdrop_path,
          overview: movieObj.results[movieKey].overview,
        });
      }

      setMovies(loadedMovies);
    };

    fetchMovies(
      {
        url: "https://api.themoviedb.org/3/discover/tv?api_key=2a15e12781b1443c104dcdef44b9102d&with_network=123",
      },
      transformMovies
    );
  }, []);

  const movie = [...movies];
  console.log(movie);
  const src = movie.map((movie) => movie.backdrop);
  const srcRamdom = src[Math.floor(Math.random() * src.length - 1)];
  console.log(src);
  console.log(srcRamdom);
  const randomMovie1 = movie.filter((movie) => movie.backdrop === srcRamdom);
  console.log(randomMovie1[0]);
  // const randomMovie = movie[Math.floor(Math.random() * movie.length - 1)];
  // const renderMovie = randomMovie1.map((key) => {
  //   <h1>key.name</h1>;
  // });

  return (
    <div>
      <img
        className="background-img"
        src={`https://image.tmdb.org/t/p/w500${srcRamdom}`}
        alt="a"
      ></img>
      {/* <div>{renderMovie}</div> */}
    </div>
  );
};

export default Banner;
