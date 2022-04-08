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
            <img class="restaurant-image"
                src="${CONFIG.BASE_IMAGE_URL_SMALL + this.restaurant.pictureId}"
                alt=">${this.restaurant.name}">
        </div>
        <div class="restaurant-container">
            <h1 class="restaurant-heading"><a href="#">>${this.restaurant.name}</a></h1>
            <h5 tabindex="0">${this.restaurant.city}</h5>
            <p class="restaurant-description">${this.restaurant.description.substring(0, 150)}...</p>
        </div>
      </div>`;
  }
}

customElements.define('restaurant-item', Item);
