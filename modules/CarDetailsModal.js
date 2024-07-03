export default class CarDetailsModal {
  constructor(model, images, manufacturer, price, top_speed, acceleration, engine, productionYears, quantity) {
    this.model = model;
    this.images = images;
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

    const manufacturerHeading = document.createElement('h2');
    manufacturerHeading.textContent = this.manufacturer;

    const modelHeading = document.createElement('h2');
    modelHeading.textContent = this.model;


    const priceTag = document.createElement('h4');
    priceTag.textContent = `Price: $${this.price}`;

    const topSpeedTag = document.createElement('h4');
    topSpeedTag.textContent = `Top speed: ${this.topSpeed}km/h`;

    const accelerationTag = document.createElement('h4');
    accelerationTag.textContent = `0-100km/h in ${this.acceleration}s`;

    const engineTag = document.createElement('h4');
    engineTag.textContent = `Engine:  ${this.engine}`;

    const quantityTag = document.createElement('h4');
    quantityTag.textContent = `Quantity: ${this.quantity}`;

    const productionTag = document.createElement('h4');
    productionTag.textContent = `Production years: ${this.productionYears}`;

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("scrollHoriz");

    this.images.forEach(image => {
      const imageTest = document.createElement('img');
      imageTest.setAttribute('src', image.imageUrl);
      imageTest.setAttribute('alt', `${this.model} thumbnail`);
      imageContainer.appendChild(imageTest);
    });

    wrapperDiv.append(modelHeading, imageContainer, priceTag, productionTag, topSpeedTag, accelerationTag, engineTag, quantityTag);
    const exitButton = document.createElement('button');
    exitButton.textContent = `Less`;
    exitButton.addEventListener('click', () => {
      dialogEl.remove();
    });

    dialogEl.append(wrapperDiv, exitButton);
    return dialogEl;
  }
}