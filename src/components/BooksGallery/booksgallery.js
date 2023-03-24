import React, { useEffect, useState } from "react";
import Books from "../Books/books.js";
import SortDropdown from "./SortResults";
import { Nav } from 'react-bootstrap'
import "./style.css";

let tempBookData = [
  {
    book_id: "58283080",
    position: "0",
    name: "1Q84",
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1627068858i/58283080.jpg",
    rating: 4,
    url: "https://www.goodreads.com/book/show/58283080-hook-line-and-sinker",
    authors: "Haruki Murakami",
    year: "2009",
  },
  {
    book_id: "56597885",
    name: "Beautiful World, Where Are You",
    category: "Fiction",
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1618329605l/56597885.jpg",
    url: "https://www.goodreads.com/choiceawards/best-fiction-books-2021",
    authors: "Sally Rooney",
    year: "2021",
  },
  {
    book_id: "58744977",
    name: "The Last Thing He Told Me",
    category: "Mystery & Thriller",
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1628623381l/58744977._SY475_.jpg",
    url: "https://www.goodreads.com/choiceawards/best-mystery-thriller-books-2021",
    authors: "Laura Dave",
    year: "2021",
  },
  {
    book_id: "58745185",
    name: "Malibu Rising",
    category: "Historical Fiction",
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1628625865l/58745185._SY475_.jpg",
    url: "https://www.goodreads.com/choiceawards/best-historical-fiction-books-2021",
    authors: "Taylor Jenkins Reid",
    year: "2021",
  },
  {
    book_id: "53138095",
    name: "A ​Court of Silver Flames (A Court of Thorns and Roses, #4)",
    category: "Fantasy",
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1602570691l/53138095.jpg",
    url: "https://www.goodreads.com/choiceawards/best-fantasy-books-2021",
    authors: "Sarah J. Maas",
    year: "2021",
  },
  {
    book_id: "54985743",
    name: "People We Meet on Vacation",
    category: "Romance",
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1618913179l/54985743.jpg",
    url: "https://www.goodreads.com/choiceawards/best-romance-books-2021",
    authors: "Emily Henry",
    year: "2021",
  },
  {
    book_id: "54493401",
    name: "Project Hail Mary",
    category: "Science Fiction",
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1597695864l/54493401.jpg",
    url: "https://www.goodreads.com/choiceawards/best-science-fiction-books-2021",
    authors: "Andy Weir",
    year: "2021",
  },
  {
    book_id: "55829194",
    name: "The Final Girl Support Group",
    category: "Horror",
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1614275199l/55829194.jpg",
    url: "https://www.goodreads.com/choiceawards/best-horror-books-2021",
    authors: "Grady Hendrix",
    year: "2021",
  },
  {
    book_id: "54305363",
    name: "Broken (In the Best Possible Way)",
    category: "Humor",
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1597856341l/54305363.jpg",
    url: "https://www.goodreads.com/choiceawards/best-humor-books-2021",
    authors: "Jenny Lawson",
    year: "2021",
  },
  {
    book_id: "55145261",
    name: "The Anthropocene Reviewed",
    category: "Nonfiction",
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1616514130l/55145261.jpg",
    url: "https://www.goodreads.com/choiceawards/best-nonfiction-books-2021",
    authors: "John Green",
    year: "2021",
  },
  {
    book_id: "54814676",
    name: "Crying in H Mart",
    category: "Memoir & Autobiography",
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1601937850l/54814676.jpg",
    url: "https://www.goodreads.com/choiceawards/best-memoir-autobiography-books-2021",
    authors: "Michelle Zauner",
    year: "2020",
  },
  {
    book_id: "43868109",
    name: "Empire of Pain: The Secret History of the Sackler Dynasty",
    category: "History & Biography",
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1611952534l/43868109.jpg",
    url: "https://www.goodreads.com/choiceawards/best-history-biography-books-2021",
    authors: "Patrick Radden Keefe",
    year: "2021",
  },
  {
    book_id: "57282218",
    name: "Lore Olympus: Volume One (Lore Olympus, #1)",
    category: "Graphic Novels & Comics",
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1614887007l/57282218.jpg",
    url: "https://www.goodreads.com/choiceawards/best-graphic-novels-comics-2021",
    authors: "Rachel Smythe",
    year: "2022",
  },
  {
    book_id: "56914101",
    name: "The Hill We Climb: An Inaugural Poem for the Country",
    category: "Poetry",
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1612178266l/56914101.jpg",
    url: "https://www.goodreads.com/choiceawards/best-poetry-books-2021",
    authors: "Amanda Gorman",
    year: "2020",
  },
  {
    book_id: "57190892",
    name: "The Spanish Love Deception",
    category: "Debut Novel",
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1614122544l/57190892._SY475_.jpg",
    url: "https://www.goodreads.com/choiceawards/best-debut-novel-2021",
    authors: "Elena Armas",
    year: "2020",
  },
  {
    book_id: "57812106",
    name: "Firekeeper's Daughter",
    category: "Young Adult Fiction",
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1619021348l/57812106._SY475_.jpg",
    url: "https://www.goodreads.com/choiceawards/best-young-adult-fiction-books-2021",
    authors: "Angeline Boulley",
    year: "2021",
  },
  {
    book_id: "54589790",
    name: "Rule of Wolves (King of Scars, #2)",
    category: "Young Adult Fantasy",
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1598133973l/54589790.jpg",
    url: "https://www.goodreads.com/choiceawards/best-young-adult-fantasy-books-2021",
    authors: "Leigh Bardugo",
    year: "2021",
  },
  {
    book_id: "57094644",
    name: "Daughter of the Deep",
    category: "Middle Grade & Children's",
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1622742517l/57094644.jpg",
    url: "https://www.goodreads.com/choiceawards/best-childrens-books-2021",
    authors: "Rick Riordan",
    year: "2021",
  },
];

async function BooksFetchResponse({ searchTerm }) {
  const formattedSearchTerm = searchTerm.trim().replace(/\s+/g, '+');
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "22071f1160msh3cb38f59ce444bbp11980ajsn519917436eb7",
      // 7d2fefd150msh5be2ff45c4c2c13p1ab9fcjsnd200c7af4ce0
      "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
    },
  };
  const response = await fetch(
    `https://hapi-books.p.rapidapi.com/search/${formattedSearchTerm}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      return response;
    });
  return response;
}
function BooksGallery({ searchTerm }) {
  const [bookData, setBookData] = useState([]);
  const [filterTerm, setFilterTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortField, setSortField] = useState("");
  const formattedSearchTerm = searchTerm.trim().replace(/\s+/g, '+');


  useEffect(() => {
    async function fetchData() {
      if (formattedSearchTerm) {
        // const data = await BooksFetchResponse(formattedSearchTerm);
        console.log(formattedSearchTerm);
        // setBookData(data);
      } else {
        setBookData(tempBookData);
      }
    }
    fetchData();
  }, [formattedSearchTerm]);

  function handleSort(field) {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  }

  // Sort the bookData based on the current sort field and order
  const sortedBooks = bookData.sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];

    if (aValue < bValue) {
      return sortOrder === "asc" ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortOrder === "asc" ? 1 : -1;
    }
    return 0;
  });
  return (
    <div className="">
      <div className="heading">
        <h2>Search results</h2>
        <p className="animated-paragraph">
          Search through thousands of books to find your next favourite
        </p>
        <Nav className="filterSort">
          <input
            type="text"
            placeholder="Filter the results..."
            value={filterTerm}
            onChange={(e) => setFilterTerm(e.target.value)}
          />
          <SortDropdown handleSort={handleSort} />
        </Nav>
      </div>
      {bookData ? (
        <div className="wrapper">
          {sortedBooks
            .filter((book) =>
              // book.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
              book.name.toLowerCase().includes(filterTerm.toLowerCase())
            )
            .map((book) => (
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
