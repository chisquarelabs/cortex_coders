import React, { useState } from 'react';
import axios from "axios";
//import TodoItem from ‘./TodoItem’;



function Login() {
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      
      const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
      // if (!emailRegex.test(email)) {
      //   //toast.error("Please enter a valid email address.");
      //   return;
      // }
      
      const formData = new FormData();
      
      formData.append("email", email);
      formData.append("password", password);
     
      // axios
      //   .post("http://localhost:8000/api/login", formData)
      //   .then((response) => {
      //     if (response.data.success) {
      //       //navigate("/admin/success");
      //       //toast.success("Submission success");
      //     }
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //     //toast.error("Email or Mobile Number Already Registered...");
      //   });
      const response = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
    } catch (error) {
      //toast.error("Something went wrong");
    }
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    return (
      <form action="http://localhost:8000/api/login" method="POST" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
                  type="text"
                  value={email}
                  name="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  id="form3Example1c"
                  className="form-control"
                />
      
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
                  type="password"
                  value={password}
                  name="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  id="form3Example1c"
                  className="form-control"
                />
        </div>
        <div className="form-check">
          <input 
            type="checkbox" 
            className="form-check-input" 
            id="exampleCheck1" 
          />
       
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
  
  export default Login;
