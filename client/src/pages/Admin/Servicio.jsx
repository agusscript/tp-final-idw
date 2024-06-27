import "./Admin.css";
import React, { useState, useEffect } from 'react';
import Loader from "../../components/Loader/Loader";
import ModalCreateServicio from "../../components/ModalCreate/ModalCreateServicio";
import ModalDeleteServicio from "../../components/ModalDelete/ModalDeleteServicio";
import ModaleditServicio from "../../components/ModalEdit/ModalEditServicio";

const Servicio = () => {
  const [servicios, setServicios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalCreateShow, setModalCreateShow] = useState(false);
  const [modalDelete, setModalDelete] = useState({
    show: false,
    item: {},
  });
  const [modalEdit, setModalEdit] = useState({
    show: false,
    item: {},
  })
  const [updateItems, setUpdateItems] = useState(false);

  useEffect(() => {
    setLoading(true);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    document.title = "Servicios";

    try {
      fetch('http://localhost:3001/servicio/getAllServicios')
        .then(response => response.json())
        .then(data => setServicios(data));
    } catch (error) {
      throw new (error);
    } finally {
      setLoading(false);
    }

  }, [updateItems]);

  return (
    <section className="admin-crud-section">
      <h1 className="crud-title">Lista de Servicios</h1>

      <table className="table-crud">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {!loading ? (
            servicios.map((servicio) => (
              <tr key={servicio.idServicio}>
                <td>{servicio.Nombre}</td>
                <td>
                  <div className="table-btn-container">
                    <button
                      id="edit"
                      className="table-btn"
                      onClick={() => setModalEdit({ show: true, item: servicio })}
                    >
                      Editar
                    </button>
                    <button
                      id="delete"
                      className="table-btn"
                      onClick={() => setModalDelete({ show: true, item: servicio })}
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
        Crear Servicio
      </button>
      <ModalDeleteServicio
        show={modalDelete.show}
        item={modalDelete.item}
        setShow={setModalDelete}
        setUpdateItems={setUpdateItems}
      />
      <ModalCreateServicio
        show={modalCreateShow}
        setShow={setModalCreateShow}
        setUpdateItems={setUpdateItems}
      />
      <ModaleditServicio
        show={modalEdit.show}
        item={modalEdit.item}
        setShow={setModalEdit}
        setUpdateItems={setUpdateItems}
      />
    </section>
  );
};

export default Servicio;