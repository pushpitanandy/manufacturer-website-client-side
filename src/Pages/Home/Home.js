import React from 'react';
import useTools from '../../hooks/useTools';
import Banner from './Banner';
import Product from '../Products/Product';
import { useNavigate } from "react-router-dom";
import BusinessSummary from './BusinessSummary';
import WhyPrefer from './WhyPrefer';

const Home = () => {
    const navigate = useNavigate();
    const [tools, setTools] = useTools();

    return (
        <div>
            <Banner></Banner>
            <h2 className="text-4xl font-bold text-center m-5">Products</h2>
            <div className="grid grid-cols-3 gap-6 m-5">
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
            <WhyPrefer></WhyPrefer>
        </div>
    );
};

export default Home;