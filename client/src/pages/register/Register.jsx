import { Link } from "react-router-dom";
import "./register.scss";

export default function Register() {
  return (
    <div className="register">
        <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input className="registerInput" type="text" placeholder="Enter your username" />
        <label>Email</label>
        <input className="registerInput" type="email" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Enter your password..." />
        <button className="registerButton"><Link className='link' to="/register">Register</Link></button>
      </form>
      <button className="registerLoginButton"><Link className='link' to="/login">Login</Link></button>
    </div>
  )
}
