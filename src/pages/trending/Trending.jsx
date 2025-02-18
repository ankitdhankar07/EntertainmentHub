import axios from "axios";
import React, { useEffect, useState } from "react";
import CustomPagination from "../../components/Pagination/CustomPagination";
import SingleContent from "../../components/SingleContent/SingleContent";
import './Trending.css';
function Trending() {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/trending/all/day",
    params: { language: "en-US" , page:page },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYmVjMWNjY2NhMzk4ZmExZTExZTQ4MjdmNWJjNDBiMiIsIm5iZiI6MTY1OTIwNzQ4NC4zMDgsInN1YiI6IjYyZTU3ZjNjODEzY2I2MDA1YTMxYTE3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rR-ut7EeNO7VhjxMaIKgbgEVbAqoykhpJ2QoMvkwhBY",
    },
  };

  const fetchTrending = async () => {
    let { data } = await axios.request(options);
    setContent(data.results);
  };

  useEffect(() => {
    fetchTrending();
  }, [page]);

  return (
    <div>
      <div className="pageTitle">Trending</div>
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              title={c.title || c.name}
              poster={c.poster_path}
              date={c.release_date || c.first_air_date}
              media_type={c.media_type}
              vote_average = {c.vote_average}
            />
          ))}
      </div>
      <CustomPagination setPage={setPage}/>
    </div>
  );
}

export default Trending;
