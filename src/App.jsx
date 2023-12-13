//import { useState } from 'react'
import './App.css'
import CardPokemon from './components/CardPokemon/CardPokemon'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { BrowserRouter } from 'react-router-dom'
import SideNavTipo from './components/SideNavTipo/SideNavTipo'

function App() {
    return (
        <>
            <Header />
            <SideNavTipo />
            <main>
                
            </main>
            <Footer />
        </>
    )
}

export default App
