import "./ContactForm.css"
import { useEffect } from "react";

function ContactForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    document.title = "Contacto";
  }, []);

  return (
    <section className="contact-form-section">
      <h1 className="contact-form-title">Contáctanos</h1>
      <form id="contact-form" className="contact-form">
        <label for="name">Nombre y Apellido</label>
        <input type="text" id="name" name="name" placeholder="Carlos Alfonso" />

        <label for="phone-number">Número de Telefono</label>
        <input type="text" id="phone-number" name="phone-number" placeholder="54 343 456 789" maxlength="19" />

        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder="carlitos.alfonso@gmail.com" />

        <label for="question">Consulta</label>
        <textarea name="question" id="question" placeholder="Quiero saber precios de alojamientos en Ushuaia"></textarea>

        <button id="btn-confirm">Enviar</button>
      </form>
    </section>
  )
}

export default ContactForm;