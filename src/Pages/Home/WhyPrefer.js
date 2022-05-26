import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt, faHandshake, faTruck, faCogs, faUsersCog, faBoxesPacking } from '@fortawesome/free-solid-svg-icons';

const WhyPrefer = () => {
    return (
        <div>
            <h2 className="text-4xl text-center font-extrabold m-10">WHY PREFER <span className='text-primary'>BD TOOLS</span></h2>
            <div className="m-10 grid grid-cols-6 gap-6 text-center">
                <div>
                    <div className="text-primary p-2">
                        <FontAwesomeIcon icon={faSyncAlt} size="4x" />
                    </div>
                    <p>Flexible and professional terms of business</p>
                </div>
                <div>
                    <div className="text-primary p-2">
                        <FontAwesomeIcon icon={faHandshake} size="4x" />
                    </div>
                    <p>Transparancy in all dealings</p>
                </div>
                <div>
                    <div className="text-primary p-2">
                        <FontAwesomeIcon icon={faTruck} size="4x" />
                    </div>
                    <p>Competitive pricing and deliveries on time</p>
                </div>
                <div>
                    <div className="text-primary p-2">
                        <FontAwesomeIcon icon={faCogs} size="4x" />
                    </div>
                    <p>Using modern technique and standards to make product</p>
                </div>
                <div>
                    <div className="text-primary p-2">
                        <FontAwesomeIcon icon={faUsersCog} size="4x" />
                    </div>
                    <p>Components and products made to customer specification</p>
                </div>
                <div>
                    <div className="text-primary p-2">
                        <FontAwesomeIcon icon={faBoxesPacking} size="4x" />
                    </div>
                    <p>Packaging that confirms to international standards</p>
                </div>
            </div>
        </div >
    );
};

export default WhyPrefer;