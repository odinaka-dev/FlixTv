import React, { useState, useEffect } from "react";

const OtherMovies = () => {
  return (
    <section className="mb-16 pb-12 max-w-[90%] mx-auto text-white">
      <OtherMoviesComponents />
      <OtherSeriesComponents />
    </section>
  );
};

const OtherMoviesComponents = () => {
  // fetch the necessary data
  const [series, setSeries] = useState([]);

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
        // console.log(data);
        if (data.results) {
          setSeries(data.results.slice(5, 10));
        } else {
          setSeries([]);
        }
      } catch (error) {
        console.log("error fetching the series:", error);
      }
    };

    fetchSeries();
  }, []);

  return (
    <section className="mb-4">
      <div className="recently_header">
        <h1 className="border-b-[2px] border-b-[blue] inline-block pb-4">
          Newly Release Series BingeBox
        </h1>
      </div>
      <div className="series_movies grid grid-cols-5 gap-8 my-10">
        {series.map((results) => (
          <div className="" key={results.id}>
            <div className="image_poster w-[80%]">
              <img
                className="rounded-lg"
                src={`https://image.tmdb.org/t/p/w500${results.poster_path}`}
                alt=""
              />
            </div>
            <div className="series_info flex flex-col gap-2">
              <p className="">{results.name}</p>
              <p className="text-sm">Series</p>
              <p className="text-[10px] bg-blue-900 cursor-pointer inline-block p-2 rounded-lg">
                Aired: {results.first_air_date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const OtherSeriesComponents = () => {
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
      <div className="recently_header">
        <h1 className="border-b-[2px] border-b-[blue] inline-block pb-4">
          Top Rated Movies BingeBox
        </h1>
      </div>
      <div className="series_movies grid grid-cols-5 gap-8 my-10">
        {Top.map((results) => (
          <div className="relative" key={results.id}>
            <div className="image_poster w-[80%]">
              <img
                className="rounded-lg"
                src={`https://image.tmdb.org/t/p/w500${results.poster_path}`}
                alt=""
              />
            </div>
            <div className="series_info flex flex-col gap-2">
              <p className="relative bottom-6 text-[10px] text-white py-4 px-2 bg-blue-900 font-bold">
                {results.title}
              </p>
              <p className="text-sm">Series</p>
              <p className="absolute top-0 text-[10px] bg-blue-900 cursor-pointer inline-block p-2 rounded-lg">
                Aired: {results.release_date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OtherMovies;
