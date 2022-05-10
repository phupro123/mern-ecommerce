import axios from "axios"

import { createFalse, createStart, createSuccess,deleteProductFalse, deleteProductStart, deleteProductSuccess,  editProductFalse,  editProductStart,  editProductSuccess,  getProductsFalse, getProductsStart, getProductsSuccess } from "./productSlice";



export const createProduct = async(product,dispatch,navigate) =>{
    dispatch(createStart())
   try{
       
       const res= await axios.post("/login/create",product)
       dispatch(createSuccess(res.data))
        navigate('/login')
       
           
   }catch(err){
       dispatch(createFalse())
   }
}

export const editProduct = async(product,dispatch,navigate,id,accessToken) =>{
    dispatch(editProductStart())
   try{
       
       const res= await axios.put("/product/edit/"+id,product,{
        headers: {token: `Bearer ${accessToken}`},})
       dispatch(editProductSuccess(res.data))
        //navigate('/login')
       
           
   }catch(err){
       dispatch(editProductFalse(err.response.data))
   }
}

export const getAllProducts = async(accessToken,dispatch) =>{
    dispatch(getProductsStart())
   try{
       
       const res= await axios.get("/product/all",{
           headers: {token: `Bearer ${accessToken}`},
       })
       dispatch(getProductsSuccess(res.data))
    
       
           
   }catch(err){
       dispatch(getProductsFalse())
   }
}

export const get1Product = async(accessToken,dispatch,id) =>{
    dispatch(getProductsStart())
   try{
       
       const res= await axios.get("/product/get/"+id,{
           headers: {token: `Bearer ${accessToken}`},
       })
       dispatch(getProductsSuccess(res.data))
    
       
           
   }catch(err){
       dispatch(getProductsFalse())
   }
}



export const deleteProduct = async(accessToken,dispatch,id) =>{
    dispatch(deleteProductStart())
   try{
       
       const res= await axios.delete("/product/delete/"+id,{
           headers: {token: `Bearer ${accessToken}`},
       })
       dispatch(deleteProductSuccess(res.data))
    
       
           
   }catch(err){
        dispatch(deleteProductFalse(err.response.data))
   }

}


