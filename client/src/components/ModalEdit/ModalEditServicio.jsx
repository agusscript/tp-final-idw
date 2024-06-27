import "./ModalEdit.css";

function ModaleditServicio({ show, item, setShow, setUpdateItems }) {
  function handleedit(event) {
    event.preventDefault();
    try {
      fetch(`http://localhost:3001/servicio/updateServicio/${item.idServicio}`, {
        method: 'PUT',
        body: JSON.stringify({
          Nombre: event.target.Nombre.value
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      window.alert("Servicio editado con exito");
    } catch (error) {
      window.alert("No se pudo editar el Servicio", error);
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
        <label>Nombre:</label>
        <input type="text" name="Nombre" defaultValue={item?.Nombre}/>

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

export default ModaleditServicio;