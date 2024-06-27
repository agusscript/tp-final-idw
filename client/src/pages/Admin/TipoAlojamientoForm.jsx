import "./Admin.css";
import React, { useState, useEffect } from 'react';
import Loader from "../../components/Loader/Loader";
import ModalDeleteTipoAlojamiento from "../../components/ModalDelete/ModalDeleteTipoAlojamiento";
import ModalCreateTipoAlojamiento from "../../components/ModalCreate/ModalCreateTipoAlojamiento";
import ModaleditTipoAlojamiento from "../../components/ModalEdit/ModalEditTipoAlojamiento";

const TipoAlojamientoForm = () => {
  const [tiposAlojamiento, setTiposAlojamiento] = useState([]);
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
    document.title = "Tipo de Alojamiento";

    try {
      fetch('http://localhost:3001/tiposAlojamiento/getTiposAlojamiento')
        .then(response => response.json())
        .then(data => setTiposAlojamiento(data));
    } catch (error) {
      throw new (error);
    } finally {
      setLoading(false);
    }

  }, [updateItems]);

  return (
    <section className="admin-crud-section">
      <h1 className="crud-title">Lista de Tipos de Alojamiento</h1>

      <table className="table-crud">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {!loading ? (
            tiposAlojamiento.map((tipo) => (
              <tr key={tipo.idTipoAlojamiento}>
                <td>{tipo.Descripcion}</td>
                <td>
                  <div className="table-btn-container">
                    <button
                      id="edit"
                      className="table-btn"
                      onClick={() => setModalEdit({ show: true, item: tipo })}
                    >
                      Editar
                    </button>
                    <button
                      id="delete"
                      className="table-btn"
                      onClick={() => setModalDelete({ show: true, item: tipo })}
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
        Crear tipo de alojamiento
      </button>
      <ModalDeleteTipoAlojamiento
        show={modalDelete.show}
        item={modalDelete.item}
        setShow={setModalDelete}
        setUpdateItems={setUpdateItems}
      />
      <ModalCreateTipoAlojamiento
        show={modalCreateShow}
        setShow={setModalCreateShow}
        setUpdateItems={setUpdateItems}
      />
      <ModaleditTipoAlojamiento
        show={modalEdit.show}
        item={modalEdit.item}
        setShow={setModalEdit}
        setUpdateItems={setUpdateItems}
      />
    </section>
  );
};

export default TipoAlojamientoForm;