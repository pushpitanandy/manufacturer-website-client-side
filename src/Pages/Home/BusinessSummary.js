import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faHandshake, faTruck, faCogs } from '@fortawesome/free-solid-svg-icons';

const BusinessSummary = () => {
    return (
        <div>
            <h2 className="text-5xl text-center font-extrabold m-10">Businesses trust <span className='text-primary'>BD TOOLS</span></h2>
            <div className="m-10 grid grid-cols-6 gap-6 text-center">
                <div>
                    <div className="text-primary p-2">
                        <FontAwesomeIcon icon={faFlag} size="4x" />
                    </div>
                    <h4 className='text-3xl text-lime-900'>72</h4>
                    <p>Countries</p>
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
            </div>
        </div >
    );
};

export default BusinessSummary;