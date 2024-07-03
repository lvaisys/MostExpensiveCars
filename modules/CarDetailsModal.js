export default class CarDetailsModal {
  constructor(model, imageUrl, manufacturer, price, top_speed, acceleration, engine, productionYears, quantity) {
    this.model = model;
    this.imageUrl = imageUrl;
    this.manufacturer = manufacturer;
    this.price = price;
    this.topSpeed = top_speed;
    this.acceleration = acceleration;
    this.engine = engine;
    this.productionYears = productionYears;
    this.quantity = quantity;

    return this.render();
  }
  render() {
    const dialogEl = document.createElement('dialog');

    const wrapperDiv = document.createElement('div');
    wrapperDiv.classList.add("detailedCarWrapper");

    const manufacturerHeading = document.createElement('h3');
    manufacturerHeading.textContent = this.manufacturer;

    const modelHeading = document.createElement('h3');
    modelHeading.textContent = this.model;

    const image = document.createElement('img');
    image.setAttribute('src', this.imageUrl);
    image.setAttribute('alt', `${this.model} thumbnail`);

    const priceTag = document.createElement('h3');
    priceTag.textContent = `Price: ${this.price}$`;

    const topSpeedTag = document.createElement('h3');
    topSpeedTag.textContent = `Top speed: ${this.topSpeed}km/h`;

    const accelerationTag = document.createElement('h3');
    accelerationTag.textContent = `0-100km/h in ${this.acceleration}s`;

    const engineTag = document.createElement('h3');
    engineTag.textContent = `Engine:  ${this.engine}`;

    const quantityTag = document.createElement('h3');
    quantityTag.textContent = `Quantity: ${this.quantity}`;

    const productionTag = document.createElement('h3');
    productionTag.textContent = `Production years: ${this.productionYears}`;

    wrapperDiv.append(manufacturerHeading, modelHeading, image, priceTag, productionTag, topSpeedTag, accelerationTag, engineTag, quantityTag);

    const exitButton = document.createElement('button');
    exitButton.textContent = `Less`;
    exitButton.addEventListener('click', () => {
      dialogEl.remove();
    });

    dialogEl.append(wrapperDiv, exitButton);
    return dialogEl;
  }
}