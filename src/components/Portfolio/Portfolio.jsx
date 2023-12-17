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

                <div className="row g-0">

                        <div className="col-lg-4 col-md-6 col-12">
                            <h4>Portfolio:</h4>
                            <div className="project-container">
                                <img src={portfolio}  name="portfolio" onClick={handleImageClick} alt="Portfolio"/>
                            </div>
                        </div> 

                        <div className="col-lg-4 col-md-6 col-12">
                            <h4>Mern-Notes:</h4>
                            <div className="project-container">
                                <img src={mernNotes}  name="mern-notes" onClick={handleImageClick} alt="Mern-Notes"/>
                            </div>
                        </div> 
                        
                        <div className="col-lg-4 col-md-6 col-12">
                            <h4>Vue-Memorize:</h4>  
                            <div className="project-container">
                                <img src={vueMemorize} name="vue-memorize" onClick={handleImageClick} alt="Vue-Memorize"/>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                            <h4>React-Pokemon:</h4>
                            <div className="project-container">
                                <img src={reactPokemon} name="react-pokemon" onClick={handleImageClick} alt="React-Pokemon"/>
                            </div>
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