import { Chip } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";

function Genres({
  type,
  selectedGenres,
  genres,
  setGenres,
  setSelectedGenres,
  setPage,
}) {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/genre/${type}/list`,
    params: { language: "en" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYmVjMWNjY2NhMzk4ZmExZTExZTQ4MjdmNWJjNDBiMiIsIm5iZiI6MTY1OTIwNzQ4NC4zMDgsInN1YiI6IjYyZTU3ZjNjODEzY2I2MDA1YTMxYTE3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rR-ut7EeNO7VhjxMaIKgbgEVbAqoykhpJ2QoMvkwhBY",
    },
  };

  const fetchGenres = async () => {
    const { data } = await axios.request(options);
    setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenres();
    return () => {
      setGenres([]);
    };
  }, []);

  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };

  return (
    <div style={{ padding: "6px 0" }}>
      {selectedGenres &&
        selectedGenres.map((genre) => (
          <Chip
            label={genre.name}
            style={{ margin: "2.5px" }}
            clickable
            size="small"
            key={genre.id}
            color="primary"
            onDelete={() => handleRemove(genre)}
          />
        ))}
      {genres &&
        genres.map((genre) => (
          <Chip
            label={genre.name}
            style={{ margin: "2.5px" }}
            clickable
            size="small"
            key={genre.id}
            onClick={() => handleAdd(genre)}
          />
        ))}
    </div>
  );
}

export default Genres;
