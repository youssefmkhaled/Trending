import React, { Fragment } from "react";
import MediaItem from "./MediaItem";

const Home = ({ movies, tv, people }) => {
  const renderedMovies = movies.slice(0, 10).map((movie) => {
    return (
      <Fragment key={movie.id}>
        <MediaItem item={movie} />
      </Fragment>
    );
  });
  const renderedTv = tv.slice(0, 10).map((tv) => {
    return (
      <Fragment key={tv.id}>
        <MediaItem item={tv} />
      </Fragment>
    );
  });
  const renderedPeople = people.slice(0, 10).map((person) => {
    return (
      <Fragment key={person.id}>
        <MediaItem item={person} />
      </Fragment>
    );
  });

 
    return (
      <>
        <div className="row py-5">
          <div className="col-md-4 d-flex align-items-center">
            <div>
              <div className="brdr w-25 mb-3"></div>
              <h2 className="h4">Trending</h2>
              <h2 className="h4">Movies Right now</h2>
              <p className="text-muted">Top Trending Movies this week</p>
              <div className="brdr w-100 mb-3"></div>
            </div>
          </div>
          {renderedMovies}
        </div>
        <div className="row py-5">
          <div className="col-md-4 d-flex align-items-center">
            <div>
              <div className="brdr w-25 mb-3"></div>
              <h2 className="h4">Trending</h2>
              <h2 className="h4">TV Right now</h2>
              <p className="text-muted">Top Trending TV this week</p>
              <div className="brdr w-100 mb-3"></div>
            </div>
          </div>
          {renderedTv}
        </div>
        <div className="row py-5">
          <div className="col-md-4 d-flex align-items-center">
            <div>
              <div className="brdr w-25 mb-3"></div>
              <h2 className="h4">Trending</h2>
              <h2 className="h4">People Right now</h2>
              <p className="text-muted">Top Trending People this week</p>
              <div className="brdr w-100 mb-3"></div>
            </div>
          </div>
          {renderedPeople}
        </div>
      </>
    );
};

export default Home;
