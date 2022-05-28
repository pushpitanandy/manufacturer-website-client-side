import React from 'react';
import { useNavigate } from "react-router-dom";

const Product = ({ tool }) => {
    const navigate = useNavigate();
    const { _id, name, image, description, minOrderQuantity, availableQuantity, price } = tool;

    const navigateToDetail = id => {
        navigate(`/products/${_id}`);
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure height="300px"><img src={image} alt="tool" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p>Minimum Order Quantity: {minOrderQuantity}</p>
                <p>Available Quantity: {availableQuantity}</p>
                <h5 className="text-2xl font-bold text-lime-800">Price: ${price}/piece</h5>
                <div className="card-actions justify-end">
                    <button onClick={() => navigateToDetail(_id)} className="btn btn-primary">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;