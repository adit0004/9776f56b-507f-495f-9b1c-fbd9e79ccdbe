import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import utilities from "../js/utilities";

function BookDetails() {
  const [book, setBook] = useState({});
  let { bookId } = useParams();

  useEffect(() => {
    async function fetchData() {
      var tempBook = await utilities.fetchBook(bookId);
      setBook(tempBook);
    }
    fetchData();
  }, [bookId]);

  function getAuthorName() {
    if (book != undefined && book.author != undefined)
      return book.author.first_name + " " + book.author.last_name;
    return "";
  }

  return (
    <>
        <div className="row mb-5">
            <div className="col-12">
                <NavLink to={'/'} className="navlink">&lt;&lt; Back to list</NavLink>
                <NavLink to={'/book/edit/'+book.book_id} className="navlink ms-2">Edit</NavLink>
            </div>
        </div>
      <div className="row">
        <div className="col-12">
          <h1>{book.name}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <p className="pb-0 mb-0">ISBN: {book.isbn}</p>
          <p>Author: {getAuthorName()}</p>
        </div>
      </div>
    </>
  );
}

export default BookDetails;
