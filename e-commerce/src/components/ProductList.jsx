import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/slice/productSlice';
import '../css/Header.css'
import Product from './Product'

function ProductList() { 
    const dispatch = useDispatch();
    const { filteredProducts } = useSelector((store) => store.product);
    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

    return (
        <div className='flex-row' style={{ flexWrap: "wrap", marginTop: "25px" }}>
            {
                filteredProducts && filteredProducts.map((product) => (
                    <Product key={product.id} product={product} />
                ))
            }
        </div>
    )
}

export default ProductList