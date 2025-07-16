import { useLocation } from "react-router-dom";

const Data = () => {

    const location = useLocation();
    
    const { name, justLoggedIn } = location.state || {};

    return ( <>
	       
	    {justLoggedIn && <p>👋 ¡Bienvenido nuevamente, {name}!</p>}
	    <p>📄 Aquí están tus datos personales...</p>

    </>)
}

export default Data;