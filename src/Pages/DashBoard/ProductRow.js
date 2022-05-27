import React from 'react';
import useProducts from '../../Hooks/useProducts';




const ProductRow = ({ product, index }) => {
    const [products, setProducts] = useProducts();

    const { _id, name, availableQuantity, price, img } = product;

    const handleDelete = (id) => {
        const proceed = window.confirm('are you sure?')
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remainig = products.filter(product => product._id !== id)
                    setProducts(remainig)

                })
        }



    }


    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-16 rounded">
                    <img src={img} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{availableQuantity}</td>
            <td>{price}</td>
            <td><button onClick={() => handleDelete(product._id)} class="btn btn-xs btn-error">Delete</button></td>
        </tr>
    );
};

export default ProductRow;