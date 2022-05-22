import React from 'react';

const Summery = ({ summery }) => {
    const { name, img, count, } = summery;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <div class="avatar">
                    <div class="w-24 rounded-full">
                        <img src={img} alt="" />
                    </div>
                </div>
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title text-6xl text-green-500">{count}</h2>
                <h3 className='text-3xl text-yellow-500'>{name}</h3>

            </div>
        </div>
    );
};

export default Summery;