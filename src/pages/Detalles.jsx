import Botones from "../components/Botones/Botones"
import '../assets/Detalles.css'

const Detalles = () => {
    return (
        <>
        <Botones texto='Volver a inicio' id='home' />
        <Botones texto='<' id='anterior' />
        <Botones texto='>' id='siguiente' />
        <main className="pokedetalles">
            
            <section>
                <h2>Nombre del pokemon</h2><span>id</span>
                <article>
                    <div>
                        <div className="foto">
                            <img src="" alt="pokefoto" />
                        </div>
                        <div className="tipos">
                            <span>tipo1</span>
                            <span>tipo2</span>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium expedita soluta nulla repellat incidunt, natus doloribus sunt aperiam molestias quas quae atque ut itaque iste. Facilis minus repellat quasi odio!</p>
                        
                    </div>
                    <div>
                        <div className="stats">
                            <table>
                                <tr>
                                    <th>HP</th>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <th>Attack</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>Defense</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>SP-Attack</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>SP-Defense</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>Speed</th>
                                    <td></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </article>
            </section>
        </main>
        </>
    )
}

export default Detalles