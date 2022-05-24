import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, description, minimumOrder, availableQuantity, price, img } = product;
    const navigate = useNavigate();


    const navigateToPurchase = (id) => {
        navigate(`/product/${id}`)
    }

    return (
        <div className="card bg-base-100 shadow-xl my-4">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h5 className="card-title text-2xl text-gray-500">Name: {name}</h5>
                <p>Description: {description}</p>
                <h6 className='text-xl'>minimum Order: {minimumOrder}</h6>
                <h6 className='text-xl'>available Quantity: {availableQuantity} </h6>
                <h6 className='text-xl'>Price: ${price} </h6>


                <button onClick={() => navigateToPurchase(_id)} type="button" className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-black font-bold ...">
                    Purchase
                </button>
            </div>
        </div>
    );
};

export default Product;