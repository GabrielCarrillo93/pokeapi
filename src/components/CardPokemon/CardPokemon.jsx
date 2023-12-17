
import Botones from '../Botones/Botones'
import './CardPokemon.css'

// eslint-disable-next-line react/prop-types
const CardPokemon = () => {
    return (
        <div className='card'>
            <div className='card-title'>
                <h3>Hola</h3><span></span>
            </div>
            <div className='card-photo'>
                <img src="" alt="foto" />
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