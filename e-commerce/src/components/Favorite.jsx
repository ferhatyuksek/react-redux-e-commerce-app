import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Product from './Product' 
import {removeFromFavorites} from '../redux/slice/favoriteSlice'
import { GoTrash } from "react-icons/go";
import { useNavigate } from 'react-router-dom';

function Favorite() {
    const { favorites } = useSelector((store) => store.favorite);
    const dispatch = useDispatch();
    const navigate=useNavigate()

    return (
        <div style={{ padding: '20px' }}>
            <h1 style={{fontFamily: 'sans-serif'}}>Favorilerim ({favorites.length})</h1>
            <div className='flex-row' style={{ flexWrap: 'wrap', gap: '20px' }}>
                {favorites.length > 0 ? (
                    favorites.map((product) => (
                        <div key={product.id} style={{ position: 'relative' }}>
                            <Product product={product} />
                            <div style={{display:"flex",justifyContent:"center"}}>
                            <button
                            style={{width:"80%",padding:"6px",backgroundColor:"#da2424",cursor:"pointer",
                                fontSize:"15px",fontWeight:"500",color:"#fff",letterSpacing:"2px",border:"none",borderBottom:"2px solid black",borderRadius:"12px",
                            }}
                            onClick={() => dispatch(removeFromFavorites(product.id))}>Favoriyi Sil{<GoTrash style={{marginLeft:"8px",position:"absolute"}}></GoTrash>}</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div style={{
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"space-between",
                        padding:"25px 40px",
                        backgroundColor:"#fff",
                        borderRadius:"12px",
                        width:"900px",
                        margin:"20px auto"
                    }}>
                    <p style={{
                        fontFamily:"arial",
                        fontSize:"20px",
                        fontWeight:"bold"
                    }}>Henüz favori ürününüz bulunmamaktadır.</p>
                    <button style={{
                        padding:"12px",
                        width:"30%",
                        color:"white",
                        background:"linear-gradient(135deg, #1e4fb9 0% ,#5a1490 100%)",
                        borderRadius:"8px",
                        border:"none",
                        borderBottom:"2px",
                        cursor:"pointer",
                        fontFamily:"arial",
                        fontSize:"16px",
                        fontWeight:"bold"

                    }} onClick={()=> navigate("/")}>Ana Sayfa</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Favorite