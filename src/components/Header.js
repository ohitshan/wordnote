import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>
        <Link to="/">영단어 연습장</Link>
      </h1>
      <div>
        <Link to="/create_word">단어추가 </Link>
        <Link to="/create_movie">영화 추가</Link>
      </div>
    </div>
  );
}

export default Header;
