import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favourite = {
  async render() {
    return `
        <section class="container">
            <div id="focusContent">
                <h1>Restoran Favorit</h1>
                <div class="restaurant" id="restaurant-list">

            </div>
        </section>
        `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const container = document.querySelector('#restaurant-list');
    restaurants.forEach((restaurant) => {
      container.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favourite;
