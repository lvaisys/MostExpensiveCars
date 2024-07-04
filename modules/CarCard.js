import CarDetailsModal from "./CarDetailsModal.js";

export default class CarCard {
  constructor({ id, name, images, manufacturer, price, top_speed, acceleration, engine, year, quantity }) {
    this.id = id;
    this.model = name;
    this.images = images;
    this.manufacturer = manufacturer;
    this.price = price;
    this.topSpeed = top_speed;
    this.acceleration = acceleration;
    this.engine = engine;
    this.productionYears = year;
    this.quantity = quantity;
    
    return this.render();
  }

  render() {
    const carDiv = document.createElement('div');
    carDiv.classList.add('carCard');

    const manufacturerHeading = document.createElement('h3');
    manufacturerHeading.textContent = this.manufacturer;

    const modelHeading = document.createElement('h3');
    modelHeading.textContent = this.model;

    const image = document.createElement('img');
    image.setAttribute('src', this.images[0].imageUrl);
    image.setAttribute('alt', `${this.model} thumbnail`);

    const priceTag = document.createElement('h3');
    priceTag.textContent = this.price + '$';

    const moreInfoButton = document.createElement('button');
    moreInfoButton.textContent = 'Learn more';
    moreInfoButton.addEventListener('click', () => {
      const moreModal = new CarDetailsModal(this.model, this.images, this.manufacturer, this.price, this.topSpeed, this.acceleration, this.engine, this.productionYears, this.quantity);
      window.onclick = function(event) {
        if (event.target == moreModal) {
          moreModal.remove();
        }
      }
      carDiv.appendChild(moreModal);
      moreModal.showModal();
    });

    carDiv.append(manufacturerHeading, modelHeading, image, priceTag, moreInfoButton);
    return carDiv;
  }
}