const axios = require("axios");
const SERVER_IP = "http://127.0.0.1:8000/";

const utilities = {
  fetchBooks: async function () {
    return await axios
      .get(SERVER_IP + "books")
      .then(function (response) {
        console.log(response.data);
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
        return error;
      });
  },

  fetchBook: async function (id) {
    return await axios
      .get(SERVER_IP + "book/" + id)
      .then(function (response) {
        console.log(response.data);
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  fetchAuthors: async function () {
    return await axios
      .get(SERVER_IP + "authors")
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
        return error;
      });
  },
  updateBook: async function (book) {
      return await axios.put(SERVER_IP + "book/" + book.book_id + "/", book, {headers:{'Content-Type':'application/json'}})
      .then((response) => {
          return response.status === 200
      })
      .catch(function (error) {
          console.log(error)
      })
  },
  createBook: async function(book) {
      console.log(book)
    return await axios.post(SERVER_IP + "book/", book, {headers:{'Content-Type':'application/json'}})
      .then((response) => {
          console.log(response.status)
          return response.status === 201
      })
      .catch(function (error) {
          console.log(error)
      })
  },
  createAuthor: async function(author) {
    return await axios.post(SERVER_IP + "author/", author, {headers:{'Content-Type':'application/json'}})
      .then((response) => {
          console.log(response.status)
          return response.status === 201
      })
      .catch(function (error) {
          console.log(error)
      })
  },
};

export default utilities;
