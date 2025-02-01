import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import Load from "../Components/Load";

const AllMovies = () => {
  // const { searchQuery } = useContext(searchContext);

  return (
    <section className="mb-36 relative top-[50px] sm:top-[100px] max-w-[90%] mx-auto text-white">
      {/* <h1 className="recently_header">All movies</h1> */}
      <HandleTrendFetchRequest />
    </section>
  );
};

// the component that controls the filter and search functionality
const HandleTrendFetchRequest = () => {
  const [Trend, setTrending] = useState([]);
  const [Genre, setGenre] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // handle the next movies
  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage <= 1) {
      setCurrentPage(currentPage);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  // handling the fetch requqest for the trending videos

  useEffect(() => {
    const TrendingFetch = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${currentPage}&sort_by=popularity.desc`,
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
          setTrending(data.results);
        } else {
          setTrending([]);
        }
      } catch (error) {
        console.log("error fetching the trending videos:", error);
      }
    };

    TrendingFetch();
  }, [currentPage]);

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

  // the filter functionality
  const filteredMovies = searchQuery
    ? Trend.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : Trend;

  return (
    <section className="py-8 pb-2">
      <div className="recently_header grid lg:grid-cols-[25%_60%_10%] gap-8 items-center">
        <h1 className="recently_header text-center sm:text-left text-[18px] border-b-[2px] border-b-[blue] pb-2">
          Thrilling Movies on BingeBox
        </h1>
        <div className="flex justify-center">
          <input
            type="search"
            className="outline-none text-white bg-[#2b2b2b] text-[14px] p-2 pl-4 w-[80%] rounded-[50px] cursor-pointer"
            placeholder="search movies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="pagination flex justify-center">
          <PaginationButton
            handleNext={handleNext}
            handlePrevious={handlePrevious}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-8">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((result) => (
            <div key={result.id}>
              <div className="movie_images full">
                <Link to={`/movies/${result.id}`}>
                  <img
                    className="rounded-lg"
                    src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
                    alt={result.title}
                  />
                </Link>
              </div>
              <div className="movies_information flex flex-col items-center justify-between my-4">
                <h2 className="text-[15px] hover:text-red-600 cursor-pointer duration-300 font-normal recently_header">
                  {result.title}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {result.genre_ids.slice(0, 3).map((genreId) => {
                    const matchingGenre = Genre.find((g) => g.id === genreId);
                    return (
                      matchingGenre && (
                        <span
                          className="cursor-pointer bg-white text-black font-bold p-2 py-2 text-center rounded-[50px] my-2 text-[12px]"
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
          ))
        ) : (
          // <p>No movies found for "{searchQuery}"</p>
          <Load />
        )}
      </div>
    </section>
  );
};

// the component that handles pagination for the movies

const PaginationButton = ({ handleNext, handlePrevious }) => {
  return (
    <section className="flex gap-8 text-white">
      <div className="cursor-pointer" onClick={handlePrevious}>
        <GrLinkPrevious className="p-2 text-3xl rounded-[50%] bg-blue-800" />
      </div>
      <div className="cursor-pointer" onClick={handleNext}>
        <GrLinkNext className="p-2 text-3xl rounded-[50%] bg-blue-800" />
      </div>
    </section>
  );
};

export default AllMovies;
