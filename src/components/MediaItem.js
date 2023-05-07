import React from "react";
import { Link } from "react-router-dom";

const MediaItem = ({ item }) => {
  return (
    <>
      <div className="col-md-2">
        <Link
          className="text-decoration-none text-white"
          to={`/itemdetails/${item.id}/${item.media_type}`}
        >
          <div className="position-relative">
            {item.poster_path ? (
              <img
                className="w-100"
                src={"https://image.tmdb.org/t/p/w500" + item?.poster_path}
                alt="..."
              />
            ) : (
              <img
                className="w-100 rounded"
                src={"https://image.tmdb.org/t/p/w500" + item?.profile_path}
                alt="..."
              />
            )}

            <h4 className="h6 my-2 mb-4">
              {item?.title}
              {item?.name}
            </h4>

            {item.vote_average ? (
              <div className="vote p-2 position-absolute font-weight-bold">
                {item?.vote_average.toFixed(2)}
              </div>
            ) : (
              ""
            )}
          </div>
        </Link>
      </div>
    </>
  );
};

export default MediaItem;
