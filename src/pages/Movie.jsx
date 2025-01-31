import React from "react";

const MoviePage = () => {
  const handlePage = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/find/40000?external_source=tvdb_id&language=en",
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
  };

  handlePage();

  return (
    <div>
      <h2 className="text-orange-600">Movie</h2>
    </div>
  );
};

// creating the functionality for the filter

export default MoviePage;
