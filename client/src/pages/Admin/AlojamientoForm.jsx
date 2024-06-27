import "./Admin.css";
import React, { useState, useEffect } from "react";
import Loader from "../../components/Loader/Loader"
import ModalCreateAlojamiento from "../../components/ModalCreate/ModalCreateAlojamiento";
import ModalEditAlojamiento from "../../components/ModalEdit/ModalEditAlojamiento";
import ModalDeleteAlojamiento from "../../components/ModalDelete/ModalDeleteAlojamiento";

const AlojamientoForm = () => {
  const [alojamientos, setAljamientos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalCreateShow, setModalCreateShow] = useState(false);
  const [modalDelete, setModalDelete] = useState({
    show: false,
    item: {},
  });
  const [modalEdit, setModalEdit] = useState({
    show: false,
    item: {},
  });
  const [updateItems, setUpdateItems] = useState(false);
  const [filteredAlojamientos, setFilteredAlojamientos] = useState([]);
  const [selectedState, setSelectedState] = useState("Todos");

  useEffect(() => {
    setLoading(true);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    document.title = "Alojamientos";

    try {
      fetch("http://localhost:3001/alojamiento/getAlojamientos")
        .then(response => response.json())
        .then(data => setAljamientos(data))
    } catch (error) {
      throw new (error);
    } finally {
      setLoading(false);
    }
  }, [updateItems]);

  const handleFilterChange = (event) => {
    const newState = event.target.value;
    setSelectedState(newState);

    if (newState === "Todos") {
      setFilteredAlojamientos(alojamientos);
    } else {
      const filteredData = alojamientos.filter((item) => item.Estado === newState);
      setFilteredAlojamientos(filteredData);
    }
  };

  const alojamientosToDisplay = filteredAlojamientos.length > 0 ? filteredAlojamientos : alojamientos;

  return (
    <section className="admin-crud-section">
      <h1 className="crud-title">Lista de Alojamientos</h1>

      <select className="filter-select-admin" value={selectedState} onChange={handleFilterChange}>
        <option value="Todos">Todos</option>
        <option value="Reservado">Reservado</option>
        <option value="Disponible">Disponible</option>
      </select>

      <table className="table-crud">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Estado</th>
            <th>Dormitorios</th>
            <th>Precio</th>
            <th>Baños</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {!loading ? (
            alojamientosToDisplay.map((alojamiento) => (
              <tr key={alojamiento.idAlojamiento}>
                <td>{alojamiento.Titulo}</td>
                <td>{alojamiento.Estado}</td>
                <td>{alojamiento.CantidadDormitorios}</td>
                <td>{alojamiento.PrecioPorDia}</td>
                <td>{alojamiento.CantidadBanios}</td>
                <td>
                  <div className="table-btn-container">
                    <button
                      id="edit"
                      className="table-btn"
                      onClick={() => setModalEdit({ show: true, item: alojamiento })}
                    >
                      Editar
                    </button>
                    <button
                      id="delete"
                      className="table-btn"
                      onClick={() => setModalDelete({ show: true, item: alojamiento })}
                    >
                      Eliminar
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>
                <Loader />
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <button
        id="create"
        className="table-btn"
        onClick={() => setModalCreateShow(true)}
      >
        Crear Alojamiento
      </button>
      <ModalDeleteAlojamiento
        show={modalDelete.show}
        item={modalDelete.item}
        setShow={setModalDelete}
        setUpdateItems={setUpdateItems}
      />
      <ModalCreateAlojamiento
        show={modalCreateShow}
        setShow={setModalCreateShow}
        setUpdateItems={setUpdateItems}
      />
      <ModalEditAlojamiento
        show={modalEdit.show}
        item={modalEdit.item}
        setShow={setModalEdit}
        setUpdateItems={setUpdateItems}
      />
    </section>
  );
};

export default AlojamientoForm;