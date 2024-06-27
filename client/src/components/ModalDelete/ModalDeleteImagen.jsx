import "./ModalDelete.css";

function ModalDeleteImagen({ show, item, setShow, setUpdateItems }) {
  function handleDelete(item) {
    try {
      fetch(`http://localhost:3001/imagen/deleteImagen/${item.idImagen}`, {
        method: 'DELETE'
      });
      window.alert("Imágen eliminada con exito");
    } catch (error) {
      window.alert("No se pudo eliminar la Imágen", error);
      throw new (error);
    } finally {
      setShow({ show: false, item: null });
      setUpdateItems((prev) => !prev);
    }
  }

  return (
    <section className={`modal-delete ${show ? "show" : "hide"}`}>
      <h2>Eliminar</h2>
      <p className="modal-delete-item">{item?.Nombre}</p>
      <p>Desea eliminar este elemento?</p>
      <div className="modal-delete-btn-container">
        <button
          id="confirm-delete"
          className="table-btn"
          onClick={() => handleDelete(item)}
        >
          Si
        </button>
        <button
          id="cancel-delete"
          className="table-btn"
          onClick={() => setShow({ show: false, item: null })}
        >
          No
        </button>
      </div>
    </section>
  );
}

export default ModalDeleteImagen;