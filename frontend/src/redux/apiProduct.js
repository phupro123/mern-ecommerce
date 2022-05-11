import axios from "axios"

import { createFalse, createStart, createSuccess,deleteProductFalse, deleteProductStart, deleteProductSuccess,  editProductFalse,  editProductStart,  editProductSuccess,  getProductFalse, getProductStart, getProductSuccess } from "./productSlice";



export const createProduct = async(product,dispatch,navigate) =>{
    dispatch(createStart())
   try{
       
       const res= await axios.post("/product/new",product)
       dispatch(createSuccess(res.data))
        
       
           
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

export const getAllProduct = async(accessToken,dispatch) =>{
    dispatch(getProductStart())
   try{
       
       const res= await axios.get("/product/all",{
           headers: {token: `Bearer ${accessToken}`},
       })
       dispatch(getProductSuccess(res.data))
    
       
           
   }catch(err){
       dispatch(getProductFalse())
   }
}

export const getCategory1 = async(dispatch) =>{
    dispatch(getProductStart())
   try{
       
       const res= await axios.get("/product/category/1")
       dispatch(getProductSuccess(res.data))
    
   }catch(err){
       dispatch(getProductFalse())
   }
}
export const getCategory2 = async(dispatch) =>{
    dispatch(getProductStart())
   try{
       
       const res= await axios.get("/product/category/2")
       dispatch(getProductSuccess(res.data))
    
   }catch(err){
       dispatch(getProductFalse())
   }
}
export const getCategory3 = async(dispatch) =>{
    dispatch(getProductStart())
   try{
       
       const res= await axios.get("/product/category/3")
       dispatch(getProductSuccess(res.data))
    
   }catch(err){
       dispatch(getProductFalse())
   }
}
export const getCategory4 = async(dispatch) =>{
    dispatch(getProductStart())
   try{
       
       const res= await axios.get("/product/category/4")
       dispatch(getProductSuccess(res.data))
    
   }catch(err){
       dispatch(getProductFalse())
   }
}

export const getTop5Product = async(dispatch) =>{
    dispatch(getProductStart())
   try{
       
       const res= await axios.get("/product/getTop5")
       dispatch(getProductSuccess(res.data))
    
   }catch(err){
       dispatch(getProductFalse())
   }
}

export const getProductSeller = async(accessToken,dispatch,id) =>{
    dispatch(getProductStart())
   try{
       
       const res= await axios.get("/product/getbyseller/"+id)
       dispatch(getProductSuccess(res.data))
    
   }catch(err){
       dispatch(getProductFalse())
   }
}

export const get1Product = async(accessToken,dispatch,id) =>{
    dispatch(getProductStart())
   try{
       
       const res= await axios.get("/product/get/"+id,{
           headers: {token: `Bearer ${accessToken}`},
       })
       dispatch(getProductSuccess(res.data))
    
       
           
   }catch(err){
       dispatch(getProductFalse())
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


