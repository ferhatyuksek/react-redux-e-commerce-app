import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { SlBasket } from "react-icons/sl"; 
import '../css/Basket.css'
import { GoTrash } from "react-icons/go";
import { removeFromBasket,updateQuantity } from '../redux/slice/basketSlice';

function Basket() {
    const dispatch = useDispatch();
    const { products } = useSelector((store) => store.basket)
    const navigate = useNavigate()
    const totalAmount = products.reduce((acc, curr) => acc + (curr.price * curr.count), 0);
    
    const handleQuantity = (id, type) => {
    dispatch(updateQuantity({ id, type }));
};
    return (
       <div className='basket-page-container'>
        
            <div className='basket-left'>
                <h1 style={{fontFamily:"sans-serif"}}>Sepetim ({products.length} Ürün) </h1>
                {/* ürün varsa */}
                {
                    products && products.length > 0 ? (
                        products.map((product) => (
                            <div key={product.id} className='basket-container'>
                                <img className='img-basket' src={product.image} alt="image" />
                                <h3 className='title-basket' style={{ width: '300px' }}>{product.title}</h3>
                                <div className='quantity-container'>
                                    <button className='qty-btn' onClick={() => handleQuantity(product.id, 'decrement')}>-</button>
                                    <span className='qty-amount'>{product.count}</span>
                                    <button className='qty-btn orange' onClick={() => handleQuantity(product.id, 'increment')}>+</button>
                                </div>                                
                                    <p className='price-basket' style={{ fontWeight: 'bold' }}>{product.price} TL</p>
                                <div className='remove-container'>
                                    <button className='remove-btn'  onClick={() => dispatch(removeFromBasket(product.id))}>
                                    <GoTrash style={{marginRight: '5px'}} />
                                        Sil
                                    </button>
                                </div>
                                  
                            </div>
                        ))
                    ) : (
                        //ürün yoksa 
                        <div className="basket-empty-container">
                            <div className="basket-icon-circle">
                                <SlBasket style={{fontSize: '30px', color: '#1e1d1c'}} />
                            </div>
                            <p className='basket-blank'>Sepetinde ürün bulunmamaktadır.</p>
                            <button className="basket-start-shopping" onClick={() => navigate("/")}>
                                Alışverişe Başla
                            </button>
                        </div>
                    )
                }
            </div>
            {/* Sepet Özeti */}
            {products.length > 0 && (
                <div className='basket-right'>
                    <div className='summary-box'>
                        <div className='summary-content'>
                            <h3>Sepet Özeti</h3>
                            <div className='summary-item'>
                                <span>Ara Toplam</span>
                                <span>{totalAmount.toFixed(2)} TL</span>
                            </div>
                            <div className='summary-item'>
                                <span>Kargo Toplam</span>
                                <span>44.99 TL</span>
                            </div>
                            <div className='summary-item free-shipping'>
                                <span>Kargo Bedava</span>
                                <span>-44.99 TL</span>
                            </div>
                            <hr />
                            
                            <div className='summary-item total-row'>
                                <span>Toplam</span>
                                <span className='total-price'>{totalAmount.toFixed(2)} TL</span>
                            </div>
                        <button onClick={() => navigate("/")} className='confirm-btn'>Sepeti Onayla</button>

                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Basket