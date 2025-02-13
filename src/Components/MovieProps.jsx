import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieProps = () => {
  // useparam and useState()
  const { id } = useParams();
  const [video, setVideo] = useState([]);

  // the fetch request for the short video
  useEffect(() => {
    const VideoPage = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=cdcab54e2ae4324c0ee5b7372e8f5179`,
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
        console.log(data.results[0]);
        if (data.results) {
          setVideo(data.results);
        } else {
          setVideo([]);
        }
      } catch (err) {
        console.log("'error:", err);
      }
    };

    VideoPage();
  }, [id]);

  return (
    <section className="">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${video.key}`}
        title={video.name}
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default MovieProps;
