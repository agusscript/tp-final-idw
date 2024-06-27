import './HomeCard.css'
import homePic from '../../assets/home-photo.jpg'

function HomeCard() {

  return (
    <section className="home-card-container">
      <div className="wrapper">
        <figure className="home-card">
          <img
            src={homePic}
            width="640"
            height="640"
            alt="hotel en la patagonia"
          />
          <figcaption>
            <blockquote>
              Estancias Patagonia
            </blockquote>
            <cite>
              Refugios Encantadores en el Corazón de la Patagonia
            </cite>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

export default HomeCard;