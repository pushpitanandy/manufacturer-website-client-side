import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const Purchase = () => {
    const { productId } = useParams();
    const [tool, setTool] = useState({});
    const [user, loading, error] = useAuthState(auth);
    const [isReload, setIsReload] = useState(true);

    useEffect(() => {
        const url = `https://pacific-beyond-64387.herokuapp.com/tool/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data));
    }, [isReload]);

    const handlePurchase = event => {
        event.preventDefault();
        const pricePerPiece = tool.price;
        const totalPrice = parseInt(pricePerPiece) * parseInt(event.target.quantity.value);
        const data = {
            name: event.target.name.value,
            email: user.email,
            address: event.target.address.value,
            phone: event.target.phone.value,
            tool: tool.name,
            price: totalPrice,
            quantity: event.target.quantity.value
        }
        console.log(data);
        //updating the available quantity after purchase
        const newAvailableQuantity = parseInt(tool.availableQuantity) - parseInt(data.quantity);
        tool.availableQuantity = newAvailableQuantity;
        setTool(tool);

        const url = `https://pacific-beyond-64387.herokuapp.com/tool/${productId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(tool)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setIsReload(!isReload);
            });

        //adding the order in the orderCollection of database
        const urlOrder = 'https://pacific-beyond-64387.herokuapp.com/order';
        fetch(urlOrder, {
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
        toast('New Order Added');
    }

    return (
        <div>
            <div className="hero mx-12">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={tool.image} className="max-w-sm rounded-lg shadow-2xl mr-5" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">{tool.name}</h1>
                        <p className="py-6">{tool.description}</p>
                        <p>Available Quantity: {tool.availableQuantity}</p>
                        <p>Minimum Ordering Quantity: {tool.minOrderQuantity}</p>
                        <h4 className='text-2xl font-bold text-lime-800'>Price: ${tool.price}/piece</h4>
                        <p className='py-6 text-lg'>Fill up the following details:</p>
                        <form onSubmit={handlePurchase} className='grid grid-cols-1 gap-3 mb-5'>
                            <input type="text" name='name' defaultvalue={user.displayName || user.auth.displayName} className="input input-bordered w-full max-w-xs py-2" />
                            <input type="text" name='email' disabled value={user.email} className="input input-bordered w-full max-w-xs py-2" />
                            <input type="text" name='address' placeholder="Type your Address" className="input input-bordered w-full max-w-xs py-2" />
                            <input type="text" name='phone' placeholder="Enter Phone Number" className="input input-bordered w-full max-w-xs py-2" />
                            <input type="text" name='tool' disabled value={tool.name} className="input input-bordered w-full max-w-xs py-2" />
                            <p>Price/piece:</p>
                            <input type="text" name='pricePerPiece' disabled value={tool.price} className="input input-bordered w-full max-w-xs py-2" />
                            <input type="number" name='quantity' defaultValue={tool.minOrderQuantity} min={tool.minOrderQuantity} max={tool.availableQuantity} className="input input-bordered w-full max-w-xs py-2" />
                            <input type="submit" value='Purchase' className="btn btn-secondary w-full max-w-xs py-2" />
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;