import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {

    const [user, loading, error] = useAuthState(auth)
    const { productId } = useParams();


    const [product, setProduct] = useState({});





    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;


        fetch(url)

            .then(res => res.json())
            .then(data => setProduct(data))


    }, [productId])


    const { name, description, minimumOrder, availableQuantity, price, img } = product;

    const quantityRef = useRef('');

    const [quantity, setQuantity] = useState(minimumOrder);
    const [btnDisable, setBtnDisable] = useState(false);

    const handleQuantity = e => {
        setQuantity(e.target.event)
    }

    const handleSubmit = e => {
        e.preventDefault();
        const newQuantity = quantityRef.current.value || minimumOrder;
        if (newQuantity < minimumOrder) {
            setBtnDisable(true);
            toast.error(`minimum order ${minimumOrder} pcs`)
            return
        }
        else if (newQuantity > availableQuantity) {
            setBtnDisable(true);
            toast.error(`Maximum order
             ${availableQuantity} pcs`)
            return
        }

        const orderForm = {
            name: e.target.name.value,
            email: e.target.email.value,
            address: e.target.address.value,
            phone: e.target.phone.value,
            quantity: newQuantity
        }
        console.log(orderForm);

        fetch('http://localhost:5000/order', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderForm)
        })
            .then(res => res.json())
            .then(data => {

                console.log(data);

            })


    }
    useEffect(() => {
        if (quantity >= minimumOrder) {
            setBtnDisable(false)
        }
    }, [quantity, minimumOrder])





    return (


        <div className='grid sm:grid-cols-1 lg:grid-cols-2 '>
            <div className=" card w-96 bg-base-100 shadow-xl bg-pink-700 text-black sm:mt-2 ">
                <div class="card-body">
                    <figure><img src={img} alt="" /></figure>
                    <h2 className="text-center card-title ">Name: {name}</h2>
                    <p className='text-center'>Description:{description}</p>
                    <p className='text-center'>Minimum Order: {minimumOrder}pcs</p>
                    <p className='text-center' >available Quantity: {availableQuantity}pcs</p>
                    <p className='text-center'>Price: ${price}</p>
                </div>

            </div>
            <div className='mx-auto  w-4/5 lg:w-1/2 mt-8 '>
                <h1 className='font-bold text-center text-3xl mt-3'>Order Now</h1>
                <div class="card mx-auto mt-3 p-2 bg-base-100 shadow-xl bg-white">
                    <form onSubmit={handleSubmit}>
                        <div class="form-control mx-auto text-left w-full max-w-xs">
                            <label htmlFor="name" className='my-2'>Name</label>
                            <input type="text" name='name' id='name' placeholder="name" value={user?.displayName} disabled class="input input-bordered w-full max-w-xs" required />
                            <label class="label">
                                {/* <span class="label-text-alt">Alt label</span> */}
                            </label>
                        </div>
                        <div class="form-control mx-auto text-left w-full max-w-xs">
                            <label htmlFor="email" className='mb-2'>Email</label>
                            <input type="email" name='email' id='email' value={user?.email} disabled placeholder="email" class="input input-bordered w-full max-w-xs" required />
                        </div>

                        <div class="form-control mx-auto text-left w-full max-w-xs">
                            <label htmlFor="address" className='my-2'>name</label>
                            <input type="text" value={name} name='name' id='name'
                                class="input input-bordered w-full max-w-xs" disabled />
                        </div>


                        <div class="form-control mx-auto text-left w-full max-w-xs">
                            <label htmlFor="address" className='my-2 '>Address</label>
                            <input type="text" name='address' id='address' class="input input-bordered w-full max-w-xs" required />
                        </div>
                        <div class="form-control mx-auto text-left w-full max-w-xs">
                            <label htmlFor="Phone" className='my-2'>Phone</label>
                            <input type="number" name='phone' id='phone' class="input input-bordered w-full max-w-xs" required />
                        </div>
                        <div class="form-control mx-auto text-left w-full max-w-xs">
                            <label htmlFor="quantity" className='my-2'>Order Quantity <span style={{ color: "gray" }}>(minimum {minimumOrder} pcs.)</span></label>
                            <input onChange={handleQuantity} placeholder={minimumOrder} ref={quantityRef} type="number" name='quantity' id='quantity' class="input input-bordered w-full max-w-xs" />
                        </div>

                        <input disabled={btnDisable} type="submit" value="PLACE ORDER" className='btn btn-primary form-control mx-auto text-left w-full max-w-xs mt-3' />
                    </form>
                </div>
            </div>


        </div >


    );
};

export default Purchase;