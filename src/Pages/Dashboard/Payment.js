import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, Elements, ElementsConsumer } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L4mfrCplzLRQdb9ULhbcFzh4m1k6LtvlhXvRHsWUpSmPyzzJ7wrez5ad9N8Vjukb4ekwyz6AazgLIkcMhjv4E5G00xwoVl9ck');

const Payment = () => {

    const { id } = useParams();
    const url = `https://pacific-beyond-64387.herokuapp.com/order/${id}`;

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="card w-50 shadow-xl max-w-md bg-base-100 my-12">
                <div className="card-body">
                    <p className='text-success'>Hello {order.name},</p>
                    <h2 className="card-title text-lime-800">Please Pay for: {order.tool}</h2>
                    <p>You will receive your product in <span className='text-primary'>{order.address}</span></p>
                    <p>Please pay: ${order.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className='card-body'>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>

    );
};

export default Payment;