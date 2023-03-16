import React, { useEffect, useState } from "react";
import Books from "../Books/books.js";

let tempBookData = [
  {
      "book_id": 180617,
      "name": "Pinocchio",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327938097i/180617._SX50_.jpg",
      "url": "https://www.goodreads.com/book/show/180617.Pinocchio?from_search=true&from_srp=true&qid=fUoZJEvRFC&rank=1",
      "authors": [
          "Carlo Collodi"
      ],
      "rating": 3.85,
      "created_editions": 3197,
      "year": 1883
  },
  {
      "book_id": 533675,
      "name": "Pinocchio",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1561373472i/533675._SX50_.jpg",
      "url": "https://www.goodreads.com/book/show/533675.Pinocchio?from_search=true&from_srp=true&qid=fUoZJEvRFC&rank=2",
      "authors": [
          "Eugene Bradley Coco",
          "Ron Dias"
      ],
      "rating": 4.36,
      "created_editions": 7,
      "year": 1883
  },
  {
      "book_id": 180616,
      "name": "Walt Disney's Pinocchio",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1561047134i/180616._SX50_.jpg",
      "url": "https://www.goodreads.com/book/show/180616.Walt_Disney_s_Pinocchio?from_search=true&from_srp=true&qid=fUoZJEvRFC&rank=3",
      "authors": [
          "Steffi Fletcher",
          "Al Dempster"
      ],
      "rating": 4.3,
      "created_editions": 15,
      "year": 1940
  },
  {
      "book_id": 6059070,
      "name": "The Adventures Of Pinocchio",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1504075208i/6059070._SX50_.jpg",
      "url": "https://www.goodreads.com/book/show/6059070-the-adventures-of-pinocchio?from_search=true&from_srp=true&qid=fUoZJEvRFC&rank=4",
      "authors": [
          "Carlo Collodi",
          "Carlo Chiostri"
      ],
      "rating": 3.64,
      "created_editions": 1
  },
  {
      "book_id": 5985244,
      "name": "Pinocchio",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328384635i/5985244._SX50_.jpg",
      "url": "https://www.goodreads.com/book/show/5985244-pinocchio?from_search=true&from_srp=true&qid=fUoZJEvRFC&rank=5",
      "authors": [
          "Winshluss"
      ],
      "rating": 4.11,
      "created_editions": 21,
      "year": 2003
  },
  {
      "book_id": 6601048,
      "name": "Pinocchio, Vampire Slayer Volume One",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347613551i/6601048._SX50_.jpg",
      "url": "https://www.goodreads.com/book/show/6601048-pinocchio-vampire-slayer-volume-one?from_search=true&from_srp=true&qid=fUoZJEvRFC&rank=6",
      "authors": [
          "Van Jensen",
          "Dusty Higgins"
      ],
      "rating": 3.68,
      "created_editions": 3,
      "year": 2009
  },
  {
      "book_id": 943198,
      "name": "Pinocchio",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388456900i/943198._SY75_.jpg",
      "url": "https://www.goodreads.com/book/show/943198.Pinocchio?from_search=true&from_srp=true&qid=fUoZJEvRFC&rank=7",
      "authors": [
          "Tania Zamorsky",
          "Carlo Collodi",
          "Jacob Grimm"
      ],
      "rating": 4.2,
      "created_editions": 6,
      "year": 1883
  },
  {
      "book_id": 1495551,
      "name": "Walt Disney's Pinocchio and His Puppet Show Adventure",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1184257589i/1495551._SX50_.jpg",
      "url": "https://www.goodreads.com/book/show/1495551.Walt_Disney_s_Pinocchio_and_His_Puppet_Show_Adventure?from_search=true&from_srp=true&qid=fUoZJEvRFC&rank=8",
      "authors": [
          "Walt Disney Company"
      ],
      "rating": 4.16,
      "created_editions": 8,
      "year": 1973
  },
  {
      "book_id": 39354135,
      "name": "Pinocchio",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1521813118i/39354135._SY75_.jpg",
      "url": "https://www.goodreads.com/book/show/39354135-pinocchio?from_search=true&from_srp=true&qid=fUoZJEvRFC&rank=9",
      "authors": [
          "Maude Royer"
      ],
      "rating": 3.61,
      "created_editions": 8,
      "year": 2018
  },
  {
      "book_id": 18684373,
      "name": "Pinocchio by Pinocchio",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1394387941i/18684373._SX50_.jpg",
      "url": "https://www.goodreads.com/book/show/18684373-pinocchio-by-pinocchio?from_search=true&from_srp=true&qid=fUoZJEvRFC&rank=10",
      "authors": [
          "Michael Morpurgo",
          "Emma Chichester Clark"
      ],
      "rating": 3.8,
      "created_editions": 9,
      "year": 2013
  },
  {
      "book_id": 1243,
      "name": "A Million Little Lies",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1437768129i/1243._SY75_.jpg",
      "url": "https://www.goodreads.com/book/show/1243.A_Million_Little_Lies?from_search=true&from_srp=true&qid=fUoZJEvRFC&rank=11",
      "authors": [
          "James Pinocchio",
          "Pablo Fenjves"
      ],
      "rating": 3.52,
      "created_editions": 2,
      "year": 2006
  },
  {
      "book_id": 18622969,
      "name": "Den sanna historien om Pinocchios näsa",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1380785323i/18622969._SY75_.jpg",
      "url": "https://www.goodreads.com/book/show/18622969-den-sanna-historien-om-pinocchios-n-sa?from_search=true&from_srp=true&qid=fUoZJEvRFC&rank=12",
      "authors": [
          "Leif G.W. Persson"
      ],
      "rating": 3.36,
      "created_editions": 42,
      "year": 2013
  },
  {
      "book_id": 774784,
      "name": "Pinocchio in Venice",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1178238023i/774784._SY75_.jpg",
      "url": "https://www.goodreads.com/book/show/774784.Pinocchio_in_Venice?from_search=true&from_srp=true&qid=fUoZJEvRFC&rank=13",
      "authors": [
          "Robert Coover"
      ],
      "rating": 3.29,
      "created_editions": 9,
      "year": 1991
  },
  {
      "book_id": 8505701,
      "name": "Pinocchio, Vampire Slayer and the Great Puppet Theater",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347661568i/8505701._SY75_.jpg",
      "url": "https://www.goodreads.com/book/show/8505701-pinocchio-vampire-slayer-and-the-great-puppet-theater?from_search=true&from_srp=true&qid=fUoZJEvRFC&rank=14",
      "authors": [
          "Van Jensen",
          "Dusty Higgins",
          "Dustin Higgins"
      ],
      "rating": 3.78,
      "created_editions": 3,
      "year": 2010
  },
  {
      "book_id": 343036,
      "name": "Walt Disney's Pinocchio",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1173901716i/343036._SX50_.jpg",
      "url": "https://www.goodreads.com/book/show/343036.Walt_Disney_s_Pinocchio?from_search=true&from_srp=true&qid=fUoZJEvRFC&rank=15",
      "authors": [
          "Walt Disney Company"
      ],
      "rating": 4.11,
      "created_editions": 10,
      "year": 1940
  },
  {
      "book_id": 27130704,
      "name": "Pinocchio: The Origin Story",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1463042684i/27130704._SX50_.jpg",
      "url": "https://www.goodreads.com/book/show/27130704-pinocchio?from_search=true&from_srp=true&qid=fUoZJEvRFC&rank=16",
      "authors": [
          "Alessandro Sanna"
      ],
      "rating": 3.97,
      "created_editions": 4,
      "year": 2015
  },
  {
      "book_id": 21813301,
      "name": "Pinocchio, Vampire Slayer Complete Edition",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1400882712i/21813301._SX50_.jpg",
      "url": "https://www.goodreads.com/book/show/21813301-pinocchio-vampire-slayer-complete-edition?from_search=true&from_srp=true&qid=fUoZJEvRFC&rank=17",
      "authors": [
          "Van Jensen",
          "Dusty Higgins"
      ],
      "rating": 4.07,
      "created_editions": 2,
      "year": 2014
  },
  {
      "book_id": 35671524,
      "name": "The Pinocchio Brief",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1500005021i/35671524._SY75_.jpg",
      "url": "https://www.goodreads.com/book/show/35671524-the-pinocchio-brief?from_search=true&from_srp=true&qid=fUoZJEvRFC&rank=18",
      "authors": [
          "Abi Silver"
      ],
      "rating": 4.04,
      "created_editions": 5,
      "year": 2017
  },
  {
      "book_id": 24502809,
      "name": "Pinocchio",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1432365283i/24502809._SY75_.jpg",
      "url": "https://www.goodreads.com/book/show/24502809-pinocchio?from_search=true&from_srp=true&qid=fUoZJEvRFC&rank=19",
      "authors": [
          "Ken T. Seth"
      ],
      "rating": 4.16,
      "created_editions": 2,
      "year": 2015
  },
  {
      "book_id": 2228926,
      "name": "Pinocchio, the Boy",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1442019040i/2228926._SX50_.jpg",
      "url": "https://www.goodreads.com/book/show/2228926.Pinocchio_the_Boy?from_search=true&from_srp=true&qid=fUoZJEvRFC&rank=20",
      "authors": [
          "Lane Smith"
      ],
      "rating": 3.51,
      "created_editions": 4,
      "year": 2002
  }
]

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
      // const data = await BooksFetchResponse();


      setBookData(tempBookData);
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
         if (bookData) {
          return (
            <div className="wrapper">
              <h2>Books</h2>
              {bookData.map(book => (
                <Books key={book.book_id} bookData={book}></Books>
              ))}
            </div>
          );
        } else {
          return <div>Loading...</div>;
        }
        })}
      </div>
    </div>
  );

}

export default BooksGallery;
