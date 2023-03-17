import React, { useContext, useState } from 'react'
import './Register.css'
import Image from '../../assest/desktop-register.svg';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {BsEyeFill,BsEyeSlashFill} from 'react-icons/bs';
import UserContext from '../../context/UserContextProvider';
import domain from '../../util/domain';



const Register = () => {
  let navigate = useNavigate();
  const [input, setInput] = useState(
    {
    fName: "",
    lName: "",
    phone: "",
    email: "",
    password: "",
    error: null
    }
  );
  const[passwordState, setPasswordState] = useState(false);

  const {getUser} = useContext(UserContext);

  const {fName, lName, phone, email, password, error} = input;

  function handleChange(e){
    const{name, value } = e.target;
    setInput({
      ...input,
      [name]:value
    })
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(fName === "" || lName === "" || phone === "" || email === "" || password === ""){
      return
    }
    try {
      setInput({ ...input, error: null})
      await axios.post(
        `${domain}/auth/register`,
        {fName, lName, phone, email, password},
        {withCredentials: true}
      );
      await getUser();
      navigate("/");
    } catch (error) {
      setInput({
        ...input,
        error: error.response.data.error
      })
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
    <>
    <div className="register">
      <div className="left">
        <Link to={"/"}>
        <h2 className="tag">Anjenaya Wealth Management.</h2>
        </Link>
        <p className='tagline'>Securing your financial future, together.</p>
        <img src={Image} width="70%" alt='404'/>
      </div>
      <div className="form-box">
        <p className='text-top'>START FOR FREE</p>
        <h2>Sign up to Anjenaya.</h2>
        <input type="text" placeholder='First Name'  name='fName' value={input.fName} onChange={handleChange}/>
        {fName === ""? <p className='error-register'>*required</p> : null}

        <input type="text" placeholder='Last Name' name='lName' value={input.lName} onChange={handleChange}/>
        {lName === ""? <p className='error-register'>*required</p> : null}

        <input type="number" placeholder='Phone' name='phone' value={input.phone} onChange={handleChange}/>
        {phone === ""? <p className='error-register'>*required</p> : null}

        <input type="email" placeholder='Email' name='email' value={input.email} onChange={handleChange}/>
        {email === ""? <p className='error-register'>*required</p> : null}

        <div className="pass-field">
          <input type={!passwordState?`password`:`text`} placeholder='Password' name='password' value={input.password} onChange={handleChange}/>
          <div className="input-pass-btn">
            <button className='btn-pass-toggle' onClick={togglePassword}>{passwordState ? <BsEyeFill size="18px"/> : <BsEyeSlashFill size="18px"/>}</button>
          </div>
        </div>
        {password === ""? <p className='error-register'>*required</p> : null}

        {error?<p className='error-register'>*{error}</p>:null}


        <button className='btn-register' onClick={handleSubmit}>Register</button>

        <p className='text-below'>Already a user? <Link to="/login"> Login </Link></p>
      </div>
    </div>
    </>
  )
}

export default Register