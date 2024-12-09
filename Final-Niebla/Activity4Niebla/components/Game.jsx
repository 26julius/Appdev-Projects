import { useLocation } from "react-router-dom";

export default function Game() {
    const location = useLocation();
    const game = location.state;

    return (
        <>
            <div className="gamediv">
                <h1>{game.name}</h1>
                <p>{game.description}</p>
            </div>

            <div className="reviews">
                <h1>Reviews</h1>
                {game.reviews && game.reviews.length > 0 ? (
                    game.reviews.map((review, index) => (
                        <div className="review" key={index}>
                            <p>{review.text}</p>
                            <i>{review.author}</i>
                        </div>
                    ))
                ) : (
                    <p>No reviews available for this game.</p>
                )}
            </div>
        </>
    );
}
