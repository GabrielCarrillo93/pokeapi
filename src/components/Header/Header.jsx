import { Icon } from "@iconify/react"
import logo from '../../assets/pngegg (11).png'
import './Header.css'
import { useState } from "react"

const Header = () => {
    const [showInput, setShowInput] = useState(null);

    const handleInputShow = () => {
        showInput ? setShowInput(null) : setShowInput(true);
    }
    const handleInputBlur = () =>{
        setShowInput(null);
    }

    return (
        <header>
            <div className="brand">
                <img src={logo} alt="logo" />
                <h1>GabiDex</h1>
            </div>
            <nav className="nav">
                <Icon 
                    icon="material-symbols:search" 
                    onClick={handleInputShow}
                    />
                <input 
                    id="busqueda"
                    type="text" 
                    className={showInput ? "" : "none"}
                    onBlur={handleInputBlur}
                    />
            </nav>
        </header>
    )
}

export default Header