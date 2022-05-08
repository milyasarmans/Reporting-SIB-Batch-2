import RestaurantApiSource from '../../data/restaurantdb-source';
import '../component/restaurant-item';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <section class="jumbotron">
            <picture>
              <source class="lazyload" media="(min-width:601px)" srcset="./images/heros/hero-large.jpg" type="image/jpg">
              <source class="lazyload" media="(max-width:600px)" srcset="./images/heros/hero-small.jpg" type="image/jpg">
              <img class="lazyload" data-src="./images/heros/hero-large.jpg" alt="Hero">
            </picture>
            
            <h1 class="jumbotron-title">find your perfect restaurant</h1>
            <p class="motto-jumbotron">perfect for eating before or after the cinema or a show.</p>
        </section>

        <div class="loader-container" id="loader-container">
          <div id="loader"></div>
        </div>    
        
        <section class="container mt-150">
          <div class="explore-restaurant" id="main-menu">
              <h1>Explore Restaurant</h1>
              <div class="restaurant" id="restaurant-list">

          </div>
        </section>
        `;
  },

  async afterRender() {
    const restaurantApi = await RestaurantApiSource.restaurantList();
    const restaurantContainer = document.querySelector('#restaurant-list');

    if (!restaurantApi.error) {
      restaurantApi.restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    }
    const loaderContainer = document.querySelector('#loader-container');
    loaderContainer.style.display = 'none';
  },
};

export default Home;
