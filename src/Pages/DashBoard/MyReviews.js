import React from 'react';
import { useForm } from "react-hook-form";

const MyReviews = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // const url =;
        fetch(`http://localhost:5000/review`, {
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


        <form onSubmit={handleSubmit(onSubmit)} >

            <h1 className='text-primary'>My review</h1>

            <div class="card w-96 bg-base-100 shadow-xl">

                <div class="card-body bg-black">
                    <h1 className='text-2xl text center'>Add Products</h1>

                    <input className='mb-2 input input-ghost w-full max-w-xs bg-white' placeholder=' Name' type="text"{...register("name")} />



                    <input className='mb-2 input input-ghost w-full max-w-xs bg-white' placeholder=' Location' type="text"{...register("location")} />

                    <input className='mb-2 input input-ghost w-full max-w-xs bg-white' placeholder='Rating' type="text"{...register("rating")} />

                    <textarea className='mb-2 input input-ghost w-full max-w-xs bg-white' placeholder='Discription' type="text" {...register("discription")} />














                    <div class="card-actions justify-end">
                        <input className='btn-primary input input-ghost w-full max-w-xs' type="submit" value="Add Review" />

                    </div>
                </div>
            </div>
        </form>

    );
};

export default MyReviews;