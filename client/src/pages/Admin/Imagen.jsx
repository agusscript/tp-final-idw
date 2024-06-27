import "./Admin.css";
import React, { useState, useEffect } from 'react';
import Loader from "../../components/Loader/Loader";
import ModalCreateImagen from "../../components/ModalCreate/ModalCreateImagen";
import ModalDeleteImagen from "../../components/ModalDelete/ModalDeleteImagen";
import ModaleditImagen from "../../components/ModalEdit/ModalEditImagen";

const Imagen = () => {
  const [imagenes, setImagenes] = useState([]);
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
    document.title = "Imágenes";

    try {
      fetch('http://localhost:3001/imagen/getAllImagenes')
        .then(response => response.json())
        .then(data => setImagenes(data));
    } catch (error) {
      throw new (error);
    } finally {
      setLoading(false);
    }

  }, [updateItems]);

  return (
    <section className="admin-crud-section">
      <h1 className="crud-title">Lista de Imágenes</h1>

      <table className="table-crud">
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {!loading ? (
            imagenes.map((imagen) => (
              <tr key={imagen.idImagen}>
                <td><img className="table-img" src={imagen.RutaArchivo} alt="Alojamiento en la patagonia" /></td>
                <td>
                  <div className="table-btn-container">
                    <button
                      id="edit"
                      className="table-btn"
                      onClick={() => setModalEdit({ show: true, item: imagen })}
                    >
                      Editar
                    </button>
                    <button
                      id="delete"
                      className="table-btn"
                      onClick={() => setModalDelete({ show: true, item: imagen })}
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
        Crear Imágen
      </button>
      <ModalDeleteImagen
        show={modalDelete.show}
        item={modalDelete.item}
        setShow={setModalDelete}
        setUpdateItems={setUpdateItems}
      />
      <ModalCreateImagen
        show={modalCreateShow}
        setShow={setModalCreateShow}
        setUpdateItems={setUpdateItems}
      />
      <ModaleditImagen
        show={modalEdit.show}
        item={modalEdit.item}
        setShow={setModalEdit}
        setUpdateItems={setUpdateItems}
      />
    </section>
  );
};

export default Imagen;