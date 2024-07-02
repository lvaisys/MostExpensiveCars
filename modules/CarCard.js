import CarDetailsModal from "./CarDetailsModal.js";

export default class CarCard {
  constructor({ id, model, photo, manufacturer, price, topSpeed, acceleration, engine, description, productionYears }) {
    this.id = id;
    this.model = model;
    this.photo = photo;
    this.manufacturer = manufacturer;
    this.price = price;
    this.topSpeed = topSpeed;
    this.acceleration = acceleration;
    this.engine = engine;
    this.description = description;
    this.productionYears = productionYears;
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
    image.setAttribute('src', this.photo);
    image.setAttribute('alt', `${this.name} thumbnail`);

    const priceTag = document.createElement('h3');
    priceTag.textContent = this.price + '$';

    const moreInfoButton = document.createElement('button');
    moreInfoButton.textContent = 'Learn more';
    moreInfoButton.addEventListener('click', () => {
      const moreModal = new CarDetailsModal(this.model, this.photo, this.manufacturer, this.price, this.topSpeed, this.acceleration, this.engine, this.description, this.productionYears);
      carDiv.appendChild(moreModal);
      moreModal.showModal();
    });

    carDiv.append(manufacturerHeading, modelHeading, image, priceTag, moreInfoButton);
    return carDiv;
  }
}