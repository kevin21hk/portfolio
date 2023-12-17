// eslint-disable-next-line no-unused-vars
import React, { useState } from "react"
import ThemeContext from "./components/Contexts/ThemeContext"
import Nav from "./components/Nav/Nav"
import Introduction from "./components/Introduction/Introduction"
import Switch from "./components/Switch/Switch"
import AboutMe from "./components/AboutMe/AboutMe"
import Skills from "./components/Skills/Skills"
import Portfolio from "./components/Portfolio/Portfolio"
import Top from "./components/Top/Top"
import "./App.css"


function App() {
const [theme, setTheme] = useState("light")

const toggleTheme = () => {
  setTheme((current)=>(current === "light" ? "dark" : "light"))
}
  return (
    
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app" id={theme}>
      <Nav/>
      <Introduction/>
      <Switch/>
      <AboutMe/>
      <Skills/>
      <Portfolio/>
      <Top/>
      </div>
     </ThemeContext.Provider >
  )

}

export default App
