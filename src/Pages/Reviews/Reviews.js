import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Reviews/Review';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <h2 className="text-4xl font-bold text-center m-5">Reviews</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 m-5">
                {
                    reviews.map(eachReview => <Review
                        key={eachReview._id}
                        eachReview={eachReview}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;