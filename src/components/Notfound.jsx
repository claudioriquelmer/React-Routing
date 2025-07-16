import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div style={{ textAlign: "center", marginTop: "5rem" }}>

            <h1>404 ⛔️ Página no encontrada</h1>
            <p>Ups... no pudimos encontrar esa ruta.</p>
            
            <Link to="/">Volver al inicio</Link>

        </div>
    )
}


export default NotFound