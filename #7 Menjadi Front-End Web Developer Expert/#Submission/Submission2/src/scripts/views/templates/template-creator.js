/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import CONFIG from '../../globals/config';

const createListArrayMenu = (items) => {
  let listMenu = '';
  items.forEach((item) => {
    listMenu += `<li>${item.name}</li>`;
  });
  return listMenu;
};

const createRestaurantItemTemplate = (restaurant) => `
<div class="restaurant-item">
    <div class="card-image">
    <div tabindex="0" class="restaurant-rating">
        <span><i class="fa-solid fa-star"></i> ${restaurant.rating}</span>
    </div>
    <img class="restaurant-image"
        src="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}"
        alt="${restaurant.name}">
    </div>
    <div class="restaurant-container">
        <h1 class="restaurant-heading"><a href="./#/detail/${restaurant.id}">${restaurant.name}</a></h1>
        <h5 tabindex="0"><i class="fa-solid fa-location-dot"></i> ${restaurant.city}</h5>
        <p class="restaurant-description">${restaurant.description.substring(0, 250)}...</p>
    </div>
</div>`;

const createDetailRestaurantItem = (restaurant) => `
    <section class="restaurant-detail">
        <div class="detail-main">
            <div class="detail-main-block">
                <img src="${CONFIG.BASE_IMAGE_URL_LARGE + restaurant.pictureId}" alt="${restaurant.name}"></img>
                <div class="container-detail">
                    <div>
                        <p tabindex="0" class="detail-rating">Rating: ${restaurant.rating}</p>
                        <h2 tabindex="0" class="restaurant-name">${restaurant.name}</h2>
                        <p tabindex="0" class="container-detail__location"><i class="fa-solid fa-location-dot"></i> ${restaurant.address}, ${restaurant.city}</p>
                    </div>
                </div>
            </div>
            <div class="main-content detail-container">
                <div class="main-content-block">
                    <h3 tabindex="0" class="title-content" id="about">Deskripsi</h3>
                    <hr>
                    <p tabindex="0">${restaurant.description}</p>
                </div>

                <div class="main-content-block">
                    <h3 tabindex="0" class="title-content" id="menu">Menu</h3>
                    <hr>
                    <div class="menu-container">
                        <div tabindex="0">
                            <p>Foods</p>
                            <ul class="list-menu">
                                ${createListArrayMenu(restaurant.menus.foods)}
                            </ul>
                        </div>
                        <div tabindex="0">
                            <p>Drinks</p>
                            <ul class="list-menu">
                                ${createListArrayMenu(restaurant.menus.drinks)}
                            </ul>
                        </div>
                    </div>
                    
                    <div class="like-container" id="restaurant-like-container"></div>
                </div>

                
                <div class="main-content-block">
                    <h3 tabindex="0" class="title-content" >Customer Review</h3>
                    <hr>       
                    ${restaurant.customerReviews.map((customerReviews) => `                        
                        <div class="review-container">
                            <p tabindex="0" class="review-container-name">${customerReviews.name}</p>
                            <span tabindex="0" class="review-container-date">${customerReviews.date}</span>
                            <p tabindex="0" class="review-container-review">${customerReviews.review}</p>
                        </div>
                    `).join('')}
                    <div id="post-review"></div>
                    </div>
                </div>    
            </div>
        </div>
    </section>`;

const createLikeButtonTemplate = () => `<button aria-label="like this restaurant" id="likeButton" class="like">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="25">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        </button>`;

const createLikedButtonTemplate = () => `<button aria-label="unlike this restaurant" id="likeButton" class="like">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" width="25">
                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
            </svg>
        </button>`;

export {
  createRestaurantItemTemplate,
  createDetailRestaurantItem,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
