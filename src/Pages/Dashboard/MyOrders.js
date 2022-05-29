import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => setOrders(data));
        }
    }, [user]);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                })
        }
    }

    return (
        <div>
            <h2 classsName='text-4xl text-primary'>My Orders: {orders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Tool</th>
                            <th>Quantity</th>
                            <th>Payment</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order =>
                                <tr>
                                    <td>{order.name}</td>
                                    <td>{order.address}</td>
                                    <td>{order.phone}</td>
                                    <td>{order.tool}</td>
                                    <td>{order.quantity}</td>
                                    <td>
                                        {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                                        {(order.price && order.paid) && <span className='text-success'>Paid</span>
                                        }</td>
                                    <td><button onClick={() => handleDelete(order._id)}>X</button></td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;