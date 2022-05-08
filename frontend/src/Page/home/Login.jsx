import styled from "styled-components";
import {  useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useState } from "react";
import { loginUser } from "../../redux/apiRequest";




const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
 
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;
const Url = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;


const Login = () => {
    const [username,setUsername]= useState("");
    const [password,setPassword] = useState("");
    const dispatch= useDispatch();
    const navigate= useNavigate();
    
    const handleLogin = (e) =>{
      e.preventDefault()

      const newUser = {
        username: username,
        password: password,
      }
      loginUser(newUser,dispatch,navigate)
    }
    return ( 
        <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form onSubmit={handleLogin}>
            <Input placeholder="username"  onChange={(e)=>setUsername(e.target.value)}/>
            <Input placeholder="password"  onChange={(e)=>setPassword(e.target.value)}  type="password" />
            <Button type="submit" >LOGIN</Button>
            <Url>DO NOT YOU REMEMBER THE PASSWORD?</Url>
            <Url href="/register">CREATE A NEW ACCOUNT</Url>
          </Form>
        </Wrapper>
      </Container>
     );
}

export default Login;