import CarCard from "./modules/CarCard.js";

fetch(`http://localhost:3000/superExpensiveCars`)
  .then(res => res.json())
  .then(cars => {
    cars.forEach(car => {
      console.log(car);
      const carDiv = new CarCard(car);
      document.querySelector('#CarCards').appendChild(carDiv);
    });
  });