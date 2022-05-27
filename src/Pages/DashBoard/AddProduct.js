import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit } = useForm();



    const onSubmit = (data) => {
        console.log(data);
        // const url =;
        fetch(`https://fathomless-coast-23592.herokuapp.com/product`, {
            method: 'POST',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

            .then(res => res.json())
            .then(result => {
                console.log(result);
            })

    }
    return (
        <div >

            <form onSubmit={handleSubmit(onSubmit)}>



                <div class="card w-96 bg-base-100 shadow-xl">

                    <div class="card-body bg-black">
                        <h1 className='text-2xl text center'>Add Products</h1>

                        <input className='mb-2 input input-ghost w-full max-w-xs bg-white' placeholder='Product Name' type="text"{...register("name")} />





                        <input className='mb-2 input input-ghost w-full max-w-xs bg-white' placeholder='Quantity Available ' type="number" {...register("quantity")} />


                        <input className='mb-2 input input-ghost w-full max-w-xs bg-white' placeholder='order Minimum quantity' type="number" {...register("orderMinimum")} />

                        <input className='mb-2 input input-ghost w-full max-w-xs bg-white' placeholder='Price' type="number" {...register("price")} />

                        <textarea className='mb-2 input input-ghost w-full max-w-xs bg-white' placeholder='Description' type="text" {...register("description")} />

                        <input className='mb-2 input input-ghost w-full max-w-xs bg-white' placeholder='Photo URL' {...register("img")} />

                        <div class="card-actions justify-end">
                            <input className='btn-primary input input-ghost w-full max-w-xs' type="submit" value="Add Product" />

                        </div>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default AddProduct;