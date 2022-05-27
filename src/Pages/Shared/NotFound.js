import React from 'react';
import error from '../../images/404Error.JPG';

const NotFound = () => {
    return (
        <div>
            <h2 className='mb-2 text-5xl text-center font-bold '>Page Not Found</h2>
            <div className='flex justify-center'>
                <img src={error} alt="" />

            </div>
        </div>
    );
};

export default NotFound;