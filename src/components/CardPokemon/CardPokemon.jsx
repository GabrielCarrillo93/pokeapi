import Botones from '../Botones/Botones'
import './CardPokemon.css'

// eslint-disable-next-line react/prop-types
const CardPokemon = ({nombre, id, img, tipo1, tipo2}) => {

    return (
        <div className='card'>
            <div className='card-title'>
                <h3>{nombre}</h3><span>{id}</span>
            </div>
            <div className='card-photo'>
                <img src={img} alt="foto" />
            </div>
            <div className='card-tipos'>
                <span>{tipo1}</span>{tipo2 ? "" : <span>{tipo2}</span>}
            </div>
            <div className='card-links'>
                <Botones texto='Ver más' />
            </div>
        </div>
    )
}

export default CardPokemon