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
                <img src={html5}/>
                <img src={css3}/>
                <img src={javascript}/>
                <img src={react}/>
                <img src={vue}/>
                <img src={node}/>
                <img src={express}/>
                <img src={mongodb}/>
                <img src={postgresql}/>
                <img src={php}/>
                <img src={wordpress}/>
                <img src={git}/>
                <img src={docker}/>
            </div>
            <h3>
                Familiar with Java and TypeScript with a solid foundation in their basics and a desire to gain professional experience and interest in further developing skills.
            </h3>
            <div className="icons">
                <img src={java}/>
                <img src={typescript}/>
            </div>
           
        </div>
    </div>
    </>
    )
}

export default Skills