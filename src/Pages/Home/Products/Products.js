import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('Products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])
    return (
        <div className='py-8'>
            <h3 className='text-4xl text-primary text-center'>Our Products</h3>
            <h4 className='text-3xl text-center text-white pt-4'>Bicycle Tools and Parts</h4>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}

                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;