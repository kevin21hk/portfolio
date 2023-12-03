/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react"
import "./Introduction.css"

const Introduction = () => {

    return(
    <>
    <div className="introduction">
        <div className="introduction-content">
            <h1>Hello 👋</h1>
            <h1>My name is <span className="name">Kevin</span></h1>
            <h3>I'm a UK born Web Developer based in Hong Kong</h3>
        </div>
    </div>
    </>
    )
}

export default Introduction