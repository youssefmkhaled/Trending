import { Link } from "react-router-dom";

const Movies = ({ movies }) => {
  const renderedMovies = movies.map((movie) => {
    return (
      <div className="col-md-3 mb-3">
        <Link
          className="text-decoration-none text-white"
          to={`/itemdetails/${movie.id}/${movie.media_type}`}
        >
          <div className="position-relative">
            <img
              className="w-100"
              src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
              alt="..."
            />
            <h4 className="h6 my-2 text-center">{movie.title}</h4>
            <div className="vote p-2 position-absolute font-weight-bold">
              {movie.vote_average.toFixed(2)}
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return (
    <>
      <h2 className="my-4">Trending Movies Right Now</h2>
      <div className="row my-5">{renderedMovies}</div>
    </>
  );
};

export default Movies;
