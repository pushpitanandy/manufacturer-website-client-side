import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const AddaReview = () => {

    const [user, loading, error] = useAuthState(auth);
    const handleAddReview = event => {
        event.preventDefault();
        const data = {
            name: user.displayName,
            review: event.target.review.value,
            rating: event.target.rating.value
        }
        const url = 'https://pacific-beyond-64387.herokuapp.com/review';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
        toast('New Review Added');
    }

    return (
        <div>
            <h2 classsName='text-4xl text-primary'>Add a Review</h2>
            <form onSubmit={handleAddReview} className='grid grid-cols-1 gap-3 mb-5'>
                <input type="text" name='name' disabled value={user.displayName} className="input input-bordered w-full max-w-xs py-2" />
                <input type="text" name='review' placeholder='Write your review' className="input input-bordered w-full max-w-xs py-2" />
                <input type="number" name='rating' defaultValue='1' min='1' max='5' className="input input-bordered w-full max-w-xs py-2" />
                <input type="submit" value='Post the Review' className="btn btn-secondary w-full max-w-xs py-2" />
            </form>
        </div>
    );
};

export default AddaReview;