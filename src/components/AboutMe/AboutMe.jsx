/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react"
import "./AboutMe.css"
import karting from "../../images/karting-img.png"

const AboutMe = () => {

    return(
    <>
    <div id="about" className="href-pos">
    <div className="about-me">
        <div className="about-me-content">
            <h1>About Me 👨🏽‍💻</h1>
            <h3> 
                I have a strong focus on crafting beautiful and purposeful web experiences. Coding is my passion, and I'm dedicated to creating visually appealing, user-friendly websites that make an impact.
                When I'm not at the computer, you'll find me go-karting or enjoying movies.
            </h3>
            <div className="image">
                <img src={karting} alt="Go-karting"/>
            </div>
        </div>
    </div>
    </div>
    </>
    )
}

export default AboutMe