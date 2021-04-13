import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import MatNavbar from '../../components/mat-navbar';

const Navbar: React.FC = () => {

    return (
        <MatNavbar>
            <section>
                <Link to="/" className="nav-button">
                    <i className="material-icons">arrow_back</i>
                </Link>
                <Link to="/show-list" className="nav-brand">groupList</Link>
            </section>
            <section>
                User Name
                <Link to="/login" className="nav-button">
                    <i className="material-icons">exit_to_app</i>
                </Link>
            </section>
        </MatNavbar>
    );

}

export default Navbar;