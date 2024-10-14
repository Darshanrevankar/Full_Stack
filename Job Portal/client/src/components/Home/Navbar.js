import React, { useState } from 'react'
import '../Home/Navbar.css'
import logo from '../../assets/logo.png'
export default function Navbar() {
    
    const [isOpen, setIsOpen] = useState(false);

    const onClickOpen=()=>{
        setIsOpen(!isOpen);
    }

    return (
        <div className='container'>
            <nav className={`${isOpen ? 'active' : ''}`}>
                <div className="nav-bar">
                    <a className="logo navLogo" href='/'><img src={logo} /></a>
                    <div className="menu" >
                        <ul className="nav-links">
                            <li><a className="btn" href="/Alljobs"><ion-icon name="briefcase-outline"></ion-icon><span> JOBS</span></a></li>
                            <li><a href="/Login">LOGIN</a></li>
                        </ul>
                    </div>
                    <i onClick={onClickOpen} className={`bx bx-${isOpen? 'x' : 'menu'} sidebarOpen`}></i>
                </div>
            </nav>
        </div>
    )
}
