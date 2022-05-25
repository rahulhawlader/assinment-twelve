import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`)

                .then(res => res.json())
                .then(data => setOrders(data))
        }

    }, [user])
    return (
        <div>
            <h2 className='text-2xl'>My all orders: {orders.length}</h2>
        </div>
    );
};

export default MyOrders;