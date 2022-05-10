import axios from "axios"

import { createFalse, createStart, createSuccess,deleteOderFalse, deleteOderStart, deleteOderSuccess,  editOderFalse,  editOderStart,  editOderSuccess,  getOdersFalse, getOdersStart, getOdersSuccess } from "./oderSlice";






export const createOder = async(oder,dispatch,navigate) =>{
    dispatch(createStart())
   try{
       
       const res= await axios.post("/login/create",oder)
       dispatch(createSuccess(res.data))
        navigate('/login')
       
           
   }catch(err){
       dispatch(createFalse())
   }
}

export const editOder = async(oder,dispatch,navigate,id,accessToken) =>{
    dispatch(editOderStart())
   try{
       
       const res= await axios.put("/oder/edit/"+id,oder,{
        headers: {token: `Bearer ${accessToken}`},})
       dispatch(editOderSuccess(res.data))
        //navigate('/login')
       
           
   }catch(err){
       dispatch(editOderFalse(err.response.data))
   }
}

export const getAllOders = async(accessToken,dispatch) =>{
    dispatch(getOdersStart())
   try{
       
       const res= await axios.get("/oder/all",{
           headers: {token: `Bearer ${accessToken}`},
       })
       dispatch(getOdersSuccess(res.data))
    
       
           
   }catch(err){
       dispatch(getOdersFalse())
   }
}

export const get1 = async(accessToken,dispatch,id) =>{
    dispatch(getOdersStart())
   try{
       
       const res= await axios.get("/oder/get/"+id,{
           headers: {token: `Bearer ${accessToken}`},
       })
       dispatch(getOdersSuccess(res.data))
    
       
           
   }catch(err){
       dispatch(getOdersFalse())
   }
}



export const deleteOder = async(accessToken,dispatch,id) =>{
    dispatch(deleteOderStart())
   try{
       
       const res= await axios.delete("/oder/delete/"+id,{
           headers: {token: `Bearer ${accessToken}`},
       })
       dispatch(deleteOderSuccess(res.data))
    
       
           
   }catch(err){
        dispatch(deleteOderFalse(err.response.data))
   }

}


