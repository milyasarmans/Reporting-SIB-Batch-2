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
    <a href="./#/detail/${restaurant.id}">
        <div class="card-image">
        <div tabindex="0" class="restaurant-rating">
            <span><i class="fa-solid fa-star"></i> ${restaurant.rating}</span>
        </div>
        <img class="lazyload restaurant-image"
        data-src="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}"
            alt="${restaurant.name}">
        </div>
        <div class="restaurant-container">
            <h1 tabindex="0" class="restaurant-heading">${restaurant.name}</h1>
            <h2 tabindex="0"><i class="fa-solid fa-location-dot"></i> ${restaurant.city}</h5>
            <p class="restaurant-description">${restaurant.description.substring(0, 250)}...</p>
        </div>
    </a>
</div>`;

const createDetailRestaurantItem = (restaurant) => `
    <section class="restaurant-detail">
        <div class="detail-main">
            <div class="detail-main-block">
                <img class="lazyload"  data-src="${CONFIG.BASE_IMAGE_URL_LARGE + restaurant.pictureId}" alt="${restaurant.name}"></img>
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

const createLikeRestaurantButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa-regular fa-heart" aria-hidden="true"></i>
    </button>
    `;

const createUnlikeRestaurantButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
    `;

export {
  createRestaurantItemTemplate,
  createDetailRestaurantItem,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
