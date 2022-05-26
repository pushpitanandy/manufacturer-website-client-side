import React from 'react';

const Review = ({ eachReview }) => {
    const { name, review, rating, image } = eachReview;
    return (
        <div className="card w-96 bg-primary text-primary-content flex">
            <div className="card-body">
                <div className='flex items-center'>
                    <div className="avatar">
                        <div className="w-24 mask mask-hexagon mr-3">
                            <img src={image} alt='reviewer' />
                        </div>
                    </div>
                    <h2 className="card-title">{name}</h2>
                </div>
                <p>{review}</p>
                <p>Rating: {rating}</p>
            </div>
        </div>
    );
};

export default Review;