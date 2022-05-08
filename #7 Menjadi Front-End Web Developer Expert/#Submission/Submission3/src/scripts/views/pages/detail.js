/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable consistent-return */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import Review from '../../utils/review';
import {
  createDetailRestaurantItem,
} from '../templates/template-creator';
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';

const Detail = {
  async render() {
    return `
      <div class="loader-container" id="loader-container">
        <div id="loader"></div>
      </div> 
        <section class="detail-restaurant" id="focusContent">
          <div id="restaurant"></div>
          <div id="likeButtonContainer"></div>

          <div class="form-review">
          <h3 tabindex="0">Tambah Review</h3>
              <form>
                <div class="mb-3">
                  <label for="inputName" class="form-label">Name</label>
                  <input name="inputName" type="text" class="form-control" id="inputName">
                </div>
                <div class="mb-3">
                  <label for="inputReview" class="form-label">Review</label>
                  <input name="inputReview" type="text" class="form-control" id="inputReview">
                </div>
                <button id="submit-review" type="submit" class="btn">Submit</button>
              </form>
          </div>
        </section>
        `;
  },

  async afterRender() {
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      let restaurant = await RestaurantDbSource.detail(url.id);
      restaurant = restaurant.restaurant;
      const container = document.querySelector('#restaurant');
      container.innerHTML = createDetailRestaurantItem(restaurant);

      const loaderContainer = document.querySelector('#loader-container');
      loaderContainer.style.display = 'none';

      LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#restaurant-like-container'),
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          description: restaurant.description,
          city: restaurant.city,
          rating: restaurant.rating,
          pictureId: restaurant.pictureId,
        },
      });
      const submit = document.querySelector('#submit-review');
      const name = document.querySelector('#inputName');
      const review = document.querySelector('#inputReview');

      submit.addEventListener('click', (e) => {
        e.preventDefault();
        if (name.value === '' || review.value === '') {
          alert('Silahkan periksa isian nama dan teks review, tidak boleh kosong!');
          name.value = '';
          review.value = '';
        } else if (navigator.onLine) {
          console.log('online');
          alert('Pesan Terkirim');
          Review(url, name.value, review.value);
          name.value = '';
          review.value = '';
        } else {
          console.log('offline');
          alert('Tidak Ada Internet');
        }
      });
    } catch {
      location.href = '#/404';
      return '';
    }
  },
};

export default Detail;
