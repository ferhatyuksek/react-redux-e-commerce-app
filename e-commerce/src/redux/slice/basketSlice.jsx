import { createSlice } from '@reduxjs/toolkit'

const getBasketFromStorage = () => {
    if (localStorage.getItem("basket")) {
        return JSON.parse(localStorage.getItem("basket"))
    }
    return []
}

const initialState = {
    products: getBasketFromStorage(),
}

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        
        addToBasket: (state, action) => {
            const findProduct = state.products.find((product) => product.id === action.payload.id)
            
            if (findProduct) {
                findProduct.count += action.payload.count;
            } else {
                state.products = [...state.products, action.payload]
            }
            
            localStorage.setItem("basket", JSON.stringify(state.products))
        },
        removeFromBasket: (state,action)=>{
            state.products = state.products.filter((p) => p.id !== action.payload);
            localStorage.setItem("basket", JSON.stringify(state.products));
        },
        updateQuantity: (state, action) => {
            const { id, type } = action.payload; 
            const product = state.products.find((p) => p.id === id);
            
            if (product) {
                if (type === 'increment') {
                    product.count += 1;
                } else if (type === 'decrement' && product.count > 1) {
                    product.count -= 1;
                }
            }
            localStorage.setItem("basket", JSON.stringify(state.products));
        }
        
    }
})

export const { addToBasket,removeFromBasket,updateQuantity } = basketSlice.actions
export default basketSlice.reducer