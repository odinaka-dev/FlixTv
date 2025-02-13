import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GrLinkNext } from "react-icons/gr";

const Recently = () => {
  return (
    <section className="text-white max-w-[90%] mx-auto my-8">
      <MainContents />
    </section>
  );
};

const MainContents = () => {
  // fetch request - using RapidAPI
  const [recently, setRecently] = useState([]);
  const [genre, setGenre] = useState([]);
  const [index, setIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=3&sort_by=popularity.desc",
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization:
                "bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZGNhYjU0ZTJhZTQzMjRjMGVlNWI3MzcyZThmNTE3OSIsIm5iZiI6MTczODE0MjM1Mi43NDU5OTk4LCJzdWIiOiI2Nzk5ZjI5MGZjMTRkMjRlMzVhOTc4NmMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.00uKCmUSpcpmyiZIcPTGOyiETNVK8FYAfqgwk494yJg",
            },
          }
        );
        const data = await response.json();
        // console.log(data);
        // const FirstTenItems = data.result.slice(0, 5);
        if (data.results) {
          setRecently(data.results);
        } else {
          setRecently([]);
        }
      } catch (error) {
        console.error("error fetching the recently updated:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const genreFetch = async () => {
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
        // console.log(data);
        if (data.genres) {
          setGenre(data.genres);
        }
      } catch (error) {
        console.error("the genre could not be fetched:", error);
      }
    };

    genreFetch();
  }, []);

  // the function for the slide effect
  const updateItemsPerPage = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 450) {
      setItemsPerPage(1);
    } else if (screenWidth <= 760) {
      setItemsPerPage(2);
    } else if (screenWidth <= 1024) {
      setItemsPerPage(3);
    } else {
      setItemsPerPage(4);
    }
  };

  useEffect(() => {
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(recently.length / itemsPerPage);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1 < totalPages ? prev + 1 : 0));
  };

  return (
    <section className="">
      <div className="">
        <h1 className="recently_header text-[18px] border-b-[2px] border-b-[blue] inline-block pb-2">
          Most watched Movies on Bingebox
        </h1>
        <section className="flex gap-2 items-center">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center my-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            // drag="x"
          >
            {recently
              .slice(index * itemsPerPage, (index + 1) * itemsPerPage)
              .map((results, i) => (
                <motion.div
                  className="flex gap-2 items-center text-sm"
                  key={results.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="image_poster w-[40%]">
                    <Link to={`movies/${results.id}`}>
                      <img
                        className="rounded-lg"
                        src={`https://image.tmdb.org/t/p/w500${results.poster_path}`}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="recents_info">
                    <p>{results.original_title}</p>
                    <div className="flex flex-wrap gap-2">
                      {results.genre_ids.slice(0, 2).map((genreId) => {
                        // Find the genre name for this genreId
                        const matchingGenre = genre.find(
                          (g) => g.id === genreId
                        );
                        return (
                          matchingGenre && (
                            <span
                              className="cursor-pointer bg-white text-black font-bold p-2 py-2 text-center rounded-[50px] my-2 cursor-pointer text-[9px]"
                              key={genreId}
                            >
                              {matchingGenre.name}
                            </span>
                          )
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              ))}
          </motion.div>
          <div className="">
            <div className="">
              <GrLinkNext
                onClick={nextSlide}
                className="bg-blue-800 p-2 rounded-[50%] text-4xl cursor-pointer"
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

// const NextSlideButton = ({ handleNext }) => {
//   return (
//     <section className="">
//       <h1>Welcome</h1>
//     </section>
//   );
// };

export default Recently;
