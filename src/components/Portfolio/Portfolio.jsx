/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react"
import "./Portfolio.css"
import portfolio from "../../images/portfolio.jpg"
import mernNotes from "../../images/mern-notes.png"
import reactPokemon from "../../images/react-pokemon.png"
import vueMemorize from "../../images/vue-memorize.png"
import Modal from "../Modal/Modal.jsx"

const Portfolio = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedProject, setSelectedProject] = useState("")

    const handleImageClick = (e) => {
        setIsModalOpen(true)
        setSelectedProject(e.target.name)
    }

    return(
    <>
    <div id="portfolio" className="href-pos">
    <div className="portfolio">
        <div className="portfolio-content">
            <h1>Portfolio 💼</h1>
            
            <h3>Please take a look at my portfolio:</h3>

                <div className="row d-flex align-items-center">

                        <div className="col col-lg-4 col-md-6 col-12">
                            <h4>Portfolio:</h4>
                                <img src={portfolio} className="project-container" name="portfolio" onClick={handleImageClick} alt="Portfolio"/>
                        </div> 

                        <div className="col col-lg-4 col-md-6 col-12">
                            <h4>Mern-Notes:</h4>
                                <img src={mernNotes} className="project-container" name="mern-notes" onClick={handleImageClick} alt="Mern-Notes"/>
                        </div> 
                        
                        <div className="col col-lg-4 col-md-6 col-12">
                            <h4>Vue-Memorize:</h4>  
                                <img src={vueMemorize} className="project-container" name="vue-memorize" onClick={handleImageClick} alt="Vue-Memorize"/>
                        </div>

                        <div className="col col-lg-4 col-md-6 col-12">
                            <h4>React-Pokemon:</h4>  
                                <img src={reactPokemon} className="project-container" name="react-pokemon" onClick={handleImageClick} alt="React-Pokemon"/>
                    </div> 
                </div>  
         

            <div className="portfolio-text">
            <h3>More projects coming soon..</h3>  
            </div>       
        </div>
    </div>
    </div>
    {isModalOpen && <Modal toggleModal={setIsModalOpen} selectedProject={selectedProject}/>}
    </>
    )
}

export default Portfolio