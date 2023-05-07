import React from "react";
import { Link } from "react-router-dom";

const Tvshow = ({tv}) => {
  const renderedTv = tv.map((tv) => {
    return (
      <div className="col-md-3 mb-3">
        <Link
          className="text-decoration-none text-white"
          to={`/itemdetails/${tv.id}/${tv.media_type}`}
        >
          <div className="position-relative">
            <img
              className="w-100"
              src={"https://image.tmdb.org/t/p/w500" + tv.poster_path}
              alt="..."
            />
            <h4 className="h6 my-2 text-center">{tv.title}</h4>
            <div className="vote p-2 position-absolute font-weight-bold">
              {tv.vote_average.toFixed(2)}
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return (
    <>
      <h2 className="my-4">Trending Tv Shows Right Now</h2>
      <div className="row my-5">{renderedTv}</div>
    </>
  );
};

export default Tvshow;
