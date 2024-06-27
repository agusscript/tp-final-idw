import "./App.css"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import photo1 from "./assets/foto1.jpg"
import HomeCard from "./components/HomeCard/HomeCard"
import ItemCard from "./components/ItemCard/ItemCard"
import Loader from "./components/Loader/Loader"
import { useEffect, useState } from "react"

function App() {
  const [loading, setLoading] = useState(true);
  const [alojamientos, setAljamientos] = useState([]);
  const [filteredAlojamientos, setFilteredAlojamientos] = useState([]);
  const [selectedState, setSelectedState] = useState("Todos");

  useEffect(() => {
    setLoading(true);

    try {
      fetch("http://localhost:3001/alojamiento/getAlojamientos")
        .then(response => response.json())
        .then(data => setAljamientos(data))
    } catch (error) {
      throw new (error);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleFilterChange = (event) => {
    const newState = event.target.value;
    setSelectedState(newState);

    if (newState === "Todos") {
      setFilteredAlojamientos(alojamientos);
    } else {
      const filteredData = alojamientos.filter((item) => item.Estado === newState);
      setFilteredAlojamientos(filteredData);
    }
  };

  const alojamientosToDisplay = filteredAlojamientos.length > 0 ? filteredAlojamientos : alojamientos;

  return (
    <>
      <Header />
      <HomeCard />
      <main>
        <section className="grid-section">
          <div className="grid-header">
            <h2>Nuestros Alojamientos</h2>
            <select className="filter-select" value={selectedState} onChange={handleFilterChange}>
              <option value="Todos">Todos</option>
              <option value="Reservado">Reservado</option>
              <option value="Disponible">Disponible</option>
            </select>
          </div>
          <div className="grid-container">
            {!loading ? (
              alojamientosToDisplay.map((item) => (
                <ItemCard
                  key={item.idAlojamiento}
                  idAccommodation={item.idAlojamiento}
                  title={item.Titulo}
                  description={item.Descripcion}
                  pricePerNight={item.PrecioPorDia}
                  bedrooms={item.CantidadDormitorios}
                  bathrooms={item.CantidadBanios}
                  status={item.Estado}
                  accommodationType={item.TipoAlojamiento}
                  sourceImg={photo1}
                />
              ))
            ) : (
              <Loader />
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


export default App
