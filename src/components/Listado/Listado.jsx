import { useEffect, useState } from "react"
import CardPokemon from "../CardPokemon/CardPokemon"
import './Listado.css'

// eslint-disable-next-line react/prop-types
const Listado = ({lista}) => {
    const [listaPokemon, setListaPokemon] = useState([])
    
    useEffect(() => {
        setListaPokemon(lista)
    }, [lista])
    
  return (
    <main>
        {listaPokemon.map((poke) => <CardPokemon key={poke.id} nombre={poke.name} id={poke.id} img={poke.sprites.other["official-artwork"].front_default}/>)}
    </main>
  )
}

export default Listado