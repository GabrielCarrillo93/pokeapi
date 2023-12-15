import { Icon } from "@iconify/react"
import { useState, useEffect } from "react"
import './SideNavTipo.css'

const SideNavTipo = () => {
    const [tipos, setTipos] = useState([]);
    const [showNav, setShowNav] = useState(null)

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/type/')
            .then((resp) => {
                if (!resp) throw new Error('Hubo un error en la api')
                return resp.json()
            })
            .then((data) => {
                setTipos(data.results)
            })
            .catch((err) =>{
                console.log(err);
            })
    }, [])

    const handleNavShow = () => {
        showNav ? setShowNav(null) : setShowNav(true)
    }
    
    return (
        <nav className="nav-tipo">
            
            {showNav ? <h3 className="show" onClick={handleNavShow}>Tipos</h3> : <Icon icon='radix-icons:hamburger-menu' onClick={handleNavShow}/>}
            <ul className={showNav ? "show " : "show none"}>
                <li className="all" id="all">all</li>
                {tipos.map((ti, i) => <li 
                                        id={i+1} 
                                        key={i} 
                                        className={ti.name}
                                        >{ti.name}
                                        </li>)}
            </ul>
        </nav>
    )
}

export default SideNavTipo