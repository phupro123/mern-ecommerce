import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { registerUser } from "../../redux/apiRequest";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;


const Register = () => {
  const [username,setUsername]=useState("");
  const [password,setPassword] = useState("");
  const [email,setEmail]= useState("");
  const [phone,setPhone]= useState("");
  const [fullname,setFullname] = useState("");
  const [role,setRole]=useState("3");  
  const dispatch= useDispatch();
  const navigate= useNavigate();
  
  const handleLogin = (e) =>{
    e.preventDefault()
    const newUser = {
      username: username,
      password: password,
      email,
      phone,
      fullname,
      role,
    }
    registerUser(newUser,dispatch,navigate)
  }

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleLogin}>
          <Input placeholder="Full Name" onChange={(e)=>setFullname(e.target.value)}/>
          <Input placeholder="Email"  type='email'onChange={(e)=>setEmail(e.target.value)} />
          <Input placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
          <Input placeholder="Phone" onChange={(e)=>setPhone(e.target.value)}/>
          <Input placeholder="Password" type='password' onChange={(e)=>setPassword(e.target.value)}/>
          <Input placeholder="Confirm Password" />

          <select name='role_id' className="table-group-action-input form-control" onChange={(e)=>setRole(e.target.value)}> 
            <option value="3" >Customer</option>
            <option value="2" >Seller</option>
           </select>

          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>  
          <Button type="submit" >CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;