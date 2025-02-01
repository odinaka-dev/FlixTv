import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// the icons for the rating
import { FaArrowRight, FaStar } from "react-icons/fa6";

const TrendingVideos = () => {
  return (
    <section className="max-w-[90%] mx-auto text-white">
      <HandleTrendFetchRequest />
    </section>
  );
};

const HandleTrendFetchRequest = () => {
  // navigate declaration
  const navigate = useNavigate();

  const [Trend, setTrending] = useState([]);
  const [Genre, setGenre] = useState([]);

  // handling the fetch requqest for the trending videos

  useEffect(() => {
    const TrendingFetch = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc",
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
        if (data.results) {
          setTrending(data.results.slice(6, 14));
        } else {
          setTrending([]);
        }
      } catch (error) {
        console.log("error fetching the trending videos:", error);
      }
    };

    TrendingFetch();
  }, []);

  // fetch for the Genre
  useEffect(() => {
    const fetchGenre = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/genre/movie/list?language=en",
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
        if (data.genres) {
          setGenre(data.genres);
        } else {
          setGenre([]);
        }
      } catch (error) {
        console.error("error handling the genre for trending videos:", error);
      }
    };

    fetchGenre();
  }, []);

  return (
    <section className="py-8 pb-2">
      <div className="recently_header flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-0 justify-between">
        <h1 className="recently_header text-[18px] border-b-[2px] border-b-[blue] pb-2">
          Thrilling Movies on BingeBox
        </h1>
        <div
          className="recently_button  bg-[#2e2e2e] p-2 px-8 flex items-center gap-2 rounded-[50px] cursosr-pointer hover:bg-[#3e3e3e] duration-300 capitalize"
          onClick={() => navigate("/movies")}
        >
          <button className="text-[14px]">View all</button>
          <FaArrowRight />
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 my-8">
        {Trend.map((result) => (
          <div className="" key={result.id}>
            <div className="movie_images full">
              <Link to={`movies/${result.id}`}>
                <img
                  className="rounded-lg"
                  src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
                  alt=""
                />
              </Link>
            </div>
            <div className="movies_information flex flex-col items-center justify-between my-4">
              <h2 className="text-[15px] hover:text-red-600 cursor-pointer duration-300 font-normal recently_header">
                {result.title}
              </h2>
              <div className="flex flex-wrap gap-2">
                {result.genre_ids.slice(0, 3).map((genreId) => {
                  // Find the genre name for this genreId
                  const matchingGenre = Genre.find((g) => g.id === genreId);
                  return (
                    matchingGenre && (
                      <span
                        className="cursor-pointer bg-white text-black font-bold p-2 py-2 text-center rounded-[50px] my-2 cursor-pointer text-[12px]"
                        key={genreId}
                      >
                        {matchingGenre.name}
                      </span>
                    )
                  );
                })}
              </div>
              <div className="movie_ratings flex gap-2 items-center">
                <p className="text-white">
                  Rating: {`${Math.floor(result.vote_average)}.0`}
                </p>
                <FaStar className="text-yellow-500 text-[12px]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingVideos;
