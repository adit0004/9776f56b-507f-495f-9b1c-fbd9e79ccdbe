import ListBooks from "./components/ListBooks";
import EditBook from "./components/EditBook";
import BookDetails from "./components/BookDetails";
import Navigation from "./components/Navigation";
import EditAuthor from "./components/EditAuthor";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  NavLink,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Book Manager
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              data-target="#navbarNav"
              data-toggle="collapse"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink
                    to={"/"}
                    className="nav-link"
                    activeClassName="active"
                    exact
                  >
                    List Books
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/book/create"} className="nav-link"
                  activeClassName="active">
                    Create Book
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/author"} className="nav-link"
                  activeClassName="active">
                    Create Author
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container mt-5">
          <Switch>
            <Route path="/book/edit/:bookId">
              <EditBook />
            </Route>
            <Route path="/book/create">
              <EditBook create="true" />
            </Route>
            <Route path="/book/:bookId">
              <BookDetails />
            </Route>
            <Route path="/author">
              <EditAuthor />
            </Route>
            <Route exact path="/">
              <ListBooks />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
