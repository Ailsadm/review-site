import React, { useState, useEffect } from "react";
import "./style.css";
import ReviewForm from "./reviews";

function Reviews({ bookData }) {
    const [reviewData, setReviewData] = useState([]);

    const fetchReviews = async () => {
        const response = await fetch(
            `https://api.nytimes.com/svc/books/v3/reviews.json?title=1Q84&api-key=SaoMEmUz0tfY5UL7hX6ivJM7EVAWm5zz`
        );
        const data = await response.json();
        setReviewData(data.results);
        console.log(data.results);
    }

    useEffect(() => {
        fetchReviews();
    }, []);

    const submitFormData = (formData) => {
        localStorage.setItem(formData.name, JSON.stringify(formData))
    }

    return (
        <div className="wrapper">
            <div><ReviewForm submitHandler={submitFormData} /></div>
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
    );
}

export default Reviews;
