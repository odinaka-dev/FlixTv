import React, { useEffect, useState } from "react";

const TrendingVideos = () => {
  return (
    <section className="max-w-[90%] mx-auto text-white">
      <HandleTrendFetchRequest />
    </section>
  );
};

const HandleTrendFetchRequest = () => {
  const [Trend, setTrending] = useState([]);

  // handling the fetch requqest for the trending videos

  useEffect(() => {
    const TrendingFetch = async () => {
      try {
        const response = await fetch(
          "https://imdb-top-1000-movies-series.p.rapidapi.com/list/1",
          {
            method: "GET",
            headers: {
              "x-rapidapi-key":
                "ca4e5a7da6msh8a5e5084e012ffcp1569b0jsn0b6853e5957a",
              "x-rapidapi-host": "imdb-top-1000-movies-series.p.rapidapi.com",
            },
          }
        );
        const data = await response.json();
        if (data.result) {
          setTrending(data.result.slice(5, 30));
        } else {
          setTrending([]);
        }
      } catch (error) {
        console.log("error fetching the trending videos:", error);
      }
    };

    TrendingFetch();
  }, []);

  return (
    <section className="py-8">
      <div className="recently_header">
        <h1 className="recently_header text-[18px]">
          Trending Videos on BingeBox
        </h1>
      </div>
      <div className="grid grid-cols-8 gap-8">
        {Trend.map((result) => (
          <div className="" key={result.rank}>
            <div className="imag">
              <img src={result.Poster_Link} className="" alt="" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingVideos;
