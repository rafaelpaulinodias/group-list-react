import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import MatNavbar from '../../components/mat-navbar';

const Navbar: React.FC = () => {

    return (
        <MatNavbar>
            <section>
                <NavLink to="/" className="nav-button">
                    <i className="material-icons">arrow_back</i>
                </NavLink>
                <NavLink to="/show-list" className="nav-brand">groupList</NavLink>
            </section>
            <section>
                User Name
                <NavLink to="/login" className="nav-button">
                    <i className="material-icons">exit_to_app</i>
                </NavLink>
            </section>
        </MatNavbar>
    );

}

export default Navbar;