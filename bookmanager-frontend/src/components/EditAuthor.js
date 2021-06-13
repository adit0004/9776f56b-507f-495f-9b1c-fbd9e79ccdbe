import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import utilities from "../js/utilities";

function EditAuthor() {
  const [author, setAuthor] = useState([]);
  const [updated, setUpdated] = useState(false);

  const handleSubmit = async (e) => {
      e.preventDefault();
    var success = await utilities.createAuthor(author);
    console.log(success);
    if (success) {
      setUpdated(true);
      setTimeout(() => {
        setUpdated(false);
      }, 2000);
    }
  };

  return (
    <>
      {updated ? (
        <div class="alert alert-success fade show" role="alert">
          <strong>Success</strong> Author created!
        </div>
      ) : (
        ""
      )}
      <form onSubmit={handleSubmit}>
        <div className="row mb-5">
          <div className="col-12">
            <NavLink to={"/"} className="navlink">
              &lt;&lt; Back to books list
            </NavLink>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h1>Add new author</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-3 d-flex align-items-center justify-content-end">
            First Name
          </div>
          <div className="col-9">
            <input
              className="form-control"
              value={author.first_name}
              onChange={(e) => setAuthor({ ...author, first_name: e.target.value })}
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-3 d-flex align-items-center justify-content-end">
            Last Name
          </div>
          <div className="col-9">
            <input
              className="form-control"
              value={author.last_name}
              onChange={(e) => setAuthor({ ...author, last_name: e.target.value })}
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-9 offset-3">
            <button className="btn btn-primary">Create</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default EditAuthor;
