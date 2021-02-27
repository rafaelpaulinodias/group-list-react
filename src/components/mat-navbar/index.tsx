import React from 'react';
import './style.css';

const Navbar: React.FC = (props) => {
    
    return (
        <nav>{props.children}</nav>
    );
    
}

export default Navbar;
