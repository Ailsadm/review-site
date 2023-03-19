import React, { useState, useEffect } from "react";
import "./style.css";


function Reviews() {
  const [formData, setFormData] = useState({ name: "", rating: "", review: "" });
  const [reviewData, setReviewData] = useState([]);

  const changeHandle = (fieldName, value) => {
    setFormData(previousState => {
      return {
        ...previousState, [fieldName]: value
      }
    })
  }

  const submitFormData = () => {
    localStorage.setItem(formData.name, JSON.stringify(formData))

  }

  useEffect(() => {
    async function fetchReviews() {
      const response = await fetch(
        `https://api.nytimes.com/svc/books/v3/reviews.json?title=1Q84&api-key=SaoMEmUz0tfY5UL7hX6ivJM7EVAWm5zz`
      );
      const data = await response.json();
      setReviewData(data.results);
      console.log(data.results);
    }

    fetchReviews();
  }, []);

  return (
    <div>
      <form className="form">
        <h3>Add your review</h3>
        <input className="inputform"
          value={formData.name}
          name="name"
          type="text"
          placeholder='Name'
          onChange={(e) => changeHandle('name', e.target.value)} >
        </input>
        <input
          type="radio"
          name="rating"
          value="1"
          id="1"
          checked={formData.rating === "1"}
          onChange={(e) => changeHandle('rating', "1")}
        />
        <label htmlFor="regular">1</label>
        <input
          type="radio"
          name="rating"
          value="2"
          id="2"
          checked={formData.rating === "2"}
          onChange={(e) => changeHandle('rating', "2")}
        />
        <label htmlFor="regular">2</label>
        <input
          type="radio"
          name="rating"
          value="3"
          id="3"
          checked={formData.rating === "3"}
          onChange={(e) => changeHandle('rating', "3")}
        />
        <label htmlFor="regular">3</label>
        <input
          type="radio"
          name="rating"
          value="4"
          id="4"
          checked={formData.rating === "4"}
          onChange={(e) => changeHandle('rating', "4")}
        />
        <label htmlFor="regular">4</label>
        <input
          type="radio"
          name="rating"
          value="5"
          id="5"
          checked={formData.rating === "5"}
          onChange={(e) => changeHandle('rating', "5")}
        />
        <label htmlFor="regular">5</label>



        <textarea className="inputform"
          value={formData.review}
          name="review"
          type="textarea"
          placeholder='Review'
          onChange={(e) => changeHandle('review', e.target.value)}
        ></textarea>
        <button onClick={submitFormData} className="formsubmitbutton">Submit</button>
      </form>

      <div className="card-container">
        {reviewData.map((review) => (
          <div className="card" key={review.byline}>
            <h3>{review.book_title}</h3>
            <p>By {review.book_author}</p>
            <p>{review.summary}</p>
            <a href={review.url}>Read the full review</a>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Reviews;