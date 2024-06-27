import "./About.css"
import aboutImg from "../../assets/Ushuaia-turismo.jpeg"
import Footer from "../../components/Footer/Footer"
import { useEffect } from "react";

function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    document.title = "Sobre Nosotros";
  }, []);

  return (
    <>
      <section className="about-section">
        <h1 className="about-title">Sobre Nosotros</h1>

        <picture>
          <img src={aboutImg} alt="ushuaia turismo" />
        </picture>
        <section className="texto">

          <h2>Somos Estancias Patagonia, es una empresa de alojamientos ubicados en el sur de Argentina.</h2>

          <p>
            En Estancia Patagonia, te invitamos a sumergirte en la majestuosidad de la Patagonia argentina y vivir una
            experiencia única en un entorno natural incomparable. Somos un hotel boutique familiar, operado con pasión y
            dedicación por preservar la esencia de esta tierra mágica.
          </p>

          <h3>Refugios Encantadores en el Corazón de la Patagonia</h3>

          <p className="subtitle-item">Nuestra Historia</p>

          <p>
            Nuestra historia se remonta a principios del siglo XX, cuando nuestros ancestros llegaron a estas tierras con el
            sueño de crear un hogar en medio de la naturaleza virgen. Desde entonces, hemos mantenido viva la tradición de
            hospitalidad y el profundo respeto por el medio ambiente, valores que se reflejan en cada aspecto de nuestra
            estancia.
          </p>

          <p className="subtitle-item">Ubicación Privilegiada</p>

          <p>
            Estancia Patagonia se encuentra en un lugar privilegiado, rodeado de montañas imponentes, bosques frondosos y
            lagos cristalinos. Estamos a solo unos kilómetros de los principales atractivos turísticos de la región, como el
            Parque Nacional Los Glaciares y el Monte Fitz Roy.
          </p>

          <p className="subtitle-item">Un Homenaje a la Patagonia</p>

          <p>
            Nuestra arquitectura y decoración rinden homenaje a la belleza natural de la Patagonia. Cada detalle ha sido
            cuidadosamente seleccionado para crear un ambiente cálido y acogedor, donde te sentirás como en casa. Nuestras
            habitaciones ofrecen vistas impresionantes del paisaje y están equipadas con todas las comodidades que necesitas
            para una estadía confortable.
          </p>

          <h4>Valores Fundamentales</h4>

          <ul className="about-list">
            <li>Hospitalidad</li>
            <li>Sustentabilidad</li>
            <li>Calidad</li>
            <li>Tradición</li>
            <li>Aventura</li>
            <li>Calidad</li>
          </ul>

          <h4 className="final-text">Estancia Patagonia: Más que un alojamiento, un estilo de vida.</h4>

        </section>
      </section>

      <Footer />
    </>
  )
}

export default About;