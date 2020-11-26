import { MovieContainer, MovieWrapper } from "../styles/Home.styles.js";
import Header from "../components/header";
import Movie from "../components/movie-item";
import useFetchMovieList from "../custom-hooks/useFetchMovieList";
import React, { useState, useEffect, useRef, useCallback } from "react";

export default function Home() {
  const [pageNumber, setPageNumber] = useState(1);

  const { error, loading, movieList, lastPage } = useFetchMovieList(pageNumber);

  const observer = useRef();
  const lastMovieRefCallback = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && pageNumber <= lastPage - 1) {
          setPageNumber((prePageNumber) => prePageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, lastPage]
  );

  useEffect(() => {
    setPageNumber(1);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "rgba(31, 41, 55, 1)",
        color: "white",
        position: "relative",
      }}
    >
      <Header />
      <MovieWrapper>
        <MovieContainer>
          {movieList.map((movie, index) => {
            const isLast = movieList.length - 1 === index;
            return (
              <div key={index} ref={isLast ? lastMovieRefCallback : null}>
                <Movie movie={movie} />
              </div>
            );
          })}
        </MovieContainer>
      </MovieWrapper>

      {loading ? (
        <div
          style={{
            width: "100%",
            height: "100px",
            textAlign: "center",
            marginTop: "16px",
          }}
        >
          <label style={{ fontSize: "24px" }}>Loading..</label>
        </div>
      ) : null}

      <div>{error && `Error occured: ${error.message}`}</div>
    </div>
  );
}
