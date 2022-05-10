import axios from "axios"
import {loginFalse, loginStart, loginSuccess, registerFalse, registerStart, registerSuccess, logOutStart,logOutSuccess,logOutFailed} from './authSlice'
import { deleteUserFalse, deleteUserStart, deleteUserSuccess,  editUserFalse,  editUserStart,  editUserSuccess,  getUsersFalse, getUsersStart, getUsersSuccess } from "./userSlice";


export const loginUser = async(user,dispatch,navigate) =>{
     dispatch(loginStart())
    try{
       
        const res= await axios.post("/login",user)
        dispatch(loginSuccess(res.data))
        const role =res.data.role
        if(role==='3'){
            navigate('/')
        }
        else if(role==='2')
       {
           navigate('/seller')
        }
        else if(role ==='1')
        {
            navigate('/admin')
        }
        
       
            
    }catch(err){
        dispatch(loginFalse())
    }
}




export const registerUser = async(user,dispatch,navigate) =>{
    dispatch(registerStart())
   try{
       
       const res= await axios.post("/login/register",user)
       dispatch(registerSuccess(res.data))
        navigate('/login')
       
           
   }catch(err){
       dispatch(registerFalse())
   }
}

export const editUser = async(user,dispatch,navigate,id,accessToken) =>{
    dispatch(editUserStart())
   try{
       
       const res= await axios.put("/user/edit/"+id,user,{
        headers: {token: `Bearer ${accessToken}`},})
       dispatch(editUserSuccess(res.data))
        //navigate('/login')
       
           
   }catch(err){
       dispatch(editUserFalse(err.response.data))
   }
}

export const getAllUsers = async(accessToken,dispatch) =>{
    dispatch(getUsersStart())
   try{
       
       const res= await axios.get("/user/all",{
           headers: {token: `Bearer ${accessToken}`},
       })
       dispatch(getUsersSuccess(res.data))
    
       
           
   }catch(err){
       dispatch(getUsersFalse())
   }
}

export const get1 = async(accessToken,dispatch,id) =>{
    dispatch(getUsersStart())
   try{
       
       const res= await axios.get("/user/get/"+id,{
           headers: {token: `Bearer ${accessToken}`},
       })
       dispatch(getUsersSuccess(res.data))
    
       
           
   }catch(err){
       dispatch(getUsersFalse())
   }
}



export const deleteUser = async(accessToken,dispatch,id) =>{
    dispatch(deleteUserStart())
   try{
       
       const res= await axios.delete("/user/delete/"+id,{
           headers: {token: `Bearer ${accessToken}`},
       })
       dispatch(deleteUserSuccess(res.data))
    
       
           
   }catch(err){
        dispatch(deleteUserFalse(err.response.data))
   }

}

 export const logOut = async (dispatch, id, navigate, accessToken) => {
    dispatch(logOutStart());
    try {
      await axios.post("/login/logout", id, {
        headers: { token: `Bearer ${accessToken}` },
      });
      dispatch(logOutSuccess());
      navigate("/login");
    } catch (err) {
      dispatch(logOutFailed());
    }
}

