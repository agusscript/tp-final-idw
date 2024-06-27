import "./ModalCreate.css";
import { useRef } from "react";

function ModalCreateImagen({ show, setShow, setUpdateItems }) {
  const inputRef = useRef(null);

  function handlecreate(event) {
    event.preventDefault();
    try {
      fetch(`http://localhost:3001/imagen/createImagen`, {
        method: 'POST',
        body: JSON.stringify({
          RutaArchivo: event.target.RutaArchivo.value
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setShow({ show: false, item: null });
      window.alert("Imagen creado con exito");
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    } catch (error) {
      window.alert("No se pudo crear el Imagen", error);
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
      <h2>Crear Imágen</h2>
      <form className="create-form" onSubmit={handlecreate}>
        <label>Url:</label>
        <input
          type="text"
          name="RutaArchivo"
          maxLength={255}
          placeholder="Url de la Imágen"
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

export default ModalCreateImagen;