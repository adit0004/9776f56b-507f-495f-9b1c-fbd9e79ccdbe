import { useState, useEffect } from "react";
import utilities from "../js/utilities";
import { Link } from "react-router-dom";

function ListBooks() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    async function fetchData() {
      var tempBooks = await utilities.fetchBooks();
      if(tempBooks.length > 0) {
        tempBooks = tempBooks.map((x) => (
          <tr key={x.book_id}>
            <td>
              <Link to={"/book/" + x.book_id}>{x.name}</Link>
            </td>
            <td>
              <Link to={"/book/" + x.book_id} className="btn btn-primary">View</Link>
              <Link to={"/book/edit/" + x.book_id} className="ms-2 btn btn-primary">Edit</Link>
            </td>
          </tr>
        ));
        setBooks(tempBooks);
      } else {
        setBooks(<tr><td colSpan="2">No books found!</td></tr>)
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <div className="row">
        <div className="col-12">
          <h1>All Books:</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <table className="table table-bordered mt-3">
            <thead>
              <tr>
                <th>Title</th>
                <th style={{width:30+"%"}}>Actions</th>
              </tr>
            </thead>
            <tbody>{books}</tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ListBooks;
