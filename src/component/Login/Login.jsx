import React, { useContext, useState } from 'react'
import './Login.css'
import Image from '../../assest/login.svg'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {BsEyeFill,BsEyeSlashFill} from 'react-icons/bs';
import UserContext from '../../context/UserContextProvider';
import domain from '../../util/domain';

const Login = () => {
  let navigate = useNavigate();
  const[user, setUser] = useState({
    email: "",
    password: "",
    error: null
  })
  const[passwordState, setPasswordState] = useState(false);

  const {email, password, error} = user;

  const {getUser} = useContext(UserContext);

  function handleChange(e){
    const{ name, value } = e.target;

    setUser({
      ...user,
      [name]:value
    })
  }

  

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(email === "" || password === ""){
      return 
    }
    try {
      setUser({ ...user, error: null})
      await axios.post(
        `${domain}/auth/login`,
        {email,password},
        {withCredentials: true}
      );
      await getUser();
      navigate('/');
    } catch (error) {
      setUser({
        ...user,
        error: error.response.data.error
      });
    }
  }

  function togglePassword(){
    if(passwordState){
      setPasswordState(false);
    }else{
      setPasswordState(true)
    }
  }


  return (
    <div className="login">
        <div className="left-login">
        <Link to={'/'}><h2 className="tag">Anjenaya Wealth Management.</h2></Link>
            <p className="tagline">Securing your financial future, together.</p>
            <img src={Image} alt="" width="70%"/>
        </div>
        <div className="right">
            <h2 className='text-top-login'>Sign in to Anjenaya.</h2>
            <input type="email" placeholder='Email' name='email' value={user.email} onChange={handleChange} />
            {email === ""? <p className='error-login'>*required</p> : null}
            
            <div className='password-field'>
              <input type={!passwordState? `password`:`text`} placeholder='Password' name='password' value={user.password} onChange={handleChange}/>
              <div className="input-group-btn">
                <button className='btn-toggle' onClick={togglePassword}>{passwordState ? <BsEyeFill size="18px"/> : <BsEyeSlashFill size="18px"/>}</button>
              </div> 
            </div>
            {password === ""? <p className='error-login'>*required</p> : null}
            {error? <p className='error-login'>*{error}</p> : null}

            <button className="btn-login" onClick={handleSubmit}>Login</button>

            <p className="text-below">Create a new Account. <Link to="/register">Register</Link></p>
        </div>
    </div>
  )
}

export default Login