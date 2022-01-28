import React from 'react';

 const  Login = () => {
     
  return (
      <div className="card-container">
          <h2>Log In</h2>
          <form action="">
              <input type="text" placeholder='Email'/>
              <input type="password" placeholder='Password'/>
              <div className="btn-container">
              <input type="submit" />
              <input type="reset" />
              </div>
                  
          </form>
      </div>
  )
}
export default Login;
