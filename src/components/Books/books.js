import React from "react";
import "./style.css";

function Books({bookData}) {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{bookData.name} Book Title</h5>
        </div>
      </div>
    </div>
  );
}

export default Books;

