import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {

    const { productId } = useParams();
    const [product, setProduct] = useState({});
    console.log(product);

    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))


    }, [productId])
    const { name, description, minimumOrder, availableQuantity, price, } = product;

    return (
        <div class="card w-96 bg-base-100 shadow-xl bg-pink-700 text-black  ">
            <div class="card-body">
                <h2 class="card-title text-2xl text-primary">Name: {name}</h2>
                <p className='text-center'>Description:{description}</p>
                <p className='text-center'>Minimum Order: {minimumOrder}pcs</p>
                <p className='text-center' >available Quantity: {availableQuantity}pcs</p>
                <p className='text-center'>Price: ${price}</p>

            </div>
        </div>
    );
};

export default Purchase;