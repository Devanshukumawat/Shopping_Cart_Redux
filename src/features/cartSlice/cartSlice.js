import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  cart:[],
  quantity:0

}

export const cartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
   addToCart : (state,action)=>{

    
    const { id } = action.payload
    let find = state.cart.findIndex((data)=>  data.id === id)

    if (find !== -1) {
     state.cart[find] = {
       ...state.cart[find],
       quantity: state.cart[find].quantity + 1
     };
   } else {
     state.cart.push({ ...action.payload, quantity: 1 });
   }

       
   }
  }
})


export const { addToCart } = cartSlice.actions

export default cartSlice.reducer