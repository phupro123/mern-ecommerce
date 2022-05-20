import {createSlice} from "@reduxjs/toolkit"

 const cartSlice = createSlice({
    name: "cart",
    initialState:{
        carts:{
            allCart:null,
            isFetching:false,
            error:false,
        },
        msg:"",
    },
    reducers:{
        getCartStart:(state) =>{
            state.carts.isFetching= true
        },
        getCartSuccess: (state,action) =>{
            state.carts.isFetching=false;
            state.carts.allCart=action.payload;
        },
        getCartFalse: (state) =>{
            state.carts.isFetching=false
            state.carts.error=true
        },

        createStart:(state) =>{
            state.create.isFetching= true
        },
        createSuccess: (state,action) =>{
            state.create.isFetching=false;
         
            state.create.allCart=action.payload;
        },
        createFalse: (state) =>{
            state.create.isFetching=false
            state.create.error=true
       
        },

        deleteCartStart:(state) =>{
            state.carts.isFetching= true
        },
        deleteCartSuccess: (state,action) =>{
            state.carts.isFetching=false;
            state.msg=action.payload;
        },
        deleteCartFalse: (state,action) =>{
            state.carts.isFetching=false
            state.carts.error=true
            state.msg = action.payload
        },
     
    },
})

export const {
    getCartStart,
    getCartFalse,
    getCartSuccess,
    deleteCartStart,
    deleteCartSuccess,
    deleteCartFalse,
    createStart,
    createSuccess,
    createFalse,
  
} = cartSlice.actions

export default cartSlice.reducer