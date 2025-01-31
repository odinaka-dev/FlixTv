import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
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
          setRecently(data.results.slice(0, 4));
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

  return (
    <section className="">
      <div className="">
        <h1 className="recently_header text-[18px] border-b-[2px] border-b-[blue] inline-block pb-2">
          Most watched Movies on Bingebox
        </h1>
        <section className="grid grid-cols-4 gap-8 items-center my-4">
          {recently.map((results) => (
            <div className="flex gap-2 items-center text-sm" key={results.id}>
              <div className="image_poster w-[40%]">
                <img
                  className="rounded-lg"
                  src={`https://image.tmdb.org/t/p/w500${results.poster_path}`}
                  alt=""
                />
              </div>
              <div className="recents_info">
                <p>{results.original_title}</p>
                <div className="flex flex-wrap gap-2">
                  {results.genre_ids.slice(0, 2).map((genreId) => {
                    // Find the genre name for this genreId
                    const matchingGenre = genre.find((g) => g.id === genreId);
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
            </div>
          ))}
        </section>
      </div>
    </section>
  );
};

export default Recently;
