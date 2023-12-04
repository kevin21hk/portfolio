/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react"
import "./Modal.css"
import mernNotes from "../../images/mern-notes.png"
import reactPokemon from "../../images/react-pokemon.png"
import vueMemorize from "../../images/vue-memorize.png"
import html5 from "../../images/html5-icon.png"
import css3 from "../../images/css3-icon.png"
import javascript from "../../images/javascript-icon.png"
import react from "../../images/react-icon.png"
import node from "../../images/node-icon.png"
import express from "../../images/express-icon.png"
import mongodb from "../../images/mongodb-icon.png"
import vue from "../../images/vue-icon.png"

const Modal = ( { toggleModal, selectedProject } ) => {

    useEffect(() => {
        document.body.classList.add("active-modal");
    
        return () => {
          document.body.classList.remove("active-modal");
        }
      }, [])

      const handleCloseModal = () => {
        toggleModal(false);
      }

      const getPortfolioData = () => {
        switch (selectedProject) {
          case "mern-notes":
            return (
                <>
                <div className="modal-project-container">

                    <div className="modal-project-title">
                        <h2>Note Taking App</h2>
                    </div>
                    <div className="modal-project-layout">
                        <div className="modal-project-text">
                            <p>
                            I successfully built and deployed a feature-rich Note Taking App using the MERN stack, incorporating functionalities such as public and private note creation, form validation, automatic password generation, unique note IDs, toast alerts, and CRUD operations. Additionally, I have implemented secure authentication, password lockout, and a responsive user-friendly interface. These features, combined with methodologies like a component-based architecture, test-driven development, RESTful API design, and error handling, contribute to a well-structured, scalable, and secure application. The result is a robust and efficient note-taking app that provides a user-friendly experience across devices.
                            </p>
                        </div>
                        <div className="modal-img-container">
                                <a href="https://k21hk.com"><img src={mernNotes} className="modal-project-img" name="mern-notes" alt="mern-notes"/></a>
                        </div>
                    </div>    
                    
                    <div className="modal-project-links">
                    <p><span className="label">Project Name: Notes…</span></p>
                    <p><span className="label">Project Link: </span><a href="https://k21hk.com" target="_blank" rel="noopener noreferrer">https://k21hk.com</a></p>
                    <p><span className="label">Link To GitHub Repository: </span> <a href="https://github.com/kevin21hk/mern-notes" target="_blank" rel="noopener noreferrer">https://github.com/kevin21hk/mern-notes</a></p>
                    <p><span className="label">Stacks Used In This Project: </span></p>
                            <div className="modal-icons">
                            <img src={html5} alt="HTML5" />
                            <img src={css3} alt="CSS3" />
                            <img src={javascript} alt="JavaScript" />
                            <img src={react} alt="React.js" />
                            <img src={node} alt="Node.js" />
                            <img src={express} alt="Express.js" />
                            <img src={mongodb} alt="MongoDB" />
                            </div>
                    </div>
                </div>
                </>
            )
          case "vue-memorize":
            return (
                <>
                <div className="modal-project-container">

                    <div className="modal-project-title">
                        <h2>Memory Card Game</h2>
                    </div>
                    <div className="modal-project-layout">
                        <div className="modal-project-text">
                            <p>
                            Developed a Memory Game App using Vue.js, applying coding techniques such as a component-based architecture, data-driven development, event-driven programming, and object-oriented principles. The code is organized into reusable components, and Vue.js's reactivity is utilized to ensure a well-structured and scalable application. The app features functionalities such as shuffling and slicing the deck of cards, providing an engaging and interactive user experience.
                            </p>
                        </div>
                        <div className="modal-img-container">
                        <a href="https://k21hk.com/vue-memorize"><img src={vueMemorize} className="modal-project-img" name="vue-memorize" alt="vue-memorize"/></a>
                        </div>
                    </div>    
                    
                    <div className="modal-project-links">
                    <p><span className="label">Project Name: Memorize</span></p>
                    <p><span className="label">Project Link: </span> <a href="https://k21hk.com/vue-memorize" target="_blank" rel="noopener noreferrer">https://k21hk.com/vue-memorize</a></p>
                    <p><span className="label">Link To GitHub Repository: </span> <a href="https://github.com/kevin21hk/vue-memorize" target="_blank" rel="noopener noreferrer">https://github.com/kevin21hk/vue-memorize</a></p>
                    <p><span className="label">Stacks Used In This Project: </span></p>
                            <div className="modal-icons">
                            <img src={html5} alt="HTML5" />
                            <img src={css3} alt="CSS3" />
                            <img src={javascript} alt="JavaScript" />
                            <img src={vue} alt="Vue" />
                            </div>
                    </div>
                </div>
                </>
            )
            case "react-pokemon":
            return (
                <>
                <div className="modal-project-container">

                    <div className="modal-project-title">
                        <h2>Pokémon Search</h2>
                    </div>
                    <div className="modal-project-layout">
                        <div className="modal-project-text">
                            <p>
                            Created a basic responsive Pokémon search app with React.js, integrating an external API and utilizing React states and hooks for search result display. Provides a user-friendly experience for searching favorite Pokémon.
                            </p>
                        </div>
                        <div className="modal-img-container">
                        <a href="https://k21hk.com/react-pokemon"><img src={reactPokemon} className="modal-project-img" name="react-pokemon" alt="react-pokemon"/></a>
                        </div> 
                    </div>    
                    
                    <div className="modal-project-links">
                    <p><span className="label">Project Name: PokéSearch</span></p>
                    <p><span className="label">Project Link: </span> <a href="https://k21hk.com/react-pokemon" target="_blank" rel="noopener noreferrer">https://k21hk.com/react-pokemon</a></p>
                    <p><span className="label">Link To GitHub Repository: </span> <a href="https://github.com/kevin21hk/react-pokemon" target="_blank" rel="noopener noreferrer">https://github.com/kevin21hk/react-pokemon</a></p>
                    <p><span className="label">Stacks Used In This Project: </span></p>
                            <div className="modal-icons">
                            <img src={html5} alt="HTML5" />
                            <img src={css3} alt="CSS3" />
                            <img src={javascript} alt="JavaScript" />
                            <img src={react} alt="React.js" />
                            </div>
                    </div>
                </div>
                </>
            )
            default:
            return "";
        }
      }

return(
    <>
    <div className="modal">
        <div 
        className="overlay"
        onClick={handleCloseModal}
        >
        </div>
        <div className="modal-content">
            {getPortfolioData()}
            <button 
            className="close-modal"
            onClick={handleCloseModal}
            >
               &times;
            </button>
        </div>
    </div>
    </>
    )
}

export default Modal