import React, { useEffect, useState } from "react";
import { Link, useNavigate, redirect } from 'react-router-dom';
import { GoThreeBars } from "react-icons/go";
import { AiOutlineClose } from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import { MdLogin, MdLogout} from "react-icons/md";
import './Sidebar.css';
import { IconContext } from "react-icons/lib";
import logo from "../../images/Ankara_Üniversitesi_logosu.png";

const SideBar = () => {
    const auth = localStorage.getItem("token");
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => {setSidebar(!sidebar);}
    const navigate = useNavigate();

    const redirectSchoolWebSite = () => {
        window.open("http://comp.eng.ankara.edu.tr/", '_blank');
    }
    
    const endSession = () => {
        localStorage.clear();
        navigate('/authentication');
    }

    return(
        <>
        <IconContext.Provider value={ {color: 'white'} }>
            <div className="navbar">
                <Link to='#' className='menu-bars'>
                    <GoThreeBars onClick={showSidebar}/>
                </Link>
                
                {
                    auth == null ?
                        <Link to='/authentication' className="sign-btn">
                            <span className="sign-text">Sign in/Sign up</span>
                            <MdLogin/>
                        </Link>
                    :
                        <Link to='/authentication' className="sign-btn" onClick={endSession}>
                            <span className="sign-text">End Session</span>
                            <MdLogout/>
                        </Link>    
                }
                <Link to='#/authentication'>
                        <img  src={logo} className="logo" alt="ankü-logo" onClick={redirectSchoolWebSite}/>
                </Link>
                
            </div>
            <nav className={sidebar && auth != null ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to='#' className="menu-bars">
                            <AiOutlineClose/>
                        </Link>
                    </li>
                    {SidebarData.map((page, index) => {
                        return (
                            <li key={index} className='nav-text'>
                                <Link to={page.path}>
                                    {page.icon}
                                    <span>{page.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </IconContext.Provider>
        </>
    )
}

export default SideBar;