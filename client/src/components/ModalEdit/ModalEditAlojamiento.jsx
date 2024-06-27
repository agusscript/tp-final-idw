import { useState, useEffect } from "react";
import "./ModalEdit.css";

function ModalEditAlojamiento({ show, item, setShow, setUpdateItems }) {
  const [alojamientoEstado, setAlojamientoEstado] = useState('');

  useEffect(() => {
    setAlojamientoEstado(item?.Estado);
  }, [item]);

  const handleSelectChange = (event) => {
    const { value } = event.target;
    setAlojamientoEstado(value);
  };

  function handleEdit(event) {
    event.preventDefault();
    try {
      fetch(`http://localhost:3001/alojamiento/putAlojamiento/${item.idAlojamiento}`, {
        method: 'PUT',
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
      window.alert("Alojamiento editado con exito");
    } catch (error) {
      window.alert("No se pudo editar el Alojamiento", error);
      throw new (error);
    } finally {
      setShow({ show: false, item: null });
      setUpdateItems((prev) => !prev);
    }
  }

  return (
    <section className={`modal-edit ${show ? "show" : "hide"}`} id="style-4">
      <h2>Editar</h2>
      <form className="edit-form" onSubmit={(event) => handleEdit(event)}>
        <label>Nombre:</label>
        <input type="text" name="Titulo" defaultValue={item?.Titulo} placeholder="Nombre del alojamiento" required />

        <label>Descripción:</label>
        <input type="text" name="Descripcion" defaultValue={item?.Descripcion} placeholder="Descripción del alojamiento" />

        <label>Cantidad de dormitorios:</label>
        <input type="number" name="CantidadDormitorios" defaultValue={item?.CantidadDormitorios} placeholder="Cantidad de dormitorios" required />

        <label>Precio por dia:</label>
        <input type="number" name="PrecioPorDia" defaultValue={item?.PrecioPorDia} placeholder="Precio por dia" required />

        <label>Cantidad de baños:</label>
        <input type="number" name="CantidadBanios" defaultValue={item?.CantidadBanios} placeholder="Cantidad de banos" required />

        <label>Estado</label>
        <select name="Estado" value={alojamientoEstado} onChange={handleSelectChange} required>
          <option value="Disponible">Disponible</option>
          <option value="Reservado">Reservado</option>
        </select>

        <label>Latitud y Longitud</label>
        <div className="coordinates-container">
          <input
            type="number"
            name="Latitud"
            defaultValue={item?.Latitud}
            step="0.000001"
            min="-90"
            max="90"
            placeholder="Latitud"
            required
          />
          <input
            type="number"
            name="Longitud"
            defaultValue={item?.Longitud}
            step="0.000001"
            min="-180"
            max="180"
            placeholder="Longitud"
            required
          />

        </div>
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

export default ModalEditAlojamiento;