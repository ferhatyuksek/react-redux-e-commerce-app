import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    favorites: localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem("favorites")) : []
}

export const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        addToFavorites: (state, action) => {
            const findProduct = state.favorites.find((p) => p.id === action.payload.id);
            if (!findProduct) {
                state.favorites = [...state.favorites, action.payload];
                localStorage.setItem("favorites", JSON.stringify(state.favorites));
            }
        },
        removeFromFavorites: (state, action) => {
            state.favorites = state.favorites.filter((p) => p.id !== action.payload);
            localStorage.setItem("favorites", JSON.stringify(state.favorites));
        }
    }
})

export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;