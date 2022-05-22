import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Word, { IWord } from "./Word";

function MovieList() {
  const [search, setSearch] = useState("");
  const [newWord, setNewWord] = useState([]);
  const words = useFetch(`http://localhost:3001/words`);
  const movies = useFetch("http://localhost:3001/movies");
  console.log(newWord);
  useEffect(() => {
    onFilter();
  }, [search]);

  const onFilter = () => {
    setNewWord([]);
    if (search.length === 0) return;
    let Filteredword = words.filter((word) => word.eng.includes(search));
    setNewWord(Filteredword);
  };
  console.log(search);
  const onSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <br />
      <ul style={{ display: "flex", justifyContent: "space-evenly" }}>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.movie}`}>{movie.movie}</Link>
          </li>
        ))}
      </ul>
      <br />
      <br />
      <div style={{ textAlign: "center" }}>
        <label>단어검색</label>
        <input onChange={onSearch} />
        <br />
        <table>
          <tbody>
            {newWord.map((word) => (
              <Word word={word} key={word.id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MovieList;
