import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./style.css";
import ReviewForm from "./reviewsform";

function FetchReviews() {
  const [reviewData, setReviewData] = useState([]);
  const [reviews, setReviews] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  let bookTitle = searchParams.get("bookTitle").replaceAll(" ", "+");
  console.log(bookTitle);

  //     //SaoMEmUz0tfY5UL7hX6ivJM7EVAWm5zz
  //     //old 22071f1160msh3cb38f59ce444bbp11980ajsn519917436eb7

  const fetchReviews = async () => {
    const response = await fetch(
      `https://api.nytimes.com/svc/books/v3/reviews.json?title=${bookTitle}&api-key=SaoMEmUz0tfY5UL7hX6ivJM7EVAWm5zz`
    );
    const data = await response.json();
    setReviewData(data.results);
    console.log(data.results);
  };

  useEffect(() => {
    fetchReviews();
    const storedReviews = JSON.parse(localStorage.getItem(bookTitle)) || [];
    setReviews(storedReviews);
  }, []);

  const submitFormData = (formData) => {
    const bookReviews = JSON.parse(localStorage.getItem(bookTitle)) || [];
    bookReviews.push(formData);
    localStorage.setItem(bookTitle, JSON.stringify(bookReviews));
    setReviews(bookReviews);
  };

  return (
    <div>
      <div className="wrapperReviews">
        <div>
          <ReviewForm submitHandler={submitFormData} />
        </div>
        {reviewData.map((review) => (
          <div key={review.byline} className="review">
            <h4>Title: {review.book_title}</h4>
            <p>Author: {review.book_author}</p>
            <p>Review: {review.summary}</p>
            <p>Reviewed by: {review.byline}</p>
            <p>Date reviewed: {review.publication_dt}</p>
            <a href={review.url}>Read the full review</a>
            <hr />
          </div>
        ))}
      </div>
      {reviews.map((r, i) => {
        // generate uuid
        // const ratingData = JSON.parse(r[1]);
        bookTitle = bookTitle.split("+").join(" ");
        return (
          <div className="userDivReview" key={i}>
            <h4>{bookTitle}</h4>
            <div>Name: {r.name}</div>
            <div>Rating: {r.rating}/5</div>
            <div>Review: {r.review}</div>
          </div>
        );
      })}
    </div>
  );
}

export default FetchReviews;
