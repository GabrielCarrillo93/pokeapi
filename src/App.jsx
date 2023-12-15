//import { useState } from 'react'
import './App.css'
import CardPokemon from './components/CardPokemon/CardPokemon'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import SideNavTipo from './components/SideNavTipo/SideNavTipo'
import { useEffect, useState } from 'react'
import { pokeServices } from './services/pokeServices'
import Listado from './components/Listado/Listado'

function App() {
    const [pokemon, setPokemon] = useState([])
    const [listaPokemon, setListaPokemon] = useState([])
    
    useEffect(() => {
    //    const traerLista = async() => {
    //         const data = await pokeServices.getAllPokemon();
    //         setfirst(data)
    //    }
    //    traerLista()
       
    }, [])

    return (
        <>
            <Header />
            <SideNavTipo />
            <Listado/>
            <Footer />
        </>
    )
}

export default App
