import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Tvshow from "./components/Tvshow";
import People from "./components/People";
import Notfound from "./components/Notfound";
import ItemDetails from "./components/ItemDetails";
import { useEffect, useState } from "react";
import axios from "axios";
// 7e77eeccc2cab16be50d42b3937f0c2b

function App() {
  const [movies, setMovies] = useState([]);
  const [tv, setTv] = useState([]);
  const [people, setPeople] = useState([]);

  const getTrending = async (mediaItem, callBack) => {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/${mediaItem}/week?api_key=7e77eeccc2cab16be50d42b3937f0c2b`
    );
    callBack(data.results);
  };
  useEffect(() => {
    getTrending("movie", setMovies);
    getTrending("tv", setTv);
    getTrending("person", setPeople);
  }, []);

  const searchItem = (searchTerm) => {
    if (searchTerm.length > 0) {
      const filtered = movies.filter((movie) => {
        return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setMovies(filtered);
    } else {
      getTrending("movie", setMovies);
    }
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Layout searchItem={searchItem} />}>
            <Route
              path="/home"
              element={<Home movies={movies} tv={tv} people={people} />}
            />
            <Route path="movies" element={<Movies movies={movies} setMovies={setMovies}/>} />
            <Route path="tvshow" element={<Tvshow tv={tv} />} />
            <Route path="people" element={<People people={people} />} />
            <Route
              path="/itemdetails/:id/:media_type"
              element={<ItemDetails />}
            />
            <Route path="/Trending" element={<Navigate to="/home" />} />
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="*" element={<Notfound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
