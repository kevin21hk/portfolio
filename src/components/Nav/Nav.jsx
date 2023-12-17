/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react"
import "./Nav.css"

const Nav = () => {

    return(
    <>
    <ul className="nav nav-pills fixed-top">
        <li className="nav-item">
            <a className="nav-link active" href="#intro">Intro</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#about">About</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#skills">Skills</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#portfolio">Portfolio</a>
        </li>
        <li className="nav-item-contact"> Contact: 
        <a className="nav-link-contact" href="mailto:kevin21hk@gmail.com">kevin21hk@gmail.com</a>
        </li>
    </ul>
    </>
    )
}

export default Nav