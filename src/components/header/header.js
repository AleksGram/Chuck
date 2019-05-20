import React from 'react';
import './header.css';
import icon from './chuck-min.png';


const Header = () => {
    return (
        <div className="header">
            <img src={icon} alt="icon"></img>
            <button id='socket'>Socket</button>
        </div>
    )
}
 export default Header;