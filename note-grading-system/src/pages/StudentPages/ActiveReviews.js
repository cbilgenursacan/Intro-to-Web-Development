import React, { useState } from "react";

const ActiveReviews = () => {
    const [reviews, setReviews] = useState([]);

    return(
        <div>
            <h1>Active Reviews</h1>
            <div>
            <h3>18290828</h3>
                            <hr/>
                            <h4>Algorithms</h4>
                            <h4>Hw1</h4>
                            <h4>01.01.2023 00:00</h4>
                            <button className="btn btn-outline-primary">Review</button>
            {
                reviews.map(review => {
                    return(
                        <div>
                            <h3>{review.title}</h3>
                            <hr/>
                            <h4>{review.deadline}</h4>
                            <button className="btn btn-outline-primary">Review</button>
                        </div>       
                    )
                })
            }
            </div>
        </div>
    );
}

export default ActiveReviews;