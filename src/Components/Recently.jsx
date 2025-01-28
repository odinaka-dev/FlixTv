import React, { useState, useEffect } from "react";

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

  useEffect(() => {
    const fetchData = async () => {
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
        // console.log(data.result.slice(0, 10));
        const FirstTenItems = data.result.slice(0, 5);
        console.log(FirstTenItems);
        if (FirstTenItems) {
          setRecently(FirstTenItems);
        } else {
          setRecently([]);
        }
      } catch (error) {
        console.error("error fetching the recently updated:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="">
      <div className="">
        <h1 className="recently_header text-[18px] border-b-[2px] border-b-[blue] inline-block pb-2">
          Recently Updated Movies
        </h1>
        <section className="grid grid-cols-5 gap-8 items-center my-4">
          {recently.map((result) => (
            <div className="flex gap-2 items-center text-sm" key={result.rank}>
              <div className="image_poster">
                <img src={result.Poster_Link} alt="" />
              </div>
              <div className="recents_info">
                <p>{result.Series_Title}</p>
                <p>{result.Genre}</p>
                <p>{result.IMDB_Rating}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
};

export default Recently;
