import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaRegPlayCircle } from "react-icons/fa";
import {
  MdOutlineDateRange,
  MdOutlineWatchLater,
  MdStarRate,
} from "react-icons/md";
import { IoBookmark } from "react-icons/io5";
import { FaCirclePlay } from "react-icons/fa6";

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const handlePage = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=cdcab54e2ae4324c0ee5b7372e8f5179`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZGNhYjU0ZTJhZTQzMjRjMGVlNWI3MzcyZThmNTE3OSIsIm5iZiI6MTczODE0MjM1Mi43NDU5OTk4LCJzdWIiOiI2Nzk5ZjI5MGZjMTRkMjRlMzVhOTc4NmMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.00uKCmUSpcpmyiZIcPTGOyiETNVK8FYAfqgwk494yJg",
            },
          }
        );

        const data = await response.json();
        if (data) {
          setMovie(data);
        } else {
          setMovie([]);
        }
      } catch (err) {
        console.log("error:", err);
      }
    };

    handlePage();
  }, [id]);

  return (
    <div className="text-white my-12">
      <section className="individual_movies max-w-[92%] md:max-w-[80%] mx-auto">
        <div
          className="grid grid-cols-1 md:grid-cols-2 items-center gap-8"
          key={movie.id}
        >
          <div className="relative">
            <div className="play absolute top-[30%] left-[40%] md:left-[45%] md:top-[40%]">
              <FaRegPlayCircle className="text-6xl opacity-60" />
            </div>
            <img
              className="rounded-lg"
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt={movie.original_title}
            />
          </div>
          <div className="movie_info">
            <h1 className="text-blue-400 text-2xl font-bold sm:text-3xl lg:text-4xl">
              {movie.title}
            </h1>
            <div className="mt-6">
              <h1 className="text-xl text-[16px] font-bold">Overview</h1>
              <p className="text-white text-[14px] leading-6">
                {movie.overview}
              </p>
            </div>
            <div className="py-4">
              {movie.genres && movie.genres.length > 0 ? (
                <div className="mt-">
                  <span>Genres:</span>
                  <span className="ml-2 text-blue-400">
                    {movie.genres.map((genre) => genre.name).join(", ")}
                  </span>
                </div>
              ) : (
                <p>No genres available</p>
              )}
            </div>
            <MovieInfoComponent
              runtime={movie.runtime}
              Rate={movie.vote_average}
              DateRelease={movie.release_date}
            />
            <ButtonComponent />
          </div>
        </div>
      </section>
    </div>
  );
};

const MovieInfoComponent = ({ runtime, Rate, DateRelease }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-center mt-2">
      <div className="grid-first flex items-center gap-2">
        <MdOutlineWatchLater className="text-2xl" />
        <p>{runtime} minutes</p>
      </div>
      <div className="grid-first flex items-center gap-2">
        <MdStarRate className="text-2xl text-yellow-500" />
        <p>{Math.floor(Rate)} star Ratings</p>
      </div>
      <div className="grid-first flex items-center gap-2">
        <MdOutlineDateRange className="text-2xl" />
        <p>{DateRelease}</p>
      </div>
    </div>
  );
};

const ButtonComponent = () => {
  return (
    <div className="butttons grid grid-cols-[75%_20%] md:grid-cols-[80%_20%] items-center gap-2 w-full mt-4">
      <div className="watch_now bg-[blue] p-4 rounded-lg flex justify-center items-center gap-3 hover:bg-blue-700 hover:text-[20px] duration-300">
        <button>Watch Now</button>
        <FaCirclePlay className="text-white" />
      </div>
      <div className="bg-gray-700 flex justify-center p-4 rounded-lg">
        <IoBookmark className="text-2xl" />
      </div>
    </div>
  );
};
// creating the functionality for the filter

export default MoviePage;
