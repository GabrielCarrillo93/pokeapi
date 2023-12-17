import { useEffect, useState } from 'react'
import Listado from '../components/Listado/Listado'
import SideNavTipo from '../components/SideNavTipo/SideNavTipo'
import { pokeServices } from '../services/pokeServices'

const Landing = () => {
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await pokeServices.getAllPokemon()
            setPokemon(data)
        }
        fetchData()
    }, [])
  return (
    <>
        <SideNavTipo />
        <Listado lista={pokemon}/>
    </>
  )
}

export default Landing