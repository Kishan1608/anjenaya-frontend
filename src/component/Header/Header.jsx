import React, { useContext, useState } from "react";
import './Header.css'
import { Link } from 'react-router-dom';
import Fab from '@mui/material/Fab'
import UserContext from "../../context/UserContextProvider";
import axios from 'axios';
import domain from "../../util/domain";

const Header = () => {
    const {user} = useContext(UserContext);

    const [isResponsive, setIsResponsive] = useState(false);
    function onMenuClick() {
        isResponsive ? setIsResponsive(false) : setIsResponsive(true)
    }

    const handleLogout = async() => {
        await axios.get(`${domain}/auth/logout`);
        window.location.reload();
    }

    return(
        <div className="header">
            <div className="menu-icon" id="menu-icon" onClick={onMenuClick} >
                <i class="fa fa-bars" aria-hidden="true"></i>
            </div>
            <div className={`headerLeft${isResponsive?"responsive":""}`}>
                <div className="number">
                    <a className="nav-link" href="#home">Home</a>
                </div> 
                <div className="about">
                    <a className="nav-link" href="#about">About Us</a>
                </div>
                <div className="testimonals">
                    <a className="nav-link" href="#testimonials">Testimonials</a>
                </div>
                <div className="contact">
                    <a className="nav-link" href="#contact">Contact</a>
                </div>
                {user ? 
                <Fab variant="extended" onClick={handleLogout} style={{background:'#ff7675'}}>Log Out</Fab>
                :
                <Link to="/login">
                    <Fab variant="extended" className="btn-signup" style={{background: "#55efc4"}}>Sign In</Fab>
                </Link>
                }
                
                
            </div>
        </div>
    )
}

export default Header;