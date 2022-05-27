import React from 'react';
import useProducts from '../../Hooks/useProducts';
import ProductRow from './ProductRow';



const ManageProducts = () => {
    const [products] = useProducts();
    return (
        <div>
            <h3 className='text-3xl'>All Products</h3>

            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>avater</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            products.map((product, index) => <ProductRow
                                key={product._id}
                                product={product}
                                index={index}

                            ></ProductRow>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;