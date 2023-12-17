
import Botones from '../Botones/Botones'
import './CardPokemon.css'

// eslint-disable-next-line react/prop-types
const CardPokemon = ({nombre, id, img}) => {
    return (
        <div className='card'>
            <div className='card-title'>
                <h3>{nombre}</h3><span>{id}</span>
            </div>
            <div className='card-photo'>
                <img src={img} alt={nombre} />
            </div>
            <div className='card-tipos'>
                
            </div>
            <div className='card-links'>
                <Botones texto='Ver más' />
            </div>
        </div>
    )
}

export default CardPokemon