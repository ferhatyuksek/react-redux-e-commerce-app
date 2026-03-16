import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slice/productSlice'
import '../App.css'
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import  {addToBasket}  from '../redux/slice/basketSlice';


function ProductDetails() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const [showAlert, setShowAlert] = useState(false);

    const { products, selectedProduct } = useSelector((store) => store.product)
    const {title,price,description,image}=selectedProduct

    const [count, setCount]=useState(1)

    const increment = () => {
    setCount(count + 1); 
}

    const decrement = () => {
    if (count > 0) { 
        setCount(count - 1);
    }
}

    const addBasket=()=>{
        const payload={
       id,
       title,
       price,
       image,
       description,
       count
    }
    dispatch(addToBasket(payload));
    (setShowAlert(true))
    setTimeout(()=>{
        setShowAlert(false)
    },1500)    
    }

    useEffect(() => {
        if (products.length > 0) {
            const product = products.find((p) => p.id == id);
            if (product) {
                dispatch(setSelectedProduct(product));
            }
        }
    }, [id, products, dispatch])

    if (!selectedProduct || !selectedProduct.title) {
        return <div>Yükleniyor...</div>
    }

    return (
        <div style={{marginTop:"30px" , marginLeft:"30px"}}  className='flex-row'>
            <div>
            <img className='img-details' src={image} style={{ 
        width: '450px', 
        height: '600px', 
        objectFit: 'contain',
        border: '1px solid #ddd',
        padding: '14px',
        borderRadius: '8px'
    }} alt={title} />
            </div>
            <div style={{marginBottom:"220px"}}>
            <h1 className='title-details'>{title}</h1>
            <p className='description-details'>{description}</p>
            <hr style={{ border: '0', borderTop: '1px solid #eee', margin: '10px 0' }} />
            <h3 style={{color:"#5a1490"}} className='price-details'> Ürün Fiyatı:{price} TL</h3>

            <div style={{ marginTop: '20px', display: 'flex', gap: '15px' }}>
        <button onClick={addBasket} className='btn-details'>Sepete Ekle</button>
        {showAlert && (
            <div style={{
                position: 'fixed',
                top: '153px',    
                right: '25px', 
                backgroundColor: '#4CAF50',
                color: 'white',
                padding: '18px',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                zIndex: 1000,
                fontWeight: 'bold' 
            }}>
                Ürün sepete eklendi!
            </div>
        )}
         <div className='flex-row'>
                <CiCirclePlus  className='plus-icon' onClick={increment}/>
                <span style={{fontSize:"30px"}}>{count}</span>
                <CiCircleMinus className='minus-icon' onClick={decrement}/>
            </div>
      </div>
            </div>

            
           
        </div>
    )
}

export default ProductDetails