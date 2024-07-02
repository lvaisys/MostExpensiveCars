import CarDetailsModal from "./CarDetailsModal.js";

export default class CarCard {
  constructor({ id, name, imageUrl, manufacturer, price, top_speed, acceleration, engine, description, year }) {
    this.id = id;
    this.model = name;
    this.imageUrl = imageUrl;
    this.manufacturer = manufacturer;
    this.price = price;
    this.topSpeed = top_speed;
    this.acceleration = acceleration;
    this.engine = engine;
    this.description = description;
    this.productionYears = year;
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
    image.setAttribute('src', this.imageUrl);
    image.setAttribute('alt', `${this.model} thumbnail`);

    const priceTag = document.createElement('h3');
    priceTag.textContent = this.price + '$';

    const moreInfoButton = document.createElement('button');
    moreInfoButton.textContent = 'Learn more';
    moreInfoButton.addEventListener('click', () => {
      const moreModal = new CarDetailsModal(this.model, this.imageUrl, this.manufacturer, this.price, this.topSpeed, this.acceleration, this.engine, this.description, this.productionYears);
      carDiv.appendChild(moreModal);
      moreModal.showModal();
    });

    carDiv.append(manufacturerHeading, modelHeading, image, priceTag, moreInfoButton);
    return carDiv;
  }
}