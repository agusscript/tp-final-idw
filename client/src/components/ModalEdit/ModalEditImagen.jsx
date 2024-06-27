import "./ModalEdit.css";

function ModaleditImagen({ show, item, setShow, setUpdateItems }) {
  function handleedit(event) {
    event.preventDefault();
    try {
      fetch(`http://localhost:3001/imagen/updateImagen/${item.idImagen}`, {
        method: 'PUT',
        body: JSON.stringify({
          RutaArchivo: event.target.RutaArchivo.value
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      window.alert("Imágen editada con exito");
    } catch (error) {
      window.alert("No se pudo editar la Imágen", error);
      throw new (error);
    } finally {
      setShow({ show: false, item: null });
      setUpdateItems((prev) => !prev);
    }
  }

  return (
    <section className={`modal-edit ${show ? "show" : "hide"}`}>
      <h2>Editar</h2>
      <form className="edit-form" onSubmit={(event) => handleedit(event)}>
        <label>Url:</label>
        <input type="text" name="RutaArchivo" defaultValue={item?.RutaArchivo}/>

        <button
          id="confirm-edit"
          type="submit"
          className="table-btn"
        >
          Guardar
        </button>
      </form>
      <button
        id="cancel-edit"
        className="table-btn"
        onClick={() => setShow({ show: false, item: null })}
      >
        Cancelar
      </button>
    </section>
  );
}

export default ModaleditImagen;