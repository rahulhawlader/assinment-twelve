import React from 'react';
import Summery from '../../Summery/Summery';

const Summeris = () => {
    const summeris = [



        {
            "_id": 1,
            "count": 40,
            "img": "https://i.ibb.co/19mGgcL/images.png",
            "name": "Country",
        },
        {
            "_id": 2,
            "count": 900,
            "img": "https://i.ibb.co/cQPPwSX/download.png",
            "name": "Happy Clients ",
        },
        {
            "_id": 3,
            "count": 1200,
            "img": "https://i.ibb.co/gR8PQG6/7b8ca55e4c563e0351cc26fd0021788c.png",
            "name": "SuccessFull Projects"
        }
    ]
    return (
        <div className='my-10'>
            <div>
                <h1 className='text-4xl text-center text-success'> Our Business Summery</h1>
            </div>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    summeris.map(summery => <Summery
                        key={summery._id}
                        summery={summery}

                    ></Summery>)
                }
            </div>

        </div>
    );
};

export default Summeris;