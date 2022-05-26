import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faTruck, faUserGroup, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const BusinessSummary = () => {
    return (
        <div>
            <h2 className="text-5xl text-center font-extrabold m-10">Businesses trust <span className='text-primary'>BD TOOLS</span></h2>
            <div className="m-10 grid grid-cols-1 lg:grid-cols-4 gap-6 text-center">
                <div>
                    <div className="text-primary p-2">
                        <FontAwesomeIcon icon={faFlag} size="4x" />
                    </div>
                    <h4 className='text-3xl text-lime-700 font-bold'>72</h4>
                    <p className='text-lg'>Countries</p>
                </div>
                <div>
                    <div className="text-primary p-2">
                        <FontAwesomeIcon icon={faTruck} size="4x" />
                    </div>
                    <h4 className='text-3xl text-lime-700 font-bold'>500+</h4>
                    <p className='text-lg'>Deliveries</p>
                </div>
                <div>
                    <div className="text-primary p-2">
                        <FontAwesomeIcon icon={faUserGroup} size="4x" />
                    </div>
                    <h4 className='text-3xl text-lime-700 font-bold'>200+</h4>
                    <p className='text-lg'>Clients</p>
                </div>
                <div>
                    <div className="text-primary p-2">
                        <FontAwesomeIcon icon={faThumbsUp} size="4x" />
                    </div>
                    <h4 className='text-3xl text-lime-700 font-bold'>100+</h4>
                    <p className='text-lg'>Reviews</p>
                </div>
            </div>
        </div >
    );
};

export default BusinessSummary;