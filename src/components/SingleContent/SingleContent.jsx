import { Badge } from "@mui/material";
import React from "react";
import { img_300, unavailable } from "../../Config/Config";
import "./SingleContent.css";

function SingleContent({ id, title, poster, date, media_type ,  vote_average  }) {
  vote_average = Math.floor(vote_average);
  return (
    <div className="media">
      <Badge color={vote_average>6?"primary":"secondary"} badgeContent={vote_average}/>
      <img className="poster" src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
      <b className="title">{title} </b>
      <span className="subTitle">
        {" "}
        {media_type == "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{date}</span>
      </span>
      
    </div>
  );
}

export default SingleContent;
