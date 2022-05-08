import CONFIG from '../../globals/config';
import Restaurant from '../../models/restaurant';

class Item extends HTMLElement {
  constructor() {
    super();
    this.restaurant = new Restaurant();
    this.restaurant.name = this.getAttribute('data-name');
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="restaurant-item">
        <div class="card-image">
            <div tabindex="0" class="restaurant-rating">
                <span>Rating ${this.restaurant.rating}</span>
            </div>
            <img class="lazyload restaurant-image"
            data-src="${CONFIG.BASE_IMAGE_URL_SMALL + this.restaurant.pictureId}"
                alt=">${this.restaurant.name}">
        </div>
        <div class="restaurant-container">
            <h1 tabindex="0" class="restaurant-heading"><a>${this.restaurant.name}</a></h1>
            <h2 tabindex="0">${this.restaurant.city}</h2>
            <p class="restaurant-description">${this.restaurant.description.substring(0, 150)}...</p>
        </div>
      </div>`;
  }
}

customElements.define('restaurant-item', Item);
