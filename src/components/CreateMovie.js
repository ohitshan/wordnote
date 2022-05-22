import React, { useRef } from "react";

function CreateMovie() {
  const movieRef = useRef(null);

  const addMovie = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/movies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        movie: movieRef.current.value,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("생성이 완료 되었습니다.");
      }
    });
  };
  return (
    <form onSubmit={addMovie}>
      <div>
        <label>Movie</label>
        <input type="text" placeholder="English" ref={movieRef} />
      </div>
      <button>저장</button>
    </form>
  );
}

export default CreateMovie;
