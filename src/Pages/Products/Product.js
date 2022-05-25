import React from 'react';

const Product = ({ tool }) => {
    const { name, image, description, minOrderQuantity, availableQuantity, price } = tool;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure height="300px"><img src={image} alt="tool" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p>Minimum Order Quantity: {minOrderQuantity}</p>
                <p>Available Quantity: {availableQuantity}</p>
                <p classname="text-2xl text-amber-600 font-bold">Price: ${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;