import './ItemCard.css';

function ItemCard({ title, description, pricePerNight, bedrooms, bathrooms, status, sourceImg }) {
  return (
    <div className="item-card">
      <div className={`badge ${status !== 'Reservado' && 'free'}`}>{status}</div>
      <div className="item-tumb">
        <img src={sourceImg} alt={description} />
      </div>
      <div className="item-details">
        <h4>{title}</h4>
        <div className="places-container">
          <p className='item-bedrooms'>Habitaciones: {bedrooms}</p>
          <p className='item-bathrooms'>Baños: {bathrooms}</p>
        </div>
        <p>{description}</p>
        <div className="item-bottom-details">
          <div className="item-price"><small>${Number(pricePerNight) + 50}</small>${Number(pricePerNight)}</div>
        </div>
      </div>
    </div>
  )
}

export default ItemCard;