import React from 'react';
import { toast } from 'react-toastify';

const AddProduct = () => {

    const handleAddProduct = event => {
        event.preventDefault();
        const data = {
            name: event.target.name.value,
            description: event.target.description.value,
            price: event.target.price.value,
            availableQuantity: event.target.availableQuantity.value,
            minOrderQuantity: event.target.minOrderQuantity.value,
            image: event.target.image.value
        }
        const url = 'https://pacific-beyond-64387.herokuapp.com/tool';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
        toast('New Product Added');
    }

    return (
        <div>
            <h2 className='text-2xl'>Add a new Product</h2>
            <form onSubmit={handleAddProduct} className='grid grid-cols-1 gap-3 mb-5'>
                <input type="text" name='name' placeholder='Product name' className="input input-bordered w-full max-w-xs py-2" />
                <input type="text" name='description' placeholder='Description' className="input input-bordered w-full max-w-xs py-2" />
                <input type="text" name='price' placeholder="Enter Price" className="input input-bordered w-full max-w-xs py-2" />
                <input type="text" name='availableQuantity' placeholder="Enter available quantity" className="input input-bordered w-full max-w-xs py-2" />
                <input type="text" name='minOrderQuantity' placeholder='Minimum Order Quantity' className="input input-bordered w-full max-w-xs py-2" />
                <input type="text" name='image' placeholder='Enter URL for image' className="input input-bordered w-full max-w-xs py-2" />
                <input type="submit" value='Add Product' className="btn btn-secondary w-full max-w-xs py-2" />
            </form>
        </div>
    );
};

export default AddProduct;