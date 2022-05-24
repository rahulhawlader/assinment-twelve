import React from 'react';
import { useForm } from "react-hook-form";



const MyReview = () => {


    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        // const url =;
        fetch(`https://ancient-scrubland-73255.herokuapp.com/dress`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

            .then(res => res.json())
            .then(result => {
                console.log(result);
            })



    };

    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body bg-white">
                <h2 class="card-title text-red-400">Please Review Now!!!</h2>
                <form onSubmit={handleSubmit(onSubmit)}>







                    <input type="text" placeholder="Your rating" class="input input-bordered w-full max-w-xs my-2 bg-gray-600" />
                    <textarea type="text" placeholder="Description" class="input input-bordered w-full max-w-xs my-2  bg-gray-600" />
                    <div class="card-actions justify-end">
                        <input className='btn w-full max-w-xs text-white  bg-gray-600' type="submit " value="Review" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MyReview;