import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
        // console.log(data);
        // console.log(data.original_title);
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
          <div className="">
            <img
              className="rounded-lg"
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt={movie.original_title}
            />
          </div>
          <div className="movie_info">
            <h1 className="text-white text-2xl font-bold sm:text-3xl lg:text-4xl">
              {movie.original_title}
            </h1>
            <div className="mt-6">
              <h1 className="text-xl text-[16px] font-bold">Overview</h1>
              <p className="text-white text-[14px] leading-6">
                {movie.overview}
              </p>
            </div>
            <div>
              {/*  */}
              {movie.genres && movie.genres.length > 0 ? (
                <div className="mt-6 flex flex-col sm:flex-row">
                  <span>Genres:</span>
                  <span className="ml-2 py-2 px-4 bg-white text-black rounded-[50px]">
                    {movie.genres.map((genre) => genre.name).join(", ")}
                  </span>
                </div>
              ) : (
                <p>No genres available</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// creating the functionality for the filter

export default MoviePage;
