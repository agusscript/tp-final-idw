import "./Admin.css";
import { Link } from "react-router-dom";

export default function Admin() {
  return (
    <section className="admin-section">
      <h1 className="admin-title">Administración</h1>
      <div className="admin-links">
        <Link className="admin-btn" to="/admin/alojamiento">Alojamientos</Link>
        <Link className="admin-btn" to="/admin/tipo-alojamiento">Tipos de Alojamientos</Link>
        <Link className="admin-btn" to="/admin/servicio">Servicios</Link>
        <Link className="admin-btn" to="/admin/imagen">Imágenes</Link>
      </div>
    </section>
  );
}