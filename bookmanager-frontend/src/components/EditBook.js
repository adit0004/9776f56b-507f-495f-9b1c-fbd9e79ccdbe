import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import utilities from "../js/utilities";

function EditBook(params) {
  const [book, setBook] = useState({ name: "", author: "", isbn: "" });
  const [authors, setAuthors] = useState([]);
  const [updated, setUpdated] = useState(false);
  let { bookId } = useParams();

  useEffect(() => {
    if (params.create === undefined) {
      async function fetchData() {
        var tempBook = await utilities.fetchBook(bookId);
        setBook(tempBook);
      }
      fetchData();
    }

    async function fetchAuthors() {
      var tempAuthors = await utilities.fetchAuthors();
      if(tempAuthors.length > 0 ) {
      tempAuthors = tempAuthors.map((x) => (
        <option value={x.author_id} key={x.author_id}>
          {x.first_name + " " + x.last_name}
        </option>
      ));
      setAuthors(tempAuthors);
      }
    }
    fetchAuthors();
  }, [bookId]);

  function getAuthorName() {
    if (book != undefined && book.author != undefined)
      return book.author.first_name + " " + book.author.last_name;
    return "";
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (params.create === undefined) {
      var author_id = book.author.author_id;
      var tempBook = book;
      tempBook.author = author_id;
      var success = await utilities.updateBook(book);
      console.log(success);
      if (success) {
        setUpdated(true);
        setTimeout(() => {
          setUpdated(false);
        }, 2000);
      }
    } else {
      var tempBook = book;
      console.log(tempBook);
      var success = await utilities.createBook(book);
      console.log(success);
      if (success) {
        setUpdated(true);
        setTimeout(() => {
          setUpdated(false);
        }, 2000);
      }
    }
  };

  return (
    <>
      {updated && params.create === undefined ? (
        <div class="alert alert-success fade show" role="alert">
          <strong>Success</strong> Book updated!
        </div>
      ) : (
        ""
      )}
      {updated && params.create !== undefined ? (
        <div class="alert alert-success fade show" role="alert">
          <strong>Success</strong> Book created!
        </div>
      ) : (
        ""
      )}
      <form onSubmit={handleSubmit}>
        <div className="row mb-5">
          <div className="col-12">
            <NavLink to={"/"} className="navlink">
              &lt;&lt; Back to list
            </NavLink>
            {params.create === undefined ? (
              <NavLink to={"/book/" + book.book_id} className="navlink ms-2">
                View
              </NavLink>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h1>{params.create === undefined ? "Edit" : "Create"} book</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-3 d-flex align-items-center justify-content-end">
            Title
          </div>
          <div className="col-9">
            <input
              className="form-control"
              value={book.name}
              onChange={(e) => setBook({ ...book, name: e.target.value })}
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-3 d-flex align-items-center justify-content-end">
            ISBN
          </div>
          <div className="col-9">
            <input
              className="form-control"
              value={book.isbn}
              onChange={(e) => setBook({ ...book, isbn: e.target.value })}
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-3 d-flex align-items-center justify-content-end">
            Author
          </div>
          <div className="col-9">
            <select
              value={book.author_id}
              className="form-control"
              onChange={(e) => setBook({ ...book, author: e.target.value })}
            >
              <option value="" disabled hidden>
                Select author
              </option>
              {authors}
            </select>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-9 offset-3">
            <button className="btn btn-primary">{params.create === undefined ? 'Update' : 'Create'}</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default EditBook;
