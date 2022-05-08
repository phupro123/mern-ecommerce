import axios from "axios"
import {loginFalse, loginStart, loginSuccess, registerFalse, registerStart, registerSuccess, logOutStart,logOutSuccess,logOutFailed} from './authSlice'
import { deleteUserFalse, deleteUserStart, deleteUserSuccess, getUsersFalse, getUsersStart, getUsersSuccess } from "./userSlice";


export const loginUser = async(user,dispatch,navigate) =>{
     dispatch(loginStart())
    try{
       // const i =3;
        const res= await axios.post("/login",user)
        dispatch(loginSuccess(res.data))
       // if(i===2){
            navigate('/')
       // }
       // else if(i===3)
       // {
           // navigate('/admin')
        //}
            
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

export const deleteUser = async(accessToken,dispatch,id, axiosJWT) =>{
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

