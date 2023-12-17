import { useEffect, useState } from "react"
import CardPokemon from "../CardPokemon/CardPokemon"
import './Listado.css'

// eslint-disable-next-line react/prop-types
const Listado = ({lista}) => {
    const [listaPokemon, setListaPokemon] = useState([])
    const [tipos, setTipos] = useState([])
    
    useEffect(() => {
        setListaPokemon(lista)
        let tipado = []
        listaPokemon.forEach((poke, i) => tipado[i] = poke.types)
        setTipos(tipado)
    }, [lista])
    
  return (
    <main>
        {listaPokemon.map((poke) => <CardPokemon key={poke.id} />)}
    </main>
  )
}

export default Listado