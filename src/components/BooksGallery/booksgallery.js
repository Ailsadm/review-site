import React, { useEffect, useState } from "react";
import Books from "../Books/books.js";
import Reviews from "../Reviews/fetchReviews";
import "./style.css";

let tempBookData = [
  
];

async function BooksFetchResponse() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "7d2fefd150msh5be2ff45c4c2c13p1ab9fcjsnd200c7af4ce0",
      "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
    },
  };
  const response = await fetch(
    "https://hapi-books.p.rapidapi.com/top/2021",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      return response;
    });
  return response;
}

function BooksGallery() {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // const data = await BooksFetchResponse();

      setBookData(tempBookData);
    }
    fetchData();
  }, []);

  return (
    <div className="row container">
      <div className="heading">
        <h2>Search Books</h2>
        <p className="animated-paragraph">
          Search through thousands of books to find your next favourite
        </p>
      </div>
      {/* { bookData && 'myMap...' } */}
      {bookData ? (
        <div className="wrapper">
          {bookData.map((book) => (
            <Books key={book.book_id} bookData={book}></Books>
          ))}
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default BooksGallery;
