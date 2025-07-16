

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {


    return (<>

        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/about" element={ <About /> } />
                <Route path="/contact" element={ <Contact /> } />
                <Route path="*" element={ <h1>❌ Página no encontrada</h1> } />
            </Routes>
        </BrowserRouter>

    </>)

}


export default App