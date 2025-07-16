

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./pages/Navbar";
import Home from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./components/Notfound";

import Login from "./pages/Login"; // 👈 Importamos el nuevo componente

import Profile from "./pages/Profile";
import Data from "./pages/profile/Data";
import Security from "./pages/profile/Security";
import Billing from "./pages/profile/Billing";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* ✅ Nueva ruta para el login */}
          <Route path="/login" element={<Login />} />

          {/* Rutas anidadas para el perfil */}
          <Route path="/profile" element={<Profile />}>
            <Route path="data" element={<Data />} />
            <Route path="security" element={<Security />} />
            <Route path="billing" element={<Billing />} />
          </Route>

          {/* Ruta comodín para errores */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
