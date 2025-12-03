import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function MainLayout() {
  return (
    <div className="layout">
      {/* Navbar fixa no topo */}
      <Navbar />

      {/* Conteúdo da página muda conforme a rota */}
      <main style={{ minHeight: "80vh", padding: "20px" }}>
        <Outlet />
      </main>

      {/* Footer fixo no rodapé */}
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default MainLayout;
