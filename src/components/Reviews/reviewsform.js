import React, { useState } from "react";
import "./style.css";

function ReviewsForm({ submitHandler }) {
  const [formData, setFormData] = useState({
    name: "",
    rating: "",
    review: "",
  });

  const changeHandle = (fieldName, value) => {
    setFormData((previousState) => {
      return {
        ...previousState,
        [fieldName]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitHandler(formData);
  };


  return (
    <div className="formDiv">
      <form className="form" onSubmit={handleSubmit}>
        <h3>Add your review</h3>
        <input
          required
          className="inputform"
          value={formData.name}
          name="name"
          type="text"
          placeholder="Name"
          onChange={(e) => changeHandle("name", e.target.value)}
        ></input>
        <div className="left"><input
          type="radio"
          name="rating"
          value="1"
          id="1"
          checked={formData.rating === "1"}
          onChange={(e) => changeHandle("rating", "1")}
        />
          <label htmlFor="regular">1</label>
          <input
            required
            type="radio"
            name="rating"
            value="2"
            id="2"
            checked={formData.rating === "2"}
            onChange={(e) => changeHandle("rating", "2")}
          />
          <label htmlFor="regular">2</label>
          <input
            required
            type="radio"
            name="rating"
            value="3"
            id="3"
            checked={formData.rating === "3"}
            onChange={(e) => changeHandle("rating", "3")}
          />
          <label htmlFor="regular">3</label>
          <input
            required
            type="radio"
            name="rating"
            value="4"
            id="4"
            checked={formData.rating === "4"}
            onChange={(e) => changeHandle("rating", "4")}
          />
          <label htmlFor="regular">4</label>
          <input
            required
            type="radio"
            name="rating"
            value="5"
            id="5"
            checked={formData.rating === "5"}
            onChange={(e) => changeHandle("rating", "5")}
          /><label htmlFor="regular">5</label></div>


        <textarea
          required
          className="inputform"
          value={formData.review}
          name="review"
          type="textarea"
          placeholder="Review"
          onChange={(e) => changeHandle("review", e.target.value)}
        ></textarea>
        <button type="submit" className="formsubmitbutton">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ReviewsForm;
