import React, { useState } from 'react';

export default function Reviews() {
    const [gameName, setGameName] = useState('');
    const [reviewText, setReviewText] = useState('');
    const [reviews, setReviews] = useState([]);


    const handleGameNameChange = (e) => {
        setGameName(e.target.value);
    };


    const handleReviewChange = (e) => {
        setReviewText(e.target.value);
    };

  
    const handleAddReview = () => {
        if (gameName.trim() && reviewText.trim()) {
            const newReview = {
                game: gameName,
                text: reviewText,
                date: new Date().toLocaleString() 
            };
            setReviews([...reviews, newReview]);
            setGameName(''); 
            setReviewText(''); 
        }
    };

    return (
        <div className="reviews-container">
            <h2>Game Reviews</h2>
            <div>
                <label>
                    Game Name:
                    <input
                        type="text"
                        value={gameName}
                        onChange={handleGameNameChange}
                        placeholder="Enter the game name"
                    />
                </label>
                <br />
                <label>
                    Review:
                    <textarea
                        value={reviewText}
                        onChange={handleReviewChange}
                        placeholder="Write your review here..."
                    />
                </label>
                <br />
                <button onClick={handleAddReview}>Submit Review</button>
            </div>

            <h3>Recent Reviews:</h3>
            <ul>
                {reviews.map((review, index) => (
                    <li key={index} className="review-item">
                        <h4>{review.game}</h4>
                        <p>{review.text}</p>
                        <small>{review.date}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
}
