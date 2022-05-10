import {createSlice} from "@reduxjs/toolkit"

 const productSlice = createSlice({
    name: "product",
    initialState:{
        products:{
            allProduct:null,
            isFetching:false,
            error:false,
        },
        create:{
            isFetching:false,
            error:false,
            success:false,
        },
        msg:"",

    },
    reducers:{
        getProductStart:(state) =>{
            state.products.isFetching= true
        },
        getProductSuccess: (state,action) =>{
            state.products.isFetching=false;
            state.products.allProduct=action.payload;
        },
        getProductFalse: (state) =>{
            state.products.isFetching=false
            state.products.error=true
        },

        createStart:(state) =>{
            state.create.isFetching= true
        },
        createSuccess: (state) =>{
            state.create.isFetching=false;
            state.create.error=false;
            state.create.success=true;
        },
        createFalse: (state) =>{
            state.create.isFetching=false
            state.create.error=true
            state.create.success=false;
        },


        deleteProductStart:(state) =>{
            state.products.isFetching= true
        },
        deleteProductSuccess: (state,action) =>{
            state.products.isFetching=false;
            state.msg=action.payload;
        },
        deleteProductFalse: (state,action) =>{
            state.products.isFetching=false
            state.products.error=true
            state.msg = action.payload
        },
     

        editProductStart:(state) =>{
            state.products.isFetching= true
        },
        editProductSuccess: (state,action) =>{
            state.products.isFetching=false;
            state.msg=action.payload;
        },
        editProductFalse: (state,action) =>{
            state.products.isFetching=false
            state.products.error=true
            state.msg = action.payload
        },

    },
})

export const {
    getProductStart,
    getProductFalse,
    getProductSuccess,
    deleteProductStart,
    deleteProductSuccess,
    deleteProductFalse,
    editProductStart,
    editProductSuccess,
    editProductFalse,
    createStart,
    createSuccess,
    createFalse,
} = productSlice.actions

export default productSlice.reducer