// eslint-disable-next-line no-unused-vars
import React, { useState } from "react"
import ThemeContext from "./components/Contexts/ThemeContext"
import Introduction from "./components/Introduction/Introduction"
import Switch from "./components/Switch/Switch"
import "./App.css"


function App() {
const [theme, setTheme] = useState("light")

const toggleTheme = () => {
  setTheme((current)=>(current === "light" ? "dark" : "light"))
}
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app" id={theme}>
      <Introduction/>
      <Switch/>
      </div>
     </ThemeContext.Provider >
  )

}

export default App
