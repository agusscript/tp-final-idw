import "./ModalCreate.css";
import { useRef } from "react";

function ModalCreateTipoAlojamiento({ show, setShow, setUpdateItems }) {
  const inputRef = useRef(null);

  function handlecreate(event) {
    event.preventDefault();
    try {
      fetch(`http://localhost:3001/tiposAlojamiento/createTipoAlojamiento`, {
        method: 'POST',
        body: JSON.stringify({
          Descripcion: event.target.Descripcion.value
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setShow({ show: false, item: null });
      window.alert("Tipo de alojamiento creado con exito");
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    } catch (error) {
      window.alert("No se pudo crear el tipo de alojamiento", error);
      throw new (error);
    } finally {
      setShow(false);
      setUpdateItems((prev) => !prev);
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  }

  const handleCancel = () => {
    setShow(false);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <section className={`modal-create ${show ? "show" : "hide"}`}>
      <h2>Crear tipo de alojamiento</h2>
      <form className="create-form" onSubmit={handlecreate}>
        <label>Nombre:</label>
        <input
          type="text"
          name="Descripcion"
          placeholder="Nombre del tipo de alojamiento"
          ref={inputRef}
        />

        <button
          id="confirm-create"
          type="submit"
          className="table-btn"
        >
          Crear
        </button>
      </form>
      <button
        id="cancel-create"
        className="table-btn"
        onClick={handleCancel}
      >
        Cancelar
      </button>
    </section>
  );
}

export default ModalCreateTipoAlojamiento;
