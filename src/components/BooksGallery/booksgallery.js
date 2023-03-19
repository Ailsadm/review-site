import React, { useEffect, useState } from "react";
import Books from "../Books/books.js";
import './style.css';

let tempBookData = [
  {
      "book_id": "58283080",
      "position": "1",
      "name": "Hook, Line, and Sinker (Bellinger Sisters, #2)",
      "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1627068858i/58283080.jpg",
      "rating": 4,
      "url": "https://www.goodreads.com/book/show/58283080-hook-line-and-sinker"
  },
  {
      "book_id": "58438583",
      "position": "2",
      "name": "One Italian Summer",
      "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1626799802i/58438583.jpg",
      "rating": 3.63,
      "url": "https://www.goodreads.com/book/show/58438583-one-italian-summer"
  },
  {
      "book_id": "58371432",
      "position": "3",
      "name": "The Book of Cold Cases",
      "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1624553583i/58371432.jpg",
      "rating": 3.8,
      "url": "https://www.goodreads.com/book/show/58371432-the-book-of-cold-cases"
  },
  {
      "book_id": "57693416",
      "position": "4",
      "name": "The Golden Couple",
      "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1633973719i/57693416.jpg",
      "rating": 4.01,
      "url": "https://www.goodreads.com/book/show/57693416-the-golden-couple"
  },
  {
      "book_id": "58064046",
      "position": "5",
      "name": "Gallant",
      "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1635862579i/58064046.jpg",
      "rating": 3.76,
      "url": "https://www.goodreads.com/book/show/58064046-gallant"
  },
  {
      "book_id": "58490567",
      "position": "6",
      "name": "The Diamond Eye",
      "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1641777418i/58490567.jpg",
      "rating": 4.3,
      "url": "https://www.goodreads.com/book/show/58490567-the-diamond-eye"
  },
  {
      "book_id": "57815107",
      "position": "7",
      "name": "The War of Two Queens (Blood and Ash, #4)",
      "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1635174962i/57815107.jpg",
      "rating": 4.07,
      "url": "https://www.goodreads.com/book/show/57815107-the-war-of-two-queens"
  },
  {
      "book_id": "60306208",
      "position": "8",
      "name": "A Million Kisses in Your Lifetime",
      "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1644500865i/60306208.jpg",
      "rating": 3.88,
      "url": "https://www.goodreads.com/book/show/60306208-a-million-kisses-in-your-lifetime"
  },
  {
      "book_id": "55004093",
      "position": "9",
      "name": "The Cartographers",
      "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1634915484i/55004093.jpg",
      "rating": 3.66,
      "url": "https://www.goodreads.com/book/show/55004093-the-cartographers"
  },
  {
      "book_id": "57693427",
      "position": "10",
      "name": "The Night Shift",
      "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1639384101i/57693427.jpg",
      "rating": 3.94,
      "url": "https://www.goodreads.com/book/show/57693427-the-night-shift"
  },
  {
      "book_id": "57007401",
      "position": "11",
      "name": "Dating Dr. Dil (If Shakespeare Was an Auntie, #1)",
      "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1642405300i/57007401.jpg",
      "rating": 3.67,
      "url": "https://www.goodreads.com/book/show/57007401-dating-dr-dil"
  },
  {
      "book_id": "58419108",
      "position": "12",
      "name": "Mr. Wrong Number (Mr. Wrong Number, #1)",
      "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1642686516i/58419108.jpg",
      "rating": 3.73,
      "url": "https://www.goodreads.com/book/show/58419108-mr-wrong-number"
  },
  {
    book_id: "58505877",
    position: "13",
    name: "Run Rose Run",
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1628699768i/58505877.jpg",
    rating: 3.85,
    url: "https://www.goodreads.com/book/show/58505877-run-rose-run",
  },
  {
    book_id: "58536005",
    position: "14",
    name: "The Club",
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1644230879i/58536005.jpg",
    rating: 3.35,
    url: "https://www.goodreads.com/book/show/58536005-the-club",
  },
  {
    book_id: "57899793",
    position: "15",
    name: "All My Rage",
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1629908086i/57899793.jpg",
    rating: 4.56,
    url: "https://www.goodreads.com/book/show/57899793-all-my-rage",
  },
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
    "https://hapi-books.p.rapidapi.com/month/2022/3",
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
        <p className="animated-paragraph">Search through thousands of books to find your next favourite</p>
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
