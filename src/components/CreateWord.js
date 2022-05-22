import React, { useRef } from "react";
import useFetch from "../hooks/useFetch";

function CreateWord() {
  const movies = useFetch("http://localhost:3001/movies");

  const engRef = useRef(null);
  const korRef = useRef(null);
  const movieRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const movie = movieRef.current.value;
    const eng = engRef.current.value;
    const kor = korRef.current.value;

    fetch(`http://localhost:3001/words/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        movie,
        eng,
        kor,
        isChecked: false,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("생성이 완료 되었습니다.");
      }
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        className="createform"
        style={{
          display: "flex",
          justifyItems: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
        onSubmit={onSubmit}
      >
        <label>ENG</label>
        <input type="text" placeholder="English" ref={engRef} />
        <label>KOR</label>
        <input type="text" placeholder="Korea" ref={korRef} />
        <label>Movie</label>
        <select ref={movieRef}>
          {movies.map((movie) => (
            <option key={movie.id} value={movie.movie}>
              {movie.movie}
            </option>
          ))}
        </select>
        <button>저장</button>
      </form>
    </div>
  );
}

export default CreateWord;
