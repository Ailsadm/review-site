// import React from "react";
// // copied the style.css from booksGallery as this is where we re displaying the results
// import "./style.css";
// import Reviews from "../Reviews/Reviews";

// function Books({ bookData }) {
//   console.log(bookData);
//   async function ReviewsFetch() {
//     // console.log();
//     //SaoMEmUz0tfY5UL7hX6ivJM7EVAWm5zz
//     //old 22071f1160msh3cb38f59ce444bbp11980ajsn519917436eb7
//     // let bookTitle = bookData.name.split(" ").join("+")
//     let bookTitle = bookData.name.replaceAll(' ', '+');

//     fetch(
//       `https://api.nytimes.com/svc/books/v3/reviews.json?title=${bookTitle}&api-key=SaoMEmUz0tfY5UL7hX6ivJM7EVAWm5zz`
//     )
//       .then((response) => response.json())
//       .then((response) => console.log(response));
//   }
//   return (
//     <div className="row container">
//       <div className="card">
//         <div>
//           <img className="bookCover" src={bookData.cover} alt={bookData.name} />
//           <p>Name: {bookData.name}</p>
//           <p>Author: {bookData.authors}</p>
//           <p>Year: {bookData.year}</p>
//           {/* /*<p>Goodreads link: {bookData.url}</p>*/}
//           <button onClick={ReviewsFetch}>Reviews</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Books;

import React from 'react';
import { useNavigate } from "react-router-dom";
import "./style.css";

function Books({ bookData }) {
  const navigate = useNavigate();
  let bookTitle = bookData.name

  const handleClick = e => {
    navigate(`/reviews?bookTitle=${bookTitle}`);
    console.log(`${bookTitle}`);
  }
  console.log(bookData);
  return (
    <div className=" container">
      <div className="card row col-lg-3 col-md-6 col-sm-12">
        <div>
          <img className="bookCover" src={bookData.cover} alt={bookData.name} />
          <p>Name: {bookData.name}</p>
          <p>Author: {bookData.authors}</p>
          <p>Year: {bookData.year}</p>
          <button onClick={handleClick}>Reviews</button>
        </div>
      </div>
    </div>
  );
}

export default Books;
