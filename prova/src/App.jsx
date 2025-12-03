import { Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";   // lembrando: L maiúsculo
import Home from "./pages/Home/Home";
import Cars from "./pages/Cars/Cars";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Página inicial */}
        <Route index element={<Home />} />

        {/* Página de carros */}
        <Route path="carros" element={<Cars />} />

        {/* Página sobre */}
        <Route path="sobre" element={<About />} />

        {/* Página de contato */}
        <Route path="contato" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;










