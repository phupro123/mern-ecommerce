import "./home.css";
import NavBar from "../NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { deleteUser, getAllUsers } from "../../redux/apiRequest";


const HomePage = () => {
  // DUMMY DATA
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user = useSelector((state) => state.auth.login?.currentUser)
 
  const userList = useSelector((state)=> state.user.users?.allUsers)
  const msg = useSelector((state)=>state.user?.msg)
  



  const handleDelete= (id)=>{
    deleteUser(user?.accessToken, dispatch, id)
  }

  //Load trang
  useEffect(()=>{
    if(!user){
      navigate('/login')
    }
    if(user?.accessToken){
      getAllUsers(user?.accessToken,dispatch)
    }
  
  },[]) 

  return (

  
    <main className="home-container">
          <div>  <NavBar/></div>
      <div className="home-title">User List</div>
      <div className="home-userlist">
        {`ROLE: ${user?.role==='2' ? 'seller' :'customer'}`}
        {userList?.map((user) => {
          return (
            <div className="user-container">
              <div className="home-user">{user.username}</div>
              <div className="delete-user" onClick={()=>handleDelete(user._id)}> Delete </div>
            </div>
          );
        })}
      </div>
      <div className="errorMsg"> {msg}</div>
    </main>
  );
};

export default HomePage;
