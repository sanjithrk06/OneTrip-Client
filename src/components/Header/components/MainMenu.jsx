import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'

const MainMenu = ({ isOpen, closeMenu, toggleSubMenu, toggleMegaMenu }) => {
    return (
        <>
            <div className={`collapse navbar-collapse collapse-mobile ${isOpen ? "show" : ""}`} id="navbar-menu">
                {/* <img src="/img/logo/logo.png" alt="Logo" /> */}
                <button type="button" className="navbar-toggle" onClick={closeMenu}>
                    <i className="fa-solid fa-times"></i>
                </button>
                <ul className="nav navbar-nav navbar-center">
                    <li className="dropdown">
                        <Link to={void (0)} className="dropdown-toggle active" onClick={toggleSubMenu}>Home</Link>
                        <ul className="dropdown-menu">
                            <li><Link to="/#">Creative Agency</Link></li>
                            <li><Link to="/#">Digital Agency</Link></li>
                            <li><Link to="/#">Digital Marketing</Link></li>
                            <li><Link to="/#">Consulting Business</Link></li>
                            <li className="dropdown">
                                <Link to={void (0)} className="dropdown-toggle" onClick={toggleSubMenu}>Home Dark Version</Link>
                                <ul className="dropdown-menu">
                                    <li><Link to="/#">Creative Agency</Link></li>
                                    <li><Link to="/#">Digital Agency</Link></li>
                                    <li><Link to="/#">Digital Marketing</Link></li>
                                    <li><Link to="/#">Consulting Business</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown megamenu-fw">
                        <Link to={void (0)} className="dropdown-toggle" onClick={toggleSubMenu}>MegaMenu</Link>
                        <ul className="dropdown-menu megamenu-content">
                            <li>
                                <div className="row">
                                    <div className="col-menu col-lg-3">
                                        <h6 className="title" onClick={toggleMegaMenu}>Services</h6>
                                        <div className="content" >
                                            <ul className="menu-col ">
                                                <li><Link to="/#">Services Style One</Link></li>
                                                <li><Link to="/#">Services Style Two</Link></li>
                                                <li><Link to="/#">Services Style Three</Link></li>
                                                <li><Link to="/#">Services Single</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-menu col-lg-3">
                                        <h6 className="title" onClick={toggleMegaMenu}>Projects</h6>
                                        <div className="content">
                                            <ul className="menu-col">
                                                <li><Link to="/#">Project Two Column</Link></li>
                                                <li><Link to="/#">Project Three Colum</Link></li>
                                                <li><Link to="/#">Project Carousel</Link></li>
                                                <li><Link to="/#">Project Details</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-menu col-lg-3">
                                        <h6 className="title" onClick={toggleMegaMenu}>Team</h6>
                                        <div className="content">
                                            <ul className="menu-col">
                                                <li><Link to="/#">Team Style One</Link></li>
                                                <li><Link to="/#">Team Style Two</Link></li>
                                                <li><Link to="/#">Team Style Three</Link></li>
                                                <li><Link to="/#">Team Details</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-menu col-lg-3">
                                        <h6 className="title" onClick={toggleMegaMenu}>Other Pages</h6>
                                        <div className="content">
                                            <ul className="menu-col">
                                                <li><Link to="/#">About Us</Link></li>
                                                <li><Link to="/#">Pricing Table</Link></li>
                                                <li><Link to="/#">Contact us</Link></li>
                                                <li><Link to="/#">Error page</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <Link to={void (0)} className="dropdown-toggle" onClick={toggleSubMenu}>Services</Link>
                        <ul className="dropdown-menu">
                            <li><Link to="/#">Marketing Strategy</Link></li>
                            <li><Link to="/#">Enterprise Consulting</Link></li>
                            <li><Link to="/#">Growth Tracking</Link></li>
                            <li><Link to="/#">Social Media Marketing</Link></li>
                            <li><Link to="/#">Keyword Research</Link></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <Link to={void (0)} className="dropdown-toggle" onClick={toggleSubMenu}>Blog</Link>
                        <ul className="dropdown-menu">
                            <li><Link to="/#">Blog Standard</Link></li>
                            <li><Link to="/#">Blog With Sidebar</Link></li>
                            <li><Link to="/#">Blog Grid Two Column</Link></li>
                            <li><Link to="/#">Blog Grid Three Column</Link></li>
                            <li><Link to="/#">Blog Single</Link></li>
                            <li><Link to="/#">Blog Single With Sidebar</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/#">contact</Link></li>
                </ul>
            </div>
        </>
    );
};

export default MainMenu;