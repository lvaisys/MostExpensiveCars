import CarCard from "./modules/CarCard.js";

fetch(`./main.json`)
  .then(res => res.json())
  .then(({superExpensiveCars}) => {
    superExpensiveCars.forEach(car => {
      const carDiv = new CarCard(car);
      document.querySelector('#CarCards').appendChild(carDiv);
    });
  });