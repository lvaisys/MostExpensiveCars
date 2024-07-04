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
    this.imageIndex = 0;
    this.imageArray = [];

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
      const imageEl = document.createElement('img');
      imageEl.setAttribute('src', image.imageUrl);
      imageEl.setAttribute('alt', `${this.model} thumbnail`);
      this.imageArray.push(imageEl);
    });
    const next = document.createElement("button");
    next.classList.add("nextBtn");
    next.classList.add("bi");
    next.classList.add("bi-caret-right");
    next.addEventListener('click', () => {
      this.imageIndex++;
      if (this.imageIndex >= this.imageArray.length) {
        this.imageIndex = 0;
      }
      this.showImage(this.imageIndex);
    });
    const prev = document.createElement("button");
    prev.classList.add("prevBtn");
    prev.classList.add("bi");
    prev.classList.add("bi-caret-left");
    prev.addEventListener('click', () => {
      this.imageIndex--;
      if (this.imageIndex < 0) {
        this.imageIndex = this.imageArray.length - 1;
      }
      this.showImage(this.imageIndex);
    });
    this.imageArray[0].classList.add("visible");
    imageContainer.append(...this.imageArray, prev, next);


    wrapperDiv.append(modelHeading, imageContainer, priceTag, productionTag, topSpeedTag, accelerationTag, engineTag, quantityTag);
    const exitButton = document.createElement('button');
    exitButton.textContent = `Less`;
    exitButton.addEventListener('click', () => {
      dialogEl.remove();
    });

    dialogEl.append(wrapperDiv, exitButton);
    return dialogEl;
  }

  showImage(index) {
    this.imageArray.forEach((img, i) => {
      if (i === index) {
        img.classList.add('visible');
      } else {
        img.classList.remove('visible');
      }
    });
  }
}