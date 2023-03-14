import React,{useState} from 'react'
import {useNavigate} from "react-router-dom"

const Login = () => {
  const navigate = useNavigate();

    const [LoginDetails, setLoginDetails]=useState({
        email:"",
        pass:""
      })

      
      function formSubmit(e){
        e.preventDefault();
        
        let userdata = localStorage.getItem("usersData")
        console.log(userdata)
        // navigate("/")
      }

      function createAcc(){
        navigate("/signup")
      }
    
  return (
    <>
    <h1>Login form</h1>
    <form className='loginform' onSubmit={formSubmit}>
        <input 
        type="email" 
        value={LoginDetails.email}
        placeholder="Enter Email"
        onChange={(e)=>setLoginDetails({...LoginDetails, email:e.target.value})}
        />
        <input 
        type="password" 
        value={LoginDetails.pass}
        placeholder="Enter password"
        onChange={(e)=>setLoginDetails({...LoginDetails, pass:e.target.value})}
        />
        <p className='createAcc' onClick={createAcc}>Create Account</p>
        <input 
        className='btn'
        type="submit"
        value="Login"
        />
    
    </form>
    </>
  )
}

export default Login