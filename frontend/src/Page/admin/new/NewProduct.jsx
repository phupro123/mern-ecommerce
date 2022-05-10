import "./new.scss";
import Sidebar from "../../../Components/admin/sidebar/Sidebar";
import Navbar from "../../../Components/admin/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams,  } from "react-router-dom";
import { editUser, get1 } from "../../../redux/apiRequest";
import { get1Product } from "../../../redux/apiProduct";

const New = ({  title,action }) => {
  const dispatch= useDispatch();
  const navigate= useNavigate();

  const user = useSelector((state) => state.auth.login?.currentUser)

  const selectedUser = useSelector((state) => state.product.products?.allProduct)
  const [file, setFile] = useState(selectedUser.image);

  // const [username,setUsername]=useState(selectedUser.username);
  // const [password,setPassword] = useState(selectedUser.password);
  // const [email,setEmail]= useState(selectedUser.email);
  // const [phone,setPhone]= useState(selectedUser.phone);
  // const [fullname,setFullname] = useState(selectedUser.fullname);
  // const [role,setRole]=useState(selectedUser.role);  
  
  const {productid}= useParams()
 
  //Load trang
  useEffect(()=>{
  
    if(user?.accessToken){
      get1Product(user?.accessToken,dispatch,productid)
     // getAllUsers(user?.accessToken,dispatch)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]) 

  const handleLogin = (e) =>{
    e.preventDefault()
    
    // const newUser = {
    //   username: username,
    //   password: password,
    //   email,
    //   phone,
    //   fullname,
    //   role,
    //   image: file,
    // }
    // editUser(newUser,dispatch,navigate,id,user?.accessToken)
  }
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : `${selectedUser.image}`
              }
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={handleLogin}>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

                <div className="formInput" >
                  <label>Username</label>
                  <input type='text' placeholder={selectedUser.name}  />
                </div>
                <div className="formInput" >
                  <label>Full Name</label>
                  <input type='text' placeholder={selectedUser.fullname} />
                </div>
           
                <div className="formInput" >
                  <label>Password</label>
                  <input type='password' />
                </div>
           
                <div className="formInput" >
                  <label>Email</label>
                  <input type='email' placeholder={selectedUser.email}  />
                </div>
           
                <div className="formInput" >
                  <label>Confirm Password</label>
                  <input type='password'  />
                </div>
           
                <div className="formInput" >
                  <label>Phone</label>
                  <input type='text' placeholder={selectedUser.phone}  />
                </div>
                
                <select className="table-group-action-input form-control"  > 
                <option value="3" >Customer</option>
                <option value="2" >Seller</option>
              </select>
           
              <button type='submit'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
