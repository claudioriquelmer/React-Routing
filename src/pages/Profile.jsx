import { Link, Outlet } from "react-router-dom";

const Profile = () => {


    return (<>

        <h1>👤 My Profile</h1>
        
        <nav>
            <Link to="data">Data</Link> |{" "}
            <Link to="security">Security</Link> |{" "}
            <Link to="billing">Billing</Link>
        </nav>
        
        <hr />

        {/* Aquí se insertará la ruta hija */}
        <Outlet />

    </>)

}


export default Profile