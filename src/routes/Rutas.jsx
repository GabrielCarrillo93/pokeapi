import { Routes, Route} from 'react-router-dom'
import Landing from '../pages/Landing'
import Detalles from '../pages/Detalles'

const Rutas = () => {
    return (
        <Routes>
            <Route
                path='/'
                element={<Landing />}
                />
            <Route 
                path='detalles/:pokeid'
                element={<Detalles />}
                />
        </Routes>
    )
}

export default Rutas