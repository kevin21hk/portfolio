/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react"
import "./Skills.css"
import html5 from "../../images/html5-icon.png"
import css3 from "../../images/css3-icon.png"
import javascript from "../../images/javascript-icon.png"
import react from "../../images/react-icon.png"
import vue from "../../images/vue-icon.png"
import node from "../../images/node-icon.png"
import express from "../../images/express-icon.png"
import mongodb from "../../images/mongodb-icon.png"
import postgresql from "../../images/postgresql-icon.png"
import php from "../../images/php-icon.png"
import wordpress from "../../images/wordpress-icon.png"
import git from "../../images/git-icon.png"
import docker from "../../images/docker-icon.png"
import java from "../../images/java-icon.png"
import typescript from "../../images/typescript-icon.png"

const Skills = () => {

    return(
    <>
    <div className="skills">
        <div className="content">
            <h1>Skills</h1>
            <h3> 
                Proficient in HTML5, CSS3, JavaScript + ES6, React.js, Vue.js, Node.js, Express.js, MongoDB, PostgreSQL, PHP, WordPress, Git and Docker with practical experience creating websites using some of these technologies in free time.
            </h3>
            <div className="icons">
                <img src={html5} alt="HTML5" />
                <img src={css3} alt="CSS3" />
                <img src={javascript} alt="JavaScript" />
                <img src={react} alt="React.js" />
                <img src={vue} alt="Vue.js" />
                <img src={node} alt="Node.js" />
                <img src={express} alt="Express.js" />
                <img src={mongodb} alt="MongoDB" />
                <img src={postgresql} alt="PostgreSQL" />
                <img src={php} alt="PHP" />
                <img src={wordpress} alt="WordPress" />
                <img src={git} alt="Git" />
                <img src={docker} alt="Docker" />
            </div>
            <h3>
                Familiar with Java and TypeScript with a solid foundation in their basics and a desire to gain professional experience.
            </h3>
            <div className="icons">
                <img src={java} alt="Java" />
                <img src={typescript} alt="TypeScript" />
            </div>
            <h3>
            Always eager to learn new stacks and further develop skills.
            </h3>
           
        </div>
    </div>
    </>
    )
}

export default Skills