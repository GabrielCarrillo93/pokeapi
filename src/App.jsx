import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { BrowserRouter as Router } from 'react-router-dom'
import Rutas from './routes/Rutas'

function App() {
    
    
    return (
        <>
            <Router>
                <Header />
                <Rutas/>
                <Footer />
            </Router>
            
        </>
    )
}

export default App
