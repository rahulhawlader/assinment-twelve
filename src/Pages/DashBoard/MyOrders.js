import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })

                .then(res => res.json())
                .then(data => setOrders(data))
        }

    }, [user])
    return (
        <div>
            <h2 className='text-2xl'>My all orders: {orders.length}</h2>

            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Order</th>

                            <th>Address</th>
                            <th>phone</th>
                            <th>Quantity</th>
                            <th>Price</th>


                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((a, index) => <tr>
                                <th>{index + 1}</th>
                                <th>{a.name}</th>

                                <th>{a.order}</th>
                                <td>{a.address}</td>
                                <td>{a.phone}</td>

                                <td>{a.quantity}</td>




                                <td> ${a.price}</td>
                            </tr>)
                        }






                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;