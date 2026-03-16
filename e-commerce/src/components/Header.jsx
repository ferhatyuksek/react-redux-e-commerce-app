import React from 'react'
import '../css/Header.css'
import { SlBasket } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../redux/slice/productSlice'; 

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const basketCount = 4;
  const {products}=useSelector((store)=> store.basket)
  const {favorites}=useSelector((store)=>store.favorite)
console.log("Favori Verisi:", favorites);
  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };
  return (
    <div className='flex-row' style={{justifyContent: 'space-between', padding: '10px 20px'}}>
        <div onClick={() => navigate("/")} style={{ marginLeft: "20px", cursor: "pointer" }}>
            <h3 className='title-h3'>
              <span style={{ color: "aliceblue", fontSize: "38px" }}>H</span>EPSİ
              <span style={{ color: "aliceblue", fontSize: "38px" }}>S</span>EPETTE.com
            </h3>
        </div>

       <div>
      <input 
        className='input-text' 
        type="text" 
        placeholder='Ürün, kategori veya marka ara' 
        onChange={handleSearch} 
      />
    </div>

        <div className='flex-row'>
     <div onClick={() => navigate(`/favorites`)} style={{ marginRight: "30px", cursor: "pointer", display: 'flex', alignItems: 'center' }}>
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <FaRegHeart className='heart-icon' style={{ fontSize: '24px' }} />
        
        {favorites && favorites.length > 0 && (
            <span className='custom-badge' style={{ 
                position: 'absolute', 
                top: '-22px',   
                right: '-40px', 
                margin: 0 
            }}>
                {favorites.length}
            </span>
        )}
    </div>
    
    <span style={{ marginLeft: "41px" }}>Favorilerim</span>
</div>

          <div onClick={() => navigate(`/product-basket`)} style={{ marginRight: "50px", cursor: "pointer", position: 'relative', display: 'flex', alignItems: 'center' }}>
            <div  style={{ position: 'relative' }}>
                <SlBasket className='basket-icon' style={{ fontSize: '24px' }} />
                {basketCount > 0 && (
                    <span  className='custom-badge'>{products.length}</span>
                )}
            </div>
            <span style={{ marginLeft: "10px" }}>Sepetim</span>
          </div>
        </div>
    </div>
  )
}

export default Header