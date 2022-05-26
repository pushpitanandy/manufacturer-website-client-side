import React from 'react';
import useTools from '../../hooks/useTools';
import useReviews from '../../hooks/useReviews';
import Banner from './Banner';
import Product from '../Products/Product';
import { useNavigate } from "react-router-dom";
import BusinessSummary from './BusinessSummary';
import WhyPrefer from './WhyPrefer';
import Review from '../Reviews/Review';
import ContactUs from '../ContactUs/ContactUs';

const Home = () => {
    const navigate = useNavigate();
    const [tools, setTools] = useTools();
    const [reviews, setReviews] = useReviews();

    return (
        <div>
            <Banner></Banner>
            {/* Display 6 products */}
            <h2 className="text-4xl font-bold text-center m-5">Products</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 m-5">
                {
                    tools.map(tool => <Product
                        key={tool._id}
                        tool={tool}
                    ></Product>).slice(0, 6)
                }
            </div>
            <button onClick={() => navigate('/products')} className='btn flex justify-center mx-auto px-3 my-3
            '>Show All Tools</button>
            <BusinessSummary></BusinessSummary>
            {/* Display 6 reviews */}
            <h2 className="text-4xl font-bold text-center m-5">Reviews</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 m-5">
                {
                    reviews.map(eachReview => <Review
                        key={eachReview._id}
                        eachReview={eachReview}
                    ></Review>).slice(0, 6)
                }
            </div>
            <button onClick={() => navigate('/reviews')} className='btn flex justify-center mx-auto px-3 my-3
            '>View All Reviews</button>
            <WhyPrefer></WhyPrefer>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;