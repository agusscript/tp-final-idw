import "./ModalCreate.css";
import { useRef } from "react";

function ModalCreateAlojamiento({ show, setShow, setUpdateItems }) {
  const formRef = useRef(null);

  function handlecreate(event) {
    event.preventDefault();
    try {
      fetch(`http://localhost:3001/alojamiento/createAlojamiento`, {
        method: 'POST',
        body: JSON.stringify({
          Titulo: event.target.Titulo.value,
          Descripcion: event.target.Descripcion.value,
          CantidadDormitorios: event.target.CantidadDormitorios.value,
          PrecioPorDia: event.target.PrecioPorDia.value,
          CantidadBanios: event.target.CantidadBanios.value,
          Estado: event.target.Estado.value,
          Latitud: event.target.Latitud.value,
          Longitud: event.target.Longitud.value,
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setShow({ show: false, item: null });
      window.alert("Alojamiento creado con exito");
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      window.alert("No se pudo crear el alojamiento", error);
      throw new (error);
    } finally {
      setShow(false);
      setUpdateItems((prev) => !prev);
      if (formRef.current) {
        formRef.current.reset();
      }
    }
  }

  const handleCancel = () => {
    setShow(false);
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <section className={`modal-create ${show ? "show" : "hide"}`}>
      <h2>Crear Alojamiento</h2>
      <form className="create-form" onSubmit={handlecreate} ref={formRef}>
        <label>Nombre:</label>
        <input type="text" name="Titulo" placeholder="Nombre del alojamiento" required />

        <label>Descripción:</label>
        <input type="text" name="Descripcion" placeholder="Descripción del alojamiento" />

        <label>Cantidad de dormitorios:</label>
        <input type="number" name="CantidadDormitorios" placeholder="Cantidad de dormitorios" required />

        <label>Precio por dia:</label>
        <input type="number" name="PrecioPorDia" placeholder="Precio por dia" required />

        <label>Cantidad de baños:</label>
        <input type="number" name="CantidadBanios" placeholder="Cantidad de banos" required />

        <label>Estado</label>
        <select name="Estado" required>
          <option value="Disponible">Disponible</option>
          <option value="Reservado">Reservado</option>
        </select>

        <label>Latitud y Longitud</label>
        <div className="coordinates-container">
          <input type="number" name="Latitud" step="0.000001" min="-90" max="90" placeholder="Latitud" required />
          <input type="number" name="Longitud" step="0.000001" min="-180" max="180" placeholder="Longitud" required />
        </div>

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

export default ModalCreateAlojamiento;
