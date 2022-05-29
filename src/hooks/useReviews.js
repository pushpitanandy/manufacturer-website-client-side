import { useState, useEffect } from 'react';

const useReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://pacific-beyond-64387.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    return [reviews, setReviews];
}

export default useReviews;