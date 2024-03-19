import { Component } from "react";
import "./index.css"

class LoginForm extends Component{
    render(){
        return(
            <div className="login-con">
                <div className="login-form">
                <img src="https://res.cloudinary.com/dtm38igx6/image/upload/v1710777695/Group_7420_bqigsp.png" alt="logo" className="logo"/>
                <h1 className="login-head">Tasty Kitchens</h1>
                <p className="login-name">Login</p>
                <div className="username-con">
                    <label htmlFor="username" className="username">USERNAME</label>
                    <input type="text" id="username" className="input-username"  />
                </div>
                <div className="password-con">
                    <label htmlFor="password" className="password">PASSWORD</label>
                    <input type="password" id="password" className="input-password"      />
                </div>
                <p className="error-msg">Please enter valid Username & Password</p>
                <button type="submit" className="login-btn">Login</button>
                </div>
                <div className="login-left-img">
                </div>
                
            </div>
        )
    }
}

export default LoginForm