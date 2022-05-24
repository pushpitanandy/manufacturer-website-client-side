import React from 'react';
import { useNavigate } from "react-router-dom";


const Banner = () => {
    const navigate = useNavigate();

    const navigateAbout = () => {
        navigate('/about');
    }

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: "url(https://i.ibb.co/F4kRfLc/tools-Banner.png)" }} >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl">
                    <h1 className="mb-5 text-5xl font-bold">Hand Tools Manufacturer <span className='text-primary'>BD Tools Industries</span></h1>
                    <p className="mb-5">Get your next Top Quality tools from us which are made of top quality materials manipulating state-of-art techniques. This permits maximum degree of safety, comfort and user-friendliness.</p>
                    <button onClick={navigateAbout} className="btn btn-primary">Get To Know More About Us</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;