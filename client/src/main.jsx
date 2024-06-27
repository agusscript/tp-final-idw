import "./main.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactForm from "./pages/ContactForm/ContactForm.jsx";
import App from "./App.jsx";
import About from "./pages/About/About.jsx";
import TipoAlojamientoForm from "./pages/Admin/TipoAlojamientoForm.jsx";
import AlojamientoForm from "./pages/Admin/AlojamientoForm.jsx";
import Admin from "./pages/Admin/Admin.jsx";
import Servicio from "./pages/Admin/Servicio.jsx";
import Imagen from "./pages/Admin/Imagen.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/contacto" element={<ContactForm />} />
      <Route path="/nosotros" element={<About />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/tipo-alojamiento" element={<TipoAlojamientoForm />} />
      <Route path="/admin/alojamiento" element={<AlojamientoForm />} />
      <Route path="/admin/servicio" element={<Servicio />} />
      <Route path="/admin/imagen" element={<Imagen />} />
    </Routes>
  </BrowserRouter>
);