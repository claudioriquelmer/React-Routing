import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Aquí simulamos un inicio de sesión exitoso
        navigate("/profile/data", {
            state: {
                name: "NDrake",
                justLoggedIn: true
            }
        });
    };

    return (
        <>
            <h1>Iniciar Sesión</h1>
            <button onClick={handleLogin}>Entrar</button>
        </>
    );
};

export default Login;
