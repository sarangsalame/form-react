import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    pass: "",
  });

  function handlesignup(e) {
    e.preventDefault();

    let usersdata = JSON.parse(localStorage.getItem("usersData")) || [];

    console.log(usersdata)

    if (usersdata === null) {
      usersdata=[user]
      console.log(usersdata);

      localStorage.setItem("usersData", JSON.stringify(usersdata));
      navigate("/login");
    } 
    else {
      console.log(usersdata);
      console.log(user);
     let newusersdata = [...usersdata, user];
    
    // usersdata.push(user);
      console.log(newusersdata)
      localStorage.setItem("usersData", JSON.stringify(newusersdata));
      navigate("/login");
    }
  }

  return (
    <>
      <h1>Signup form</h1>
      <form className='signupform' onSubmit={handlesignup}>
        <input
          type='text'
          value={user.name}
          placeholder='Enter Name'
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          type='email'
          value={user.email}
          placeholder='Enter Email'
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type='password'
          value={user.pass}
          placeholder='Enter password'
          onChange={(e) => setUser({ ...user, pass: e.target.value })}
        />

        <input className='btn' type='submit' value='Signup' />
      </form>
    </>
  );
};

export default Signup;
