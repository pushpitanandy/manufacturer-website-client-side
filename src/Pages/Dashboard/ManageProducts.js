import React from 'react';
import { toast } from 'react-toastify';
import useTools from '../../hooks/useTools';

const ManageProducts = () => {

    const [tools, setTools] = useTools();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://pacific-beyond-64387.herokuapp.com/tool/${id}`;
            fetch(url, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = tools.filter(tool => tool._id !== id);
                    setTools(remaining);
                    toast.success(`Successfully removed a product`);
                })
        }
    }

    return (
        <div>
            <h2 className='text-3xl'>Manage All Products</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price / piece</th>
                            <th>Available Quantity</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tools.map(tool => <tr key={tool._id}>
                                <td>{tool.name}</td>
                                <td><img width='20%' src={tool.image} alt='' /></td>
                                <td>{tool.price}</td>
                                <td>{tool.availableQuantity}</td>
                                <td><button onClick={() => handleDelete(tool._id)}>X</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;