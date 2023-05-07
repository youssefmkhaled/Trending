import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark navstyle ">
        <div className="container ">
          <Link to="/" className="navbar-brand ">
            <h3>Trending App</h3>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link to="/movies" className="nav-link active">
                  Movies
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/tvshow" className="nav-link active">
                  Tvshow
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/people" className="nav-link active">
                  People
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
