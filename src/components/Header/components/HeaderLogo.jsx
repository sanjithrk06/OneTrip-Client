import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'

const HeaderLogo = ({ openMenu }) => {
    return (
        <>
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={openMenu}>
                    <i className="fa-solid fa-bars"></i>
                </button>
                <Link className="navbar-brand" to="/#">
                    <h1 className="logo">One Trip</h1>
                </Link>
            </div>
        </>
    );
};

export default HeaderLogo;