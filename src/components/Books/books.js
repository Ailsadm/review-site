import React from "react";
import "./style.css";

function Books({ bookData }) {
  console.log(bookData);
  async function ReviewsFetch() {
    // console.log();
    //SaoMEmUz0tfY5UL7hX6ivJM7EVAWm5zz
    //old 22071f1160msh3cb38f59ce444bbp11980ajsn519917436eb7
    fetch(
      `https://api.nytimes.com/svc/books/v3/reviews.json?title=${bookData.name}&api-key=SaoMEmUz0tfY5UL7hX6ivJM7EVAWm5zz`
    )
      .then((response) => response.json())
      .then((response) => console.log(response));
  }
  return (
    <div className="row container">
      <div className="card">
        <div>
          <img src={bookData.cover} alt={bookData.name} />
          <p>{bookData.name}</p>
          <p>{bookData.authors}</p>
         
        <p>test</p>
          <button onClick={ReviewsFetch}>Reviews</button>
        </div>
      </div>
    </div>
  );
}

export default Books;