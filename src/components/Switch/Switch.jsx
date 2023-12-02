import { useContext } from "react"
import ThemeContext from "../Contexts/ThemeContext"
import ReactSwitch from "react-switch"
import "./Switch.css"

const Switch = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return(
    <>
    <div className="switch">
        <ReactSwitch
                checked={theme === "dark"}
                onChange={toggleTheme}
                handleDiameter={28}
                offColor="#feffca"
                onColor="#868b68"
                offHandleColor="#868b68"
                onHandleColor="#323526"
                height={40}
                width={70}
                borderRadius={12}
                activeBoxShadow="0px 0px 1px 2px #fffc35"
                uncheckedIcon={
                <div className="unchecked-icon">
                    Light
                </div>
                }
                checkedIcon={
                    <div className="checked-icon">
                    Dark
                    </div>
                }
                uncheckedHandleIcon={
                <div className="unchecked-handle-icon">
                    💡
                </div>
                }
                checkedHandleIcon={
                <div className="checked-handle-icon">
                    🌙
                </div>
                }
        />
    </div>
    </>
    )
}

export default Switch