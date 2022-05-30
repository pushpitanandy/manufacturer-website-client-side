import React from 'react';

const MyPortfolio = () => {
    return (
        <div>
            <h2 className='text-5xl font-bold m-5 p-5 text-center'>My Portfolio</h2>
            <h3 className='text-2xl font-bold text-green-900 m-4 p-4 text-center'>Name: Pushpita Nandy</h3>
            <h4 className='text-xl text-blue-900 m-5 p-5'>Email: nandypushpita@gmail.com</h4>
            <h3 className='text-2xl font-bold'>Educational Background:</h3>
            <ul className='text-amber-800'>
                <li>Masters in Business Administration: Major in Finance and Banking</li>
                <li>Bachelors in Computer Science and Engineering</li>
            </ul>
            <h3 className='text-2xl font-bold text-green-900 m-4'>Skills as a Web Developer:</h3>
            <ul>
                <li>HTML</li>
                <li>CSS and its frameworks (Vanilla CSS, BootStrap, Tailwind) </li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Firebase Authentication</li>
                <li>Node JS: Express JS</li>
                <li>MongoDB</li>
                <li>JWT: JSON Web Token</li>
                <li>Payment Method implementation with Stripe</li>
            </ul>
            <h3 className='text-2xl font-bold text-purple-900 m-4 p-4'>Three recent Web Projects</h3>
            <ul>
                <li>United Perfumes: Warehouse management website: <a>https://inventory-management-web-bb7cf.web.app</a></li>
                <li>Independent Service Provider website: <a>https://independent-service-prov-8ca2c.web.app</a></li>
                <li>Product Analysis Website: https://nespresso-coffee-machine.netlify.app</li>
            </ul>
        </div>
    );
};

export default MyPortfolio;