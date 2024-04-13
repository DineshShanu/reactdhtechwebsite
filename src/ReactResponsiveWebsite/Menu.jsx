import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./ResponsiveWebsite.css";

const Menu = () => {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid">
                                <Link className="navbar-brand" to="/">DK</Link>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                            <NavLink to="/about" className="nav-link">about</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/experience" className="nav-link">experience</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/skills" className="nav-link">skills</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/projects" className="nav-link">projects</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/service" className="nav-link">service</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/contact" className="nav-link">contact</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu;