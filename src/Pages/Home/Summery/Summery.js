import React from 'react';

const Summery = ({ summery }) => {
    const { name, img, count, } = summery;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src={img} alt="" />
                    </div>
                </div>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-6xl text-green-500">{count}</h2>
                <h3 className='text-3xl text-yellow-500'>{name}</h3>

            </div>
        </div>
    );
};

export default Summery;