import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, description, minimumOrder, availableQuantity, price, img } = product;
    const navigate = useNavigate();


    const navigateToPurchase = (id) => {
        navigate(`/product/${id}`)
    }

    return (
        <div class="card bg-base-100 shadow-xl my-4">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h5 class="card-title text-2xl text-gray-500">Name: {name}</h5>
                <p>Description: {description}</p>
                <h6 className='text-xl'>minimum Order: {minimumOrder}</h6>
                <h6 className='text-xl'>available Quantity: {availableQuantity} </h6>
                <h6 className='text-xl'>Price: ${price} </h6>


                <button onClick={() => navigateToPurchase(_id)} type="button" class="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-black font-bold ...">
                    Purchase
                </button>
            </div>
        </div>
    );
};

export default Product;