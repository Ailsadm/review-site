import React from "react";
import "./style.css";

function Books({ bookData }) {
  console.log(bookData);
  return (
    <div className="row container">
      <div className="heading">

      </div>
      <div className="wrapper">
        <div className="card">
          <div>
            <img src={bookData.cover} alt={bookData.name} />
            {bookData.name}
            {bookData.authors}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Books;

