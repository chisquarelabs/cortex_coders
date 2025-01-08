import React, { useState } from 'react';
//import TodoItem from ‘./TodoItem’;
function Login() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input 
            type="email" 
            className="form-control" 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp" 
            placeholder="Enter email" 
          />
      
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="exampleInputPassword1" 
            placeholder="Password" 
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
