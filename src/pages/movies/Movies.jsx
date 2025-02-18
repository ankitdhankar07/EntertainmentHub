import axios from "axios";
import React, { useEffect, useState } from "react";
import Genres from "../../components/Genres";
import CustomPagination from "../../components/Pagination/CustomPagination";
import SingleContent from "../../components/SingleContent/SingleContent";
import useGenre from "../../hooks/useGenre";

function Movies() {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [noOfPages, setNumOfPages] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genreForUrl = useGenre(selectedGenres);

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie",
    params: {
      language: "en-US",
      page: "1",
      with_genres: genreForUrl,
    },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYmVjMWNjY2NhMzk4ZmExZTExZTQ4MjdmNWJjNDBiMiIsIm5iZiI6MTY1OTIwNzQ4NC4zMDgsInN1YiI6IjYyZTU3ZjNjODEzY2I2MDA1YTMxYTE3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rR-ut7EeNO7VhjxMaIKgbgEVbAqoykhpJ2QoMvkwhBY",
    },
  };

  const fetchTrending = async () => {
    let { data } = await axios.request(options);
    setContent(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    fetchTrending();
  }, [page, genreForUrl]);

  return (
    <div>
      <div className="pageTitle">Movies</div>
      <Genres
        type="movie"
        selectedGenres={selectedGenres}
        genres={genres}
        setGenres={setGenres}
        setSelectedGenres={setSelectedGenres}
        setPage={setPage}
      />
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              title={c.title || c.name}
              poster={c.poster_path}
              date={c.release_date || c.first_air_date}
              media_type="movie"
              vote_average={c.vote_average}
            />
          ))}
      </div>
      {noOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={noOfPages} />
      )}
    </div>
  );
}

export default Movies;
