import React from 'react'
import Navbar from './Navbar'

const Signup = () => {
  return (
    <>
    <Navbar/>
    <div id="login">
    <div id="login-box">
        <div className="leftbox">
            <h1>Sign up</h1>

            <input type="text" name="username" placeholder="Username" />
            <input type="text" name="email" placeholder="E-mail" />
            <input type="password" name="password" placeholder="Password" />
            <input type="password" name="password2" placeholder="Retype password" />
            <input type="submit" className="submit" name="signup_submit" value="Signup" />
        </div>

        <div class="rightbox">
            <button type="button" className="facebook">Log in with Facebook</button>
            <button type="button" className="google">Log in with Google+</button>
        </div>
        <div className="or">OR</div>
    </div>
    </div>
    </>
  )
}

export default Signup