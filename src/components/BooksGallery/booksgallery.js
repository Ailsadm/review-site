import React, { useEffect, useState } from "react";
import Books from "../Books/books";

async function ReviewsFetch(title) {
  console.log(title)
  fetch('https://api.nytimes.com/svc/books/v3/reviews.json?title=The+Stand&api-key=bm5bc98roMnuuGGyPEBOObyprA9ft3kN')
    .then(response => response.json())
    .then(response => console.log(response))
}

async function BooksFetchResponse() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '7d2fefd150msh5be2ff45c4c2c13p1ab9fcjsnd200c7af4ce0',
      'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
    }
  };
  const response = await fetch('https://hapi-books.p.rapidapi.com/search/pinocchio', options)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      return response;
    });
  return response;
}

function BooksGallery() {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await BooksFetchResponse();


      setBookData(data);
    }
    fetchData();
  }, []);

  return (
    <div className="row container">
      <div className="heading">
        <h2>Books</h2>
      </div>
      <div className="card">
        {bookData.map(book => {
          const review = ReviewsFetch(book.name)
          return (
            <div key={book.book_id}>

              <img src={book.cover} alt={book.name} />
              {book.name}
              {book.authors}
            </div>
          )
        })}
      </div>
    </div>
  );

}

export default BooksGallery;
