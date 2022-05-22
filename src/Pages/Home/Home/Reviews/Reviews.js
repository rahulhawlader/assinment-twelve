import React from 'react';
import people1 from '../../../../image/Review/people1.png'
import people2 from '../../../../image/Review/people2.png'
import people3 from '../../../../image/Review/people3.png'
import quote from '../../../../image/Review/quote.svg'
import Review from '../../Review/Review';

const Reviews = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            discription: 'This is a Awsome Products, in our country',
            rating: '5',
            location: 'california',
            img: people1
        },
        {
            _id: 2,
            discription: 'This is a Awsome Products, in our country',
            name: 'Winson Herry',
            rating: '5',
            location: 'california',
            img: people2
        },
        {
            _id: 3,
            name: 'Winson Herry',
            discription: 'This is a Awsome Products, in our country',
            rating: '4',
            location: 'california',
            img: people3
        },
    ];
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold">Reviews</h4>
                    <h2 className='text-3xl'>What our Customer say</h2>
                </div>
                <div>
                    <img src={quote} className="w-24 lg:w-48" alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Reviews;