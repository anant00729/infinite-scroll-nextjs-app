import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchMovieList(pageNumber) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [movieList, setMovieList] = useState([]);
  const [lastPage] = useState(4);
  useEffect(() => {
    setLoading(true);
    setError(false);
    axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/now_playing`,
      params: {
        api_key: "578152be1392218f6d775ceb67b4e4f6",
        language: "en-US",
        page: pageNumber,
      },
    })
      .then((res) => {
        setTimeout(() => {
          setMovieList((preMovieList) => {
            return [...preMovieList, ...res?.data?.results];
          });
          setLoading(false);
        }, 2000);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [pageNumber]);
  return { error, loading, movieList, lastPage };
}
