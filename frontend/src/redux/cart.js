import axios from "axios"
import { addCartFalse, addCartStart, addCartSuccess } from "./cartSlice"



export const addToCart = async(product,cart,dispatch,navigate) =>{
    dispatch(addCartStart())
   try{
    const existingIndex= cart?.some(element => {
        return product?._id === element?._id
    });
  
    
    if(existingIndex){

        const tempCart =cart?.map(element => {
             
            if( product?._id === element?._id)
            {
              const number= parseInt(product?.quantity)+parseInt(element.quantity)
              const quantity = number.toString() 
        
               const temp = Object.assign({}, product , {'quantity':quantity});
                          
               return temp
            }
            else{
              return element

            }
              
        });
        dispatch(addCartSuccess(tempCart))
    }
    else{
        cart.push(product)
        dispatch(addCartSuccess(cart))
    }
      
      
    //    console.log(cart)
      

       
           
   }catch(err){

       dispatch(addCartFalse())};
}


export const changeQuantity = async(product,cart,dispatch,soluong) =>{
    dispatch(addCartStart())
   try{
        const tempCart =cart?.map(element => {
             
            if( product?._id === element?._id)
            {
              const number= parseInt(soluong) 
              const quantity = number.toString() 
             
               const temp = Object.assign({}, product , {'quantity':quantity});
                          
               return temp
            }
            else{
              return element

            }
              
        });
        dispatch(addCartSuccess(tempCart))

   }catch(err){

       dispatch(addCartFalse())};
}

export const removeFormCart = async(id,cart,dispatch) =>{
    dispatch(addCartStart())
   try{
        const filterResult = cart.filter(function(element){
            return element._id !== id;
        });
        dispatch(addCartSuccess(filterResult))

   }catch(err){

       dispatch(addCartFalse())};
}

export const removeAllFormCart = async(cart,dispatch) =>{
    dispatch(addCartStart())
   try{
        const filterResult = cart.filter(function(element){
            return element._id === -1;
        });
        dispatch(addCartSuccess(filterResult))

   }catch(err){

       dispatch(addCartFalse())};
}