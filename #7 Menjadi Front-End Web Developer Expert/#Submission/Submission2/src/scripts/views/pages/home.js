import RestaurantApiSource from '../../data/restaurantdb-source';
import '../component/restaurant-item';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <div class="jumbotron">
            <div tabindex="0" class="main-jumbotron" id="jumbotron">
                <h1 class="heading-jumbotron">find your perfect restaurant</h1>
                <p class="motto-jumbotron">perfect for eating before or after the cinema or a show.</p>
                <button><a href="#main-menu">Search</a></button>
            </div>
        </div>

        <div class="loader-container" id="loader-container">
          <div id="loader"></div>
        </div>    
        
        <section class="container">
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
