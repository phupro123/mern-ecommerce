import "./new.scss";

import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editUser, get1 } from "../../redux/apiRequest";

const New = ({  title,action }) => {
  const dispatch= useDispatch();
  const navigate= useNavigate();

  const user = useSelector((state) => state.auth.login?.currentUser)

  const [file, setFile] = useState(user?.image);


  const [password,setPassword] = useState('');
  const [confirmPassword,setconfirmPassword] = useState('');
  const [currentPassword,setcurrentPassword] = useState('');
  const [email,setEmail]= useState(user?.email);
  const [phone,setPhone]= useState(user?.phone);
  const [fullname,setFullname] = useState(user?.fullname);

  const {id}= useParams();
 

  const handleChangeProfile = (e) =>{
    e.preventDefault()
    
    const newUser = {
      password: password,
      email,
      phone,
      fullname,
    }
    editUser(newUser,dispatch,navigate,id,user?.accessToken)
  }

  const handleChangePass = (e) =>{
    e.preventDefault()
    
    const newUser = {
      password: password, 
    }
    editUser(newUser,dispatch,navigate,id,user?.accessToken)
  }
  return (
    <div className="new">
      <div className="newContainer">

        <div className="top">
          <h1>{title}</h1>
        </div>
            <div className="bottom">

              <form >
                  <div className="left">
                    <img
                      src={
                      `${user?.image}`
                      }
                      alt=""
                    />
                  </div>
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
                  <button type='submit'>Change</button>
                </form>

              <div className="right">
                <form onSubmit={handleChangeProfile}>
                    <div className="formInput" >
                      <label>Full Name</label>
                      <input type='text' value={fullname} onChange={(e)=>setFullname(e.target.value)}/>
                    </div>
              
                    <div className="formInput" >
                      <label>Email</label>
                      <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                    </div>
              
                    <div className="formInput" >
                      <label>Phone</label>
                      <input type='text' value={phone}  onChange={(e)=>setPhone(e.target.value)}/>
                    </div>
        
                  <button type='submit'>Change</button>
                </form>
              </div>

              <form onSubmit={handleChangePass}>
                 <div className="formInput" >
                    <label>Current Password</label>
                    <input type='password' onChange={(e)=>setcurrentPassword(e.target.value)} />
                </div>
                 <div className="formInput" >
                    <label>Password</label>
                    <input type='password' onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <div className="formInput" >
                    <label>Confirm Password</label>
                    <input type='password' onChange={(e)=>setconfirmPassword(e.target.value)}  />
                </div>
                <button type='submit'>Change</button>
              </form>
        </div>
      </div>
    </div>
  );
};

export default New;
