import React from "react";
import { MovieItem } from "./styles";

export default function Movie({ movie: { title, poster_path } }) {
  return (
    <MovieItem>
      <img
        style={{
          width: "100%",
          display: "block",
        }}
        src={`http://image.tmdb.org/t/p/w400${poster_path}`}
        alt="img_1"
      />
      <label style={{ margin: "16px" }}>{title}</label>
    </MovieItem>
  );
}
