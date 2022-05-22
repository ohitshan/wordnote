import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movie from "./components/Movie";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import CreateWord from "./components/CreateWord";
import CreateMovie from "./components/CreateMovie";
/*json-server --watch ./src/db/data.json --port 3001 서버키는법*/
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:movie" element={<Movie />} />
        <Route path="/create_word" element={<CreateWord />} />
        <Route path="/create_movie" element={<CreateMovie />} />
      </Routes>
    </Router>
  );
}

export default App;
