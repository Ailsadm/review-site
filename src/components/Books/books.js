import React from "react";
import "./style.css";

function Books(props) {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.name} Book Title</h5>
        </div>
      </div>
    </div>
  );
}

export default Books;

