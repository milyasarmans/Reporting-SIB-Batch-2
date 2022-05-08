import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favourite = {
  async render() {
    return `
        <div class="loader-container" id="loader-container">
          <div id="loader"></div>
        </div> 
        <section class="container">
            <div id="focusContent">
                <h1>Restoran Favorit</h1>
                <div class="restaurant" id="restaurant">

            </div>
        </section>
        `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const container = document.querySelector('#restaurant');
    if (restaurants.length === 0) {
      container.innerHTML = 'Tidak ada restaurant yang difavoritkan';
    }
    restaurants.forEach((restaurant) => {
      container.innerHTML += createRestaurantItemTemplate(restaurant);
    });
    const loaderContainer = document.querySelector('#loader-container');
    loaderContainer.style.display = 'none';
  },
};

export default Favourite;
