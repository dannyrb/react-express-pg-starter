import react, { useEffect, useState } from 'react';
// https://github.com/axios/axios#example
import axios from 'axios';
import CarCard from './components/CarCard.js';
import './App.css';

function App() {
  const API_URL = 'http://localhost:6868'
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null)
  
  useEffect(() => {
    axios
      .get(`${API_URL}/cars`)
      .then(response => {
        setCars(response.data)
      })
  }, []);

  return (
    <div className="App">

      <div className="Section">
        <h2>List</h2>
        {cars.length > 0 && cars.map(car => (
          <CarCard
            key={car.id}
            id={car.id}
            vin={car.vin}
            make={car.make}
            model={car.model}
            mileage={car.mileage}
            onClick={id => setSelectedCar(id)}
          />
        ))}
      </div>
      
      <div className="Section">
        <h2>Selected</h2>
      </div>

      </div>
  );
}

export default App;
