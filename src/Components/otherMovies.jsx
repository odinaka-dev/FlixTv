import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { GrLinkNext } from "react-icons/gr";

const OtherMovies = () => {
  return (
    <section className="mb-16 pb-12 max-w-[90%] mx-auto text-white">
      <OtherMoviesComponents />
      <OtherSeriesComponents />
    </section>
  );
};

const OtherMoviesComponents = () => {
  // navigate declaration
  const navigate = useNavigate();

  //state values
  const [series, setSeries] = useState([]);
  const [index, setIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // fetch the necessary data
  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc",
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
        console.log(data);
        if (data.results) {
          setSeries(data.results);
        } else {
          setSeries([]);
        }
      } catch (error) {
        console.log("error fetching the series:", error);
      }
    };

    fetchSeries();
  }, []);

  // updating the itemsperpage
  const updateItemsPerPage = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 420) {
      setItemsPerPage(2);
    } else if (screenWidth <= 640) {
      setItemsPerPage(2);
    } else if (screenWidth <= 760) {
      setItemsPerPage(2);
    } else if (screenWidth <= 1024) {
      setItemsPerPage(4);
    } else {
      setItemsPerPage(5);
    }
  };

  useEffect(() => {
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(series.length / itemsPerPage);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1 < totalPages ? prev + 1 : 0)); // Loop back to start if at the last page
  };

  return (
    <section className="mb-4">
      <div className="recently_header grid grid-cols-2 sm:flex items-center justify-between gap-2">
        <h1 className="recently_header text-[18px] border-b-[2px] border-b-[blue] pb-2">
          Newly Released Series on BingeBox
        </h1>
        <div
          className="recently_button  flex items-center justify-end gap-2 rounded-[50px] cursosr-pointer hover:bg-[#3e3e3e] duration-300 capitalize"
          onClick={() => navigate("/movies")}
        >
          <button className="text-[14px] bg-[#2e2e2e] p-2 px-6">
            View all
          </button>
          <FaArrowRight />
        </div>
      </div>
      <div className="relative">
        <div>
          <motion.div
            className="series_movies grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 my-10"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            // drag="x"
          >
            {series
              .slice(index * itemsPerPage, (index + 1) * itemsPerPage)
              .map((results, i) => (
                <motion.div
                  className="relative w-[90%]"
                  key={results.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="image_poster">
                    <img
                      className="rounded-lg"
                      src={`https://image.tmdb.org/t/p/w500${results.poster_path}`}
                      alt=""
                    />
                  </div>
                  <div className="series_info flex flex-col gap-2">
                    <p className="relative bottom-6 text-[14px] text-white py-4 px-2 bg-blue-900 font-bold">
                      {results.name}
                    </p>
                    <p className="absolute top-0 text-[10px] bg-blue-900 cursor-pointer inline-block p-2 rounded-lg">
                      {results.first_air_date}
                    </p>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </div>
        <div className="absolute top-[50%] right-0">
          <div className="">
            <GrLinkNext
              onClick={nextSlide}
              className="bg-blue-800 p-2 rounded-[50%] text-4xl cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const OtherSeriesComponents = () => {
  const navigate = useNavigate();
  // the fetch request for Top movies watched on bingebox
  const [Top, setTop] = useState([]);

  useEffect(() => {
    const getRated = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
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
        console.log(data);
        if (data.results) {
          setTop(data.results.slice(6, 16));
        } else {
          setTop([]);
        }
      } catch (error) {
        console.error("error fetching top rated movies:", error);
      }
    };

    getRated();
  }, []);

  return (
    <section className="mb-4">
      <div className="recently_header grid grid-cols-2 sm:flex items-center justify-between gap-2">
        <h1 className="recently_header text-[18px] border-b-[2px] border-b-[blue] pb-2">
          Top Rated Movies on BingeBox
        </h1>
        <div
          className="recently_button  flex items-center justify-end gap-2 rounded-[50px] cursosr-pointer hover:bg-[#3e3e3e] duration-300 capitalize"
          onClick={() => navigate("/movies")}
        >
          <button className="text-[14px] bg-[#2e2e2e] p-2 px-6">
            View all
          </button>
          <FaArrowRight />
        </div>
      </div>
      <div className="series_movies grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-8 my-10">
        {Top.map((results) => (
          <div className="relative w-[90%]" key={results.id}>
            <div className="image_poster">
              <img
                className="rounded-lg"
                src={`https://image.tmdb.org/t/p/w500${results.poster_path}`}
                alt=""
              />
            </div>
            <div className="series_info flex flex-col gap-2">
              <p className="relative bottom-6 text-[14px] text-white py-4 px-2 bg-blue-900 font-bold">
                {results.title}
              </p>
              <p className="absolute top-0 text-[10px] bg-blue-900 cursor-pointer inline-block p-2 rounded-lg">
                {results.release_date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OtherMovies;
