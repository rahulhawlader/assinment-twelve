import React from 'react';

const Review = ({ review }) => {
    console.log(review);

    const { name, location, rating, discription } = review
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{
                    discription
                }</p>
                <div className="flex items-center">

                    <div>
                        <h4 className='text-xl'>{name}</h4>
                        <p>{location}</p>
                        <p>Star: {rating}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;