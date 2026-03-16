import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  products:[],
  filteredProducts: [],
  selectedProduct:{},
  loading:false
}
export const getAllProducts= createAsyncThunk("getAllProducts", async()=>{
   const res= await axios.get('https://fakestoreapi.com/products')
   return res.data
})

export const productSlice=createSlice({
    name:"product",
    initialState,
    reducers: {
        setSelectedProduct: (state, action) => {
            state.selectedProduct = action.payload;
        },
        setSearchTerm: (state, action) => {
            const term = action.payload.toLowerCase();
            state.filteredProducts = state.products.filter((product) =>
                product.title.toLowerCase().includes(term)
            );
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
            state.filteredProducts = action.payload;
        })
    }
})
export const {setSelectedProduct,setSearchTerm } = productSlice.actions

export default productSlice.reducer