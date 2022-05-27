import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth)
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
                    console.log(res);

                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken')
                        navigate('/')


                    }
                    return res.json()
                })
                .then(data => {

                    setOrders(data)

                })
        }
    }, [user])
    return (
        <div>
            <h2 className='text-2xl text-gray-400'>All orders: {orders.length}</h2>

            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Order</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Pyment</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            orders.map((a, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{a.name}</td>
                                <td>{a.order}</td>
                                <td>{a.quantity}</td>
                                <td>{a.price}</td>
                                <td>
                                    {(a.price && !a.paid) && <Link to={`/dashboard/pyment/${a._id}`}><button className='btn btn-xs btn-primary'>Pay</button></Link>}
                                    {(a.price && a.paid) && <span className='text-success'>Paid</span>}

                                </td>

                            </tr>)
                        }






                    </tbody>
                </table>
            </div>


            <button className='btn btn-primary'>setup</button>
        </div>
    );
};

export default MyOrders;