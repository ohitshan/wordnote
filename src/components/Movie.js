import React from "react";
import Word, { IWord } from "./Word";
import useFetch from "../hooks/useFetch";
import { useParams, useNavigate } from "react-router-dom";
import { IMovie } from "./MovieList";

function Movie() {
  const navigate = useNavigate();
  const { movie } = useParams();
  const words = useFetch(`http://localhost:3001/words?movie=${movie}`);
  const movieId = useFetch(`http://localhost:3001/movies?movie=${movie}`);

  const del = () => {
    if (
      window.confirm("페이지와 모든 단어가 삭제 됩니다. 삭제 하시겠습니까?")
    ) {
      navigate("/");
      fetch(`http://localhost:3001/movies/${movieId[0].id}`, {
        method: "DELETE",
      });
      words.forEach((word) => {
        fetch(`http://localhost:3001/words/${word.id}`, {
          method: "DELETE",
        });
      });
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Movie {movie}</h2>
        <button onClick={del}>지우기</button>
      </div>
      <table>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Movie;
