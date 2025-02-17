import React from "react";
import { img_300, unavailable } from "../../Config/Config";
import "./SingleContent.css";

function SingleContent({ id, title, poster, date, media_type }) {
  return (
    <div className="media">
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
