import React from 'react'
import '../css/Product.css'
import { useNavigate } from 'react-router-dom'
import { CiHeart } from "react-icons/ci";
import { addToFavorites } from '../redux/slice/favoriteSlice';
import { useDispatch } from 'react-redux';


function product({product}) {
  const { id,price,image,title,description} = product
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const addFav = (e) => {
        e.stopPropagation(); 
        dispatch(addToFavorites(product));
        alert("Ürün favorilere eklendi!"); 
    }
  return (
    <div style={{cursor:"zoom-in"}} onClick={() => navigate(`/product-details/${id}`)} className='card'>
        <div className='favorite-icon-wrapper' onClick={addFav}>
        <CiHeart className='heart'/>
      </div>
      <img src={image} alt="image" />
      <div>
        <p className='title'>{title}</p>
        <h3 className='price'>{price} TL </h3>
      </div>
      <div>
        <button className='details-btn' onClick={() => navigate(`/product-details/${id}`)}>Detayına Git</button>
      </div>
    
    </div>
  )
}

export default product
{product}