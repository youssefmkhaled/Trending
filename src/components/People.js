import React from 'react'
import { Link } from 'react-router-dom';

const People = ({people}) => {
  const renderedPeople = people.map((people) => {
    return (
      <div className="col-md-3 mb-3">
        <Link
          className="text-decoration-none text-white"
          to={`/itemdetails/${people.id}/${people.media_type}`}
        >
          <div className="position-relative">
            <img
              className="w-100"
              src={"https://image.tmdb.org/t/p/w500" + people.profile_path}
              alt="..."
            />
            <h4 className="h6 my-2 text-center">{people.name}</h4>
          </div>
        </Link>
      </div>
    );
  });
  return (
    <>
      <h2 className="my-4">Trending People Right Now</h2>
      <div className="row my-5">{renderedPeople}</div>
    </>
  );
}

export default People